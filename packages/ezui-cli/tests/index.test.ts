import { beforeAll, describe, expect, it } from "vitest";
import path from "path";
import { existsSync } from "fs";
import { rm } from "fs/promises";
import { exec } from "child_process";

const testDirName = "cli-test";
const testDir = path.join(process.cwd(), testDirName);
const testCompDir = path.resolve(testDirName, "src", "components");

const runCli = (args: string[]) => {
  return new Promise((resolve) => {
    exec(`node ${path.join("dist", "index.js")} ${args.join(" ")}`, {}, (err, stdout, stderr) => {
      if (err) {
        console.log({ err });
      }
      console.log(stdout);
      if (stderr) {
        console.log({ stderr });
      }
      resolve(undefined);
    });
  });
};

describe("end to end tests", () => {
  beforeAll(async () => {
    if (existsSync(testDir)) {
      await rm(testDir, {
        recursive: true,
      });
    }
  });

  it("installs component from registry", async () => {
    await runCli(["add", "--dir", "cli-test/src/components", "-y", "accordion"]);

    expect(existsSync(path.join(testCompDir, "Accordion", "Accordion.tsx"))).toBe(true);
  });
});
