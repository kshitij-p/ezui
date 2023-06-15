import puppeteer, { Browser, Page, PuppeteerLaunchOptions, WaitForOptions } from "puppeteer";
import { Schema, z, ZodError } from "zod";
import { promiseBatch, promisePool } from "../utils";

export interface Procedure<TOutputSchema extends Schema> {
  target: {
    url: string | string[];
    options?: WaitForOptions;
  };
  scrape: ({ browser, page }: { browser: Browser; page: Page }) => Promise<unknown>;
  output: TOutputSchema;
  prePageMiddleware?: () => Promise<void>;
  onComplete?: (data: Zod.infer<TOutputSchema>) => Promise<any>;
  onError?: (
    errorInfo: { error: unknown; readonly isZodError: false } | { error: ZodError; readonly isZodError: true }
  ) => void;
}

export type DefaultProcedure = Procedure<Schema>;

type PartPartial<TObj, TKeysToExclude extends keyof TObj> = Omit<Partial<TObj>, TKeysToExclude> &
  Pick<TObj, TKeysToExclude>;

export const createProcedure = <TOutputSchema extends Schema>({
  target,
  scrape,
  output: passedOutput,
  onComplete,
  onError,
  prePageMiddleware,
}: PartPartial<Procedure<TOutputSchema>, "target" | "scrape">) => {
  const output = passedOutput ?? z.any();

  return {
    target,
    scrape,
    output,
    onComplete,
    onError,
    prePageMiddleware,
  } as DefaultProcedure;
};

export type RouterMode = "batch" | "pool";

export interface Router<TMode extends RouterMode> {
  mode: TMode;
  procedures: Procedure<Schema>[];
  maximumConcurrency: number | undefined;
  preBrowserMiddleware?: () => Promise<void>;
  procedure: <TOutputSchema extends Schema>(
    args: Parameters<typeof createProcedure<TOutputSchema>>[0]
  ) => ezuiRouter<TMode>;
  start: () => Promise<unknown[]>;
  batchSize: number;
}

export type RouterConfig<TMode extends RouterMode> = {
  maximumConcurrency: TMode extends "pool" ? Router<TMode>["maximumConcurrency"] : undefined;
  preBrowserMiddleware?: () => Promise<void>;
  mode: Router<TMode>["mode"];
  batchSize?: TMode extends "batch" ? number : undefined;
} & PuppeteerLaunchOptions;

export const defaultRouterConfig: RouterConfig<"pool"> = {
  maximumConcurrency: undefined,
  mode: "pool",
};

export class ezuiRouter<TMode extends RouterMode> implements Router<TMode> {
  procedures: Router<TMode>["procedures"];
  maximumConcurrency: Router<TMode>["maximumConcurrency"];
  preBrowserMiddleware: Router<TMode>["preBrowserMiddleware"];
  batchSize: Router<TMode>["batchSize"] = 5;
  mode: TMode;

  constructor(passedConfig?: PartPartial<RouterConfig<TMode>, "batchSize">) {
    const { maximumConcurrency, preBrowserMiddleware, mode, batchSize } = { ...defaultRouterConfig, ...passedConfig };

    this.procedures = [];
    this.maximumConcurrency = maximumConcurrency;
    this.preBrowserMiddleware = preBrowserMiddleware;
    this.mode = mode as TMode;

    if (batchSize) {
      this.batchSize = batchSize;
    } else if (mode === "batch") {
      console.warn("Batch size was not provided so a default batch size 5 was set");
    }
  }

  procedure<TOutputSchema extends Schema>(args: Parameters<typeof createProcedure<TOutputSchema>>[0]) {
    this.procedures.push(createProcedure<TOutputSchema>(args));
    return this;
  }

  async start() {
    const jobs: Array<(...args: any) => Promise<unknown>> = [];

    if (this.preBrowserMiddleware) {
      this.preBrowserMiddleware();
    }

    const browser = await puppeteer.launch({ headless: "new" });

    for (let {
      target: { url: targetUrl, options: targetOptions },
      output,
      scrape,
      onComplete,
      onError,
      prePageMiddleware,
    } of this.procedures) {
      const isArray = Array.isArray(targetUrl);
      const urls = isArray ? (targetUrl as string[]) : [targetUrl as string];

      if (urls.length <= 0) continue;

      for (let url of urls) {
        jobs.push(
          () =>
            new Promise(async (resolve, reject) => {
              try {
                if (prePageMiddleware) {
                  await prePageMiddleware();
                }

                const page = await browser.newPage();

                await page.goto(url, targetOptions);

                let data = await scrape({ browser, page });

                await page.close();

                if (output) {
                  data = output.parse(data);
                }

                if (onComplete) {
                  resolve(await onComplete(data));
                }

                resolve(data);
              } catch (e) {
                if (onError) {
                  if (e instanceof ZodError) {
                    onError({ error: e, isZodError: true });
                  } else {
                    onError({ error: e, isZodError: false });
                  }
                }
                reject(e);
              }
            })
        );
      }
    }

    let result;

    if (this.mode === "pool") {
      result = await promisePool(jobs, this.maximumConcurrency);
    } else {
      result = await promiseBatch(jobs, this.batchSize);
    }

    await browser.close();

    return result;
  }
}
