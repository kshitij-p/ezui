#!/usr/bin/env ts-node

import { readdirSync, rmSync, writeFileSync } from "fs";
import { readFile } from "fs/promises";
import path from "path";
import { COMPS_JSON_PATH, COMPS_PATH, checkForInconsistentImports } from "./utils";

type ComponentFile = {
  fileName: string;
  fileContent: string;
};

const validate = async () => {
  let badImportsCount = await checkForInconsistentImports();
  if (badImportsCount) {
    console.log("Bad imports detected — Aborting");
    return false;
  }
  return true;
};

const run = async () => {
  if (!(await validate())) {
    return;
  }

  console.log(`Creating components.json at ${COMPS_JSON_PATH}`);

  rmSync(COMPS_JSON_PATH, {
    force: true,
    maxRetries: 0,
  });

  let compsData = {} as {
    [k: string]: {
      files: ComponentFile[];
    };
  };

  const components = readdirSync(COMPS_PATH);

  for (let compName of components) {
    let compPath = path.resolve(COMPS_PATH, compName);
    let compFiles = readdirSync(compPath);

    const files: ComponentFile[] = new Array(compFiles.length);
    await Promise.all(
      compFiles.map(
        (fileName, idx) =>
          new Promise(async (resolve) => {
            let fileContent = await readFile(path.resolve(compPath, fileName), {
              encoding: "utf-8",
            });
            files[idx] = {
              fileName,
              fileContent,
            };
            resolve(null);
          })
      )
    );

    compsData[compName] = {
      files,
    };

    writeFileSync(COMPS_JSON_PATH, JSON.stringify(compsData), {
      encoding: "utf-8",
    });
  }
};

console.time();
run();
console.timeEnd();
