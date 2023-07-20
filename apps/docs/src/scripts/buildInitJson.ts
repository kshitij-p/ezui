import path from "path";
import { readFile } from "fs/promises";
import { writeFileSync } from "fs";

type InstallsJson = {
  "styles/globals.css": string;
  "tailwind.config.ts": string;
  "lib/utils.ts": string;
};

const run = async () => {
  let file = {} as InstallsJson;

  const cwd = path.resolve(".");

  const files: {
    [k in keyof InstallsJson]: string;
  } = {
    "styles/globals.css": path.join(cwd, "src", "styles", "globals.css"),
    "tailwind.config.ts": path.join(cwd, "tailwind.config.ts"),
    "lib/utils.ts": path.join(cwd, "src", "lib", "utils.ts"),
  } as const;

  await Promise.allSettled(
    Object.entries(files).map(async ([name, path]) => {
      const contents = await readFile(path, {
        encoding: "utf-8",
      });

      file[name as keyof typeof file] = contents;
    })
  );

  writeFileSync(path.join(cwd, "src", "app", "api", "init", "init.json"), JSON.stringify(file), {
    encoding: "utf-8",
  });
};

run();
