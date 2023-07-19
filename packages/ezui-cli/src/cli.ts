#!/usr/bin/env node
import chalk from "chalk";
import prompts from "prompts";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { program } from "commander";

const REGISTRY_API = "https://ezui.vercel.app/api";

const log = console.log;
const error = (text: string) => console.error(chalk.red(`Error: ${text}`));

const addAction = async (
  passedName: string | undefined,
  options: Partial<{
    y: boolean;
    dir: string;
  }>
) => {
  const allComponents = (await (await fetch(`${REGISTRY_API}/components`)).json()) as {
    [k: string]: {
      files: Array<{
        fileName: string;
        fileContent: string;
      }>;
    };
  };

  if (!allComponents) {
    error("Failed to get component registry");
    process.exit(1);
  }

  if (passedName) {
    passedName = Object.keys(allComponents).find((name) => name.toLowerCase() === passedName?.toLowerCase());
  }

  const compName =
    passedName && passedName in allComponents
      ? passedName
      : (
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

  const location = options.dir
    ? options.dir
    : (
        await prompts({
          type: "text",
          name: "value",
          message: "Where would you like to install ?",
          initial: "./src/components",
        })
      ).value;

  const compsDir = path.resolve(process.cwd(), location);
  const compDir = path.join(compsDir, compName);

  if (!options.y) {
    const finalizeInstall: boolean = (
      await prompts({
        type: "confirm",
        name: "value",
        message: `Confirm installing ${compName} at ${compDir}`,
      })
    ).value;

    if (!finalizeInstall) {
      //Todo go back to location prompt when this happens
      process.exit(1);
    }
  }

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

program
  .name("ezui")
  .description("A react component library")
  .version("0.1.0")
  .action(async () => {
    //Todo add a fancy screen :>
    log(chalk.blue("Welcome to the ezui cli"));

    const action = (
      await prompts({
        type: "select",
        name: "value",
        message: "What would you like to do ?",
        choices: [{ title: "Add a component" }],
      })
    ).value;

    if (action === 0) {
      await addAction(undefined, {});
      return;
    }
  });

program
  .command("add")
  .argument("[component name]", "Name of the component to install")
  .option(
    "--dir <directory>",
    "The directory where components should be installed. You will be asked to provide this if you dont provide this via the flag."
  )
  .option("-y", "Agree to all optional yes and no questions")
  .action(addAction);

export const cli = program;
