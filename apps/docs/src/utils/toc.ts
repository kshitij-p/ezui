import { toc } from "mdast-util-toc";
import { remark } from "remark";
import { visit } from "unist-util-visit";

const textTypes = ["text", "emphasis", "strong", "inlineCode"];

function flattenNode(node: { value: string; type: string }) {
  const p: string[] = [];
  visit(node, (node) => {
    node.type;
    if (!textTypes.includes(node.type)) return;
    p.push(node.value);
  });
  return p.join(``);
}

export interface Item {
  title: string;
  url: string;
  items?: Item[];
}

export interface Items {
  items?: Item[];
}

type RemarkNode = {
  type: string;
  spread: boolean;
  url: string;
  children: RemarkNode[];
  value: string;
};

// Expected to get a url like #headerlink-hrefwhy-idwhy-why-to-choose-a-copy-paste-library-headerlink
// and expected to return "why"
const getUrl = (text: string) => {
  let href = text.split("href")?.pop()?.split("-").shift();

  return href ? href : text;
};

const getItems = (node: RemarkNode | undefined, current: Item): Items => {
  if (!node) {
    return {};
  }

  if (node.type === "paragraph") {
    visit(node, (item) => {
      if (item.type === "link") {
        current.url = getUrl(item.url);
        current.title = flattenNode(node);
      }

      if (item.type === "text") {
        current.title = flattenNode(node);
      }
    });

    return current;
  }

  if (node.type === "list") {
    current.items = node.children.map((i) => getItems(i, {} as Item)) as Item[];

    return current;
  } else if (node.type === "listItem") {
    const heading = getItems(node.children[0], {} as Item);

    if (node.children.length > 1) {
      getItems(node.children[1], heading as Item);
    }

    return heading;
  }

  return {};
};

const getToc = () => (node: any, file: any) => {
  const table = toc(node);
  const items = getItems(table.map as unknown as RemarkNode, {} as Item);

  file.data = items;
};

export type TableOfContents = Items;

export async function getTableOfContents(content: string): Promise<TableOfContents> {
  const result = await remark().use(getToc).process(content);

  return result.data;
}
