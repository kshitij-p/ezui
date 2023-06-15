export type ProcedureResult =
  | {
      readonly status: "success";
      value: unknown;
    }
  | {
      readonly status: "error";
      reason: unknown;
    };

export const promisePool = async (
  jobs: Array<(...args: any) => Promise<unknown>>,
  concurrency: number = jobs.length
) => {
  let idx = 0;
  let result: Array<ProcedureResult> = new Array(jobs.length);

  async function evaluateNext() {
    if (idx >= jobs.length) return;
    const fn = jobs[idx];
    let resultIdx = idx++;
    if (!fn) return;

    try {
      result[resultIdx] = { status: "success", value: await fn() };
    } catch (e) {
      result[resultIdx] = { status: "error", reason: e };
    }
    await evaluateNext();
  }

  const nPromises = new Array(concurrency);

  for (let i = 0; i < concurrency; i++) {
    nPromises[i] = evaluateNext();
  }

  await Promise.allSettled(nPromises);
  return result;
};

export const promiseBatch = async (jobs: Array<(...args: any) => Promise<unknown>>, batchSize: number) => {
  if (batchSize <= 0) throw new Error("Batch size can't be 0");

  let slices: Array<typeof jobs> = [[]];

  const result: Array<ProcedureResult> = [];

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    if (!job) continue;

    let slice = slices[slices.length - 1];
    if (!slice) {
      slice = [];
      slices.push(slice);
    }

    slice.push(async () => {
      try {
        result.push({ status: "success", value: await job() });
      } catch (e) {
        result.push({ status: "error", reason: e });
      }
    });

    if (slice.length >= batchSize && i < jobs.length - 1) {
      slices.push([]);
    }
  }

  for (let slice of slices) {
    await Promise.allSettled(slice.map((job) => job()));
  }

  return result;
};
