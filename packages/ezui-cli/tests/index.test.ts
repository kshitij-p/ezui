import { beforeAll, describe, expect, it } from "vitest";
import path from "path";
import { existsSync } from "fs";
import { rm } from "fs/promises";
import { exec } from "child_process";

const testDirName = "cli-test";
const testDir = path.join(process.cwd(), testDirName);
const testCompDir = path.resolve(testDirName, "src", "components");

const removeTestDir = async () => {
  if (existsSync(testDir)) {
    await rm(testDir, {
      recursive: true,
    });
  }
};

const runCli = (args: string[]) => {
  return new Promise((resolve, reject) => {
    exec(`node ${path.join("dist", "index.js")} ${args.join(" ")}`, {}, (err, stdout, stderr) => {
      if (err || stderr) {
        reject(err?.message ?? stderr);
      }
      console.log(stdout);
      resolve(undefined);
    });
  });
};

describe("add command works properly", () => {
  beforeAll(async () => {
    await removeTestDir();
  });

  it("installs component from registry", async () => {
    await runCli(["add", "--dir", "cli-test/src/components", "-y", "accordion"]);

    expect(existsSync(path.join(testCompDir, "Accordion", "Accordion.tsx"))).toBe(true);
  });
});

describe("init command works properly", () => {
  beforeAll(async () => {
    await removeTestDir();
  });

  it("sets up properly", async () => {
    await runCli(["init", "--dir", "cli-test", "-y"]);
  });
});
