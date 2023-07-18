#!/usr/bin/env node
import "dotenv/config";
import chalk from "chalk";
import prompts from "prompts";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

const log = console.log;
const error = (text: string) => console.error(chalk.red(`Error: ${text}`));

const prefix = "cli-test";

const run = async () => {
  //Todo use t3 env
  const allComponents = (await (await fetch(`${process.env.REGISTRY_API}/components`)).json()) as {
    [k: string]: {
      files: Array<{
        fileName: string;
        fileContent: string;
      }>;
    };
  };

  if (!allComponents) return;

  //Todo add a fancy screen :>
  log(chalk.blue("Welcome to the ezui cli"));

  const compName = (
    await prompts({
      type: "autocomplete",
      name: "value",
      message: "Which component do you want to install",
      choices: Object.keys(allComponents).map((title) => ({ title })),
    })
  ).value;

  const comp = allComponents[compName];

  if (!comp) {
    error(
      `Couldnt find a component called ${compName}. This is most likely an error, please file a github issue about it.`
    );
    process.exit(1);
  }

  const location = (
    await prompts({
      type: "text",
      name: "value",
      message: "Where would you like to install ?",
      initial: "./src/components",
    })
  ).value;

  const compsDir = path.resolve(process.cwd(), process.env.NODE_ENV !== "production" ? prefix : "", location);
  const compDir = path.resolve(compsDir, compName);

  await mkdir(compDir, {
    recursive: true,
  });

  await Promise.all(
    comp.files.map(
      (file) =>
        new Promise(async (resolve) => {
          await writeFile(path.resolve(compDir, file.fileName), file.fileContent, {
            encoding: "utf-8",
          });
          resolve(undefined);
        })
    )
  );

  log(chalk.blue(`Successfully installed ${compName}`));
};

run();
