import { existsSync, readdirSync, rmSync, writeFileSync } from "fs";
import { COMPS_PATH, DEMO_COMPS_PATH, REGISTRY_PATH, checkForInconsistentImports } from "./utils";
import path from "path";

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

  const comps = readdirSync(COMPS_PATH, {
    encoding: "utf-8",
  });

  let registryContents = `//This file was autogenerated from scripts/buildRegistry
  import React from "react"\n`;

  registryContents += `export const registryComponents = {`;

  for (let comp of comps) {
    let demoFilePath = path.join(DEMO_COMPS_PATH, `Demo${comp}.tsx`);
    if (!existsSync(demoFilePath)) {
      console.log(`Skipping ${comp} because a demo component for it doesn't exist`);
      continue;
    }

    let displayName = "";

    for (let i = 0; i < comp.length; i++) {
      let char = comp[i];
      if (!char) continue;
      if (i > 0 && char.toUpperCase() === char) {
        displayName += ` ${char}`;
      } else {
        displayName += char;
      }
    }

    const data = {
      name: `"${comp}"`,
      displayName: `"${displayName}"`,
      demoComponent: `React.lazy(() => import("@/components/demo/Demo${comp}"))`,
      demoFileName: `"Demo${comp}.tsx"`,
      depedencies: "[]",
    } satisfies {
      name: string;
      displayName: string;
      depedencies: string;
      demoFileName: string;
      demoComponent: string;
    };

    registryContents += `${comp}:{`;

    for (let [key, value] of Object.entries(data)) {
      registryContents += `${key}:${value},`;
    }

    registryContents += "},";
  }

  rmSync(REGISTRY_PATH, {
    force: true,
  });

  registryContents += "}";
  writeFileSync(REGISTRY_PATH, registryContents, {
    encoding: "utf-8",
  });
};

console.time();
run();
console.timeEnd();
