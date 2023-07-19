#!/usr/bin/env node
import chalk from "chalk";
import prompts from "prompts";
import { program } from "commander";
import addAction from "./actions/addAction";
import { log } from "./utils";
import initAction from "./actions/initAction";

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
        choices: [{ title: "Setup ezui" }, { title: "Add a component" }],
      })
    ).value;

    if (action === 0) {
      await initAction(undefined, {});
      return;
    }

    if (action === 1) {
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

program
  .command("init")
  .argument("[component name]", "Name of the component to install")
  .option(
    "--dir <directory>",
    "The root directory where ezui will be installed. You will be asked to provide this if you dont provide this via the flag."
  )
  .option("-y", "Agree to all optional yes and no questions")
  .action(initAction);

export const cli = program;
