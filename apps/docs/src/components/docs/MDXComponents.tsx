"use client";

import { cn } from "@/lib/utils";
import { MDXComponents } from "mdx/types";
import ComponentDemo from "./ComponentDemo";

import Link from "next/link";
import CodeBlock from "./CodeBlock";
import { Code } from "../ui/Code";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/Table";
import CodeCopyBlock from "./CodeCopyBlock";
import ComponentSource from "./ComponentSource";

const MdxLink = ({ className, ...rest }: React.ComponentPropsWithoutRef<typeof Link>) => (
  <Link
    {...rest}
    className={cn(
      "relative underline decoration-border underline-offset-4 transition hover:text-foreground/75",
      className
    )}
  />
);

const mdxComponents = {
  h1: ({ className, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...rest} className={cn("font-heading mt-2 scroll-m-20 text-4xl font-bold", className)} />
  ),
  h2: ({ className, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...rest}
      className={cn("mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0", className)}
    />
  ),
  p: ({ className, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...rest} className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} />
  ),
  ul: ({ className, ...rest }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...rest} className={cn("my-6 ml-6 list-disc", className)} />
  ),
  li: ({ className, ...rest }: React.HTMLAttributes<HTMLElement>) => (
    <li {...rest} className={cn("mt-2 marker:text-primary", className)} />
  ),
  Step: ({ className, ...rest }: React.ComponentProps<"h3">) => (
    <h3 {...rest} className={cn("font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className)} />
  ),
  Steps: ({ ...rest }) => (
    <div>
      <div className="[&>h3]:step mb-12 ml-4 border-l pl-8 [counter-reset:step]" {...rest} />
    </div>
  ),
  CopyCodeBlock: CodeCopyBlock,
  ComponentDemo: ComponentDemo,
  FileCode: ({
    children,
    copyable = false,
  }: React.PropsWithChildren & {
    name: string;
    copyable?: boolean;
  }) => {
    const code = React.Children.toArray(children);

    return copyable ? <CodeCopyBlock>{code}</CodeCopyBlock> : <CodeBlock>{code}</CodeBlock>;
  },
  ComponentSource: ComponentSource,
  Link: MdxLink,
  HeaderLink: ({ className, ...rest }: React.ComponentPropsWithoutRef<typeof MdxLink>) => (
    <MdxLink
      {...rest}
      className={cn(
        "inset-0 before:absolute before:right-full before:mr-1 before:text-foreground/75 before:opacity-0 before:transition before:content-['#'] hover:before:opacity-100",
        className
      )}
    />
  ),
  Code: Code,
  CodeBlock: CodeBlock,
  CodeCopyBlock: CodeCopyBlock,
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Tabs: Tabs,
  TabsList: TabsList,
  TabsTrigger: TabsTrigger,
  TabsContent: TabsContent,
  Table: Table,
  TableCaption: TableCaption,
  TableHeader: TableHeader,
  TableHead: TableHead,
  TableBody: TableBody,
  TableRow: TableRow,
  TableCell: TableCell,
} satisfies MDXComponents;

const MDXComponents = ({ content }: { content: Parameters<typeof useMDXComponent>[0] }) => {
  const MDXContent = useMDXComponent(content);

  return <MDXContent components={mdxComponents} />;
};

export default MDXComponents;
