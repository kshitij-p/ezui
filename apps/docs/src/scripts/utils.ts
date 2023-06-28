import { readdirSync } from "fs";
import { readFile } from "fs/promises";
import path from "path";

export const COMPS_PATH = path.resolve("./", "src", "components", "ui");
export const COMPS_JSON_PATH = path.resolve("./", "src", "app", "api", "components", "components.json");

export const checkForInconsistentImports = async () => {
  let matcher = /import\s*{[^}]*}\s*from\s*"(\.\.\/ui\/[^"]*)";/gm;

  const components = readdirSync(COMPS_PATH);

  let count = 0;

  for (let compName of components) {
    let compPath = path.resolve(COMPS_PATH, compName);
    let compFiles = readdirSync(compPath);

    await Promise.all(
      compFiles.map(
        (fileName) =>
          new Promise(async (resolve) => {
            let fileContent = await readFile(path.resolve(compPath, fileName), {
              encoding: "utf-8",
            });

            for (let [_, match] of fileContent.matchAll(matcher)) {
              if (!match) continue;
              count++;
              console.log(`Found ${match} in ${fileName}`);
            }

            resolve(null);
          })
      )
    );
  }

  return count;
};
