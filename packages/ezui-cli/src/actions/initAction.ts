import prompts from "prompts";
import path from "path";
import { existsSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { REGISTRY_API, log } from "../utils";

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
  const files = (await (await fetch(`${REGISTRY_API}/init`)).json()) as {
    "styles/globals.css": string;
    "tailwind.config.ts": string;
    "lib/utils.ts": string;
  };

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

  await createOrOverwrite({
    path: path.join(rootDir, "src", "styles", "globals.css"),
    content: files["styles/globals.css"],
    fileName: "styles/globals.css",
  });

  log("Creating tailwind.config.ts");

  await createOrOverwrite({
    path: path.join(rootDir, "tailwind.config.ts"),
    content: files["tailwind.config.ts"],
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
    content: files["lib/utils.ts"],
    fileName: "lib/utils.ts",
  });

  log(
    `Done! Here are your next steps:
    1) Install tailwindcss and import styles/globals.css. 
    2) Install the following dependencies with your package manager: class-variance-authority clsx tailwind-merge
    
    And that's it. Have a good day :D`
  );
};

export default initAction;
