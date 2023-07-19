import prompts from "prompts";
import path from "path";
import { existsSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { log } from "../utils";

const createOrOverwrite = async ({ path, content, fileName }: { path: string; content: string; fileName?: string }) => {
  let exists = existsSync(path);

  if (
    !exists ||
    (exists &&
      (
        await prompts({
          type: "confirm",
          name: "value",
          message: `${fileName ?? path} already exists. Do you wish to overwrite this?`,
        })
      ).value)
  ) {
    await writeFile(path, content, {
      encoding: "utf-8",
    });
  }
};

const initAction = async (
  _: string | undefined,
  options: Partial<{
    y: boolean;
    dir: string;
  }>
) => {
  let rootDir = path.resolve(
    options.dir
      ? options.dir
      : (
          await prompts({
            type: "text",
            name: "value",
            initial: ".",
            message: "Specify the root folder of the project where you want to install ezui",
          })
        ).value
  );

  while (
    !options.y &&
    !(
      await prompts({
        type: "confirm",
        name: "value",
        message: `Confirm root directory (the one that contains /src) at ${rootDir}`,
      })
    ).value
  ) {
    rootDir = path.resolve(
      (
        await prompts({
          type: "text",
          name: "value",
          initial: ".",
          message: "Specify the root folder of the project where you want to install ezui",
        })
      ).value
    );
  }

  log("Creating styles/globals.css");
  if (!existsSync(path.join(rootDir, "src", "styles"))) {
    await mkdir(path.join(rootDir, "src", "styles"), {
      recursive: true,
    });
  }

  //Todo create api route in apps/docs that has data for all the files needed for init
  await createOrOverwrite({
    path: path.join(rootDir, "src", "styles", "globals.css"),
    content: "asdsad",
    fileName: "styles/globals.css",
  });

  log("Creating tailwind.config.ts");
  //Todo create api route in apps/docs that has data for all the files needed for init
  await createOrOverwrite({
    path: path.join(rootDir, "tailwind.config.ts"),
    content: "asdsad",
    fileName: "tailwind.config.ts",
  });

  log("Creating lib/utils.ts");
  if (!existsSync(path.join(rootDir, "src", "lib"))) {
    await mkdir(path.join(rootDir, "src", "lib"), {
      recursive: true,
    });
  }

  await createOrOverwrite({
    path: path.join(rootDir, "src", "lib", "utils.ts"),
    content: "utils.ts",
    fileName: "lib/utils.ts",
  });

  log(
    `Done! Install tailwindcss and import styles/globals.css. Install the following dependencies with your package manager: class-variance-authority clsx tailwind-merge`
  );
};

export default initAction;
