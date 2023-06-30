import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { codeImport } from "remark-code-import";
import rehypePrettyCode from "rehype-pretty-code";

import { u } from "unist-builder";
import { visit } from "unist-util-visit";
import { readFileSync } from "fs";
import * as path from "path";
import { COMPS_PATH, DEMO_COMPS_PATH } from "./src/scripts/utils";
import { registryComponents } from "./src/registry";

export interface UnistNode extends Node {
  type: string;
  name?: string;
  tagName?: string;
  value?: string;
  properties?: {
    __rawString__?: string;
    __className__?: string;
    __event__?: string;
    [key: string]: unknown;
  } & NpmCommands;
  attributes?: {
    name: string;
    value: unknown;
    type?: string;
  }[];
  children?: UnistNode[];
}

export interface UnistTree extends Node {
  children: UnistNode[];
}

export interface NpmCommands {
  __npmCommand__?: string;
  __yarnCommand__?: string;
  __pnpmCommand__?: string;
}

//Component docs file are made a diff type for distinction
export const Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: `components/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    radixApiReference: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (component) => {
        return `/docs/components/${component._raw.flattenedPath}`;
      },
    },
  },
}));

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (component) => {
        return `/docs/${component._raw.flattenedPath}`;
      },
    },
  },
}));

const generateCodeFromFile = (path: string, language = "tsx") => {
  const source = readFileSync(path, "utf8");

  return u("element", {
    tagName: "pre",
    children: [
      u("element", {
        tagName: "code",
        properties: {
          className: [`language-${language}`],
        },
        children: [
          {
            type: "text",
            value: source,
          },
        ],
      }),
    ],
  });
};

const rehypeGenerateCodeFromFile = () => {
  return async (tree: any) => {
    visit(tree, (node: any) => {
      if (node.name === "ComponentDemo") {
        const name = getNodeAttributeByName(node, "name")?.value as string;

        if (!name) {
          return null;
        }

        const component = registryComponents[name as keyof typeof registryComponents];
        if (!component) return null;

        try {
          node.children?.push(generateCodeFromFile(path.join(DEMO_COMPS_PATH, component.demoFileName)));
        } catch (error) {
          console.error(`Failed to generate code lines for ComponentDemo with name: ${name}`, error);
        }
      } else if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value as string;

        if (!name) {
          return null;
        }

        const component = registryComponents[name as keyof typeof registryComponents];
        if (!component) return null;

        try {
          node.children?.push(generateCodeFromFile(path.join(COMPS_PATH, component.name, `${component.name}.tsx`)));
        } catch (error) {
          console.error(`Failed to generate code lines for ComponentSource with name: ${name}`, error);
        }
      } else if (node.name === "FileCode") {
        const name = getNodeAttributeByName(node, "name")?.value as string;
        const language = getNodeAttributeByName(node, "language")?.value as string | undefined;

        if (!name) {
          return null;
        }

        try {
          node.children?.push(generateCodeFromFile(path.resolve(name), language));
        } catch (error) {
          console.error(`Failed to generate code lines for FileCode with name: ${name}`, error);
        }
      }
    });
  };
};

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

export default makeSource({
  contentDirPath: "content/docs",
  documentTypes: [Component, Doc],
  mdx: {
    remarkPlugins: [codeImport],
    rehypePlugins: [rehypeGenerateCodeFromFile, () => rehypePrettyCode({ keepBackground: false, theme: "poimandres" })],
  },
});
