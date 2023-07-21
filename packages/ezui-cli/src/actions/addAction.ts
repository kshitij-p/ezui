import chalk from "chalk";
import prompts from "prompts";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { REGISTRY_API, error, log } from "../utils";

const getLocation = async () => {
  return await prompts({
    type: "text",
    name: "value",
    message: "Where would you like to install ?",
    initial: "./src/components/ui",
  });
};

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
      deps: string[];
    };
  };

  if (!allComponents) {
    error("Failed to get component registry");
    process.exit(1);
  }

  //Todo check in pascal case as well as snake case
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
            message: "Which component do you want to install ?",
            choices: Object.keys(allComponents).map((title) => ({ title })),
          })
        ).value;

  const comp = allComponents[compName];

  if (!comp) {
    error(
      `Couldnt find a component called ${compName}. This is most likely a bug, please file a github issue about it.`
    );
    process.exit(1);
  }

  let location = options.dir ? options.dir : (await getLocation()).value;

  let compsDir = path.resolve(process.cwd(), location);
  let compDir = path.join(compsDir, compName);

  //Keep asking for location until user confirms a location
  while (
    !options.y &&
    !(
      await prompts({
        type: "confirm",
        name: "value",
        message: `Confirm installing ${compName} at ${compDir} ?`,
      })
    ).value
  ) {
    location = (await getLocation()).value;
    compsDir = path.resolve(process.cwd(), location);
    compDir = path.join(compsDir, compName);
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
  //Todo do somethin for local comp deps - either install them by prompting for it or show the user the command to paste in to do that
  log(
    `Please install the following with your package manager:\n`,
    chalk.blue(comp.deps.filter((str) => !str.startsWith("@/components/ui/")).join(" "))
  );
};

export default addAction;
