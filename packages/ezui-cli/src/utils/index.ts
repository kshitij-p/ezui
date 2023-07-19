import chalk from "chalk";

export const REGISTRY_API = "https://ezui.vercel.app/api";

export const log = console.log;
export const error = (text: string) => console.error(chalk.red(`Error: ${text}`));
