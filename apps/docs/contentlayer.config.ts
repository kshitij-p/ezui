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

export const Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    url: { type: "string", resolve: (component) => `/docs/components/${component._raw.flattenedPath}` },
  },
}));

const rehypeGenerateCodeFromFile = () => {
  return async (tree: any) => {
    visit(tree, (node: any) => {
      const { value: src } = getNodeAttributeByName(node, "src") || {};

      if (node.name === "ComponentDemo") {
        const name = getNodeAttributeByName(node, "name")?.value as string;

        if (!name) {
          return null;
        }

        const component = registryComponents[name as keyof typeof registryComponents];
        if (!component) return null;

        try {
          const source = readFileSync(path.join(DEMO_COMPS_PATH, component.demoFileName), "utf8");

          // Add code as children so that rehype can take over at build time.
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src,
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"],
                  },
                  children: [
                    {
                      type: "text",
                      value: source,
                    },
                  ],
                }),
              ],
            })
          );
        } catch (error) {
          console.error("Failed to generate code lines for ComponentDemo", error);
        }
      } else if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value as string;

        if (!name) {
          return null;
        }

        const component = registryComponents[name as keyof typeof registryComponents];
        if (!component) return null;

        try {
          const source = readFileSync(path.join(COMPS_PATH, component.name, `${component.name}.tsx`), "utf8");

          // Add code as children so that rehype can take over at build time.
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src,
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"],
                  },
                  children: [
                    {
                      type: "text",
                      value: source,
                    },
                  ],
                }),
              ],
            })
          );
        } catch (error) {
          console.error("Failed to generate code lines for ComponentDemo", error);
        }
      }
    });
  };
};

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

export default makeSource({
  contentDirPath: "content/docs/components",
  documentTypes: [Component],
  mdx: {
    remarkPlugins: [codeImport],
    rehypePlugins: [rehypeGenerateCodeFromFile, () => rehypePrettyCode({ keepBackground: false })],
  },
});
