#!/usr/bin/env ts-node

import { readdirSync, rmSync, writeFileSync } from "fs";
import { readFile } from "fs/promises";
import path from "path";
import { COMPS_JSON_PATH, COMPS_PATH, checkForInconsistentImports } from "./utils";

type ComponentFile = {
  fileName: string;
  fileContent: string;
};

const validate = async () => {
  let badImportsCount = await checkForInconsistentImports();
  if (badImportsCount) {
    console.log("Bad imports detected — Aborting");
    return false;
  }
  return true;
};

const deps = {
  Accordion: ["@radix-ui/react-accordion", "lucide-react"],
  AlertDialog: ["@radix-ui/react-alert-dialog", "@/components/ui/Dialog"],
  AspectRatio: ["@radix-ui/react-aspect-ratio"],
  Autocomplete: [
    "@/components/ui/Popover",
    "@/components/ui/Command",
    "@/components/ui/ScrollArea",
    "@/components/ui/Select",
  ],
  Avatar: ["@radix-ui/react-avatar"],
  Badge: ["class-variance-authority"],
  Button: ["class-variance-authority", "@radix-ui/react-slot"],
  Calendar: ["react-day-picker", "@/components/ui/Button"],
  Card: [],
  Checkbox: ["@radix-ui/react-checkbox", "lucide-react"],
  Code: [],
  Collapsible: ["@radix-ui/react-collapsible"],
  Command: ["cmdk", "@/components/ui/ScrollArea", "@/components/ui/Dialog"],
  ContextMenu: ["@radix-ui/react-context-menu", "lucide-react"],
  Dialog: ["@radix-ui/react-dialog"],
  DropdownMenu: ["@radix-ui/react-dropdown-menu", "lucide-react"],
  Form: [
    "@radix-ui/react-label",
    "@radix-ui/react-slot",
    "react-hook-form",
    "@hookform/resolvers",
    "zod",
    "@/components/ui/Label",
  ],
  HoverCard: ["@radix-ui/react-hover-card"],
  Input: ["class-variance-authority"],
  Label: ["@radix-ui/react-label"],
  Menubar: ["@radix-ui/react-menubar", "lucide-react"],
  NavigationMenu: ["@radix-ui/react-navigation-menu", "class-variance-authority", "lucide-react"],
  Popover: ["@radix-ui/react-popover"],
  Progress: ["@radix-ui/react-progress"],
  RadioGroup: ["@radix-ui/react-radio-group", "lucide-react"],
  ScrollArea: ["@radix-ui/react-scroll-area"],
  Select: ["@radix-ui/react-select", "lucide-react", "@/components/ui/ScrollArea"],
  Separator: ["@radix-ui/react-separator"],
  Sheet: ["@radix-ui/react-dialog", "class-variance-authority", "@/components/ui/Dialog"],
  Skeleton: [],
  Slider: ["@radix-ui/react-slider"],
  Switch: ["@radix-ui/react-switch"],
  Table: [],
  Tabs: ["@radix-ui/react-tabs"],
  Textarea: ["@/components/ui/Input"],
  Toast: ["@radix-ui/react-toast", "class-variance-authority", "lucide-react"],
  Toggle: ["@radix-ui/react-toggle", "class-variance-authority"],
  ToggleGroup: ["@radix-ui/react-toggle-group", "@/components/ui/Toggle"],
  Tooltip: ["@radix-ui/react-tooltip"],
};

const run = async () => {
  if (!(await validate())) {
    return;
  }

  console.log(`Creating components.json at ${COMPS_JSON_PATH}`);

  rmSync(COMPS_JSON_PATH, {
    force: true,
    maxRetries: 0,
  });

  let compsData = {} as {
    [k: string]: {
      files: ComponentFile[];
      deps: string[];
    };
  };

  const components = readdirSync(COMPS_PATH);

  for (let compName of components) {
    let compPath = path.resolve(COMPS_PATH, compName);
    let compFiles = readdirSync(compPath);

    const files: ComponentFile[] = new Array(compFiles.length);
    await Promise.all(
      compFiles.map(
        (fileName, idx) =>
          new Promise(async (resolve) => {
            let fileContent = await readFile(path.resolve(compPath, fileName), {
              encoding: "utf-8",
            });

            files[idx] = {
              fileName,
              fileContent,
            };
            resolve(null);
          })
      )
    );

    let compDeps = deps[compName as keyof typeof deps];
    if (!compDeps) {
      console.log(`WARNING: Coulnd't find deps for ${compName}. Falling back to empty deps.`);
      compDeps = [];
    }

    compsData[compName] = {
      files,
      deps: compDeps,
    };

    writeFileSync(COMPS_JSON_PATH, JSON.stringify(compsData), {
      encoding: "utf-8",
    });
  }
};

console.time();
run();
console.timeEnd();
