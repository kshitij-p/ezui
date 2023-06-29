import { cn } from "@/lib/utils";
import { MDXComponents } from "mdx/types";
import ComponentDemo from "./ComponentDemo";

import ComponentSource from "./ComponentSource";
import Link from "next/link";
import CodeBlock from "./CodeBlock";
import { Code } from "../ui/Code";
import React from "react";

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
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn("mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0", className)}
      {...props}
    />
  ),
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3 className={cn("font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props} />
  ),
  Steps: ({ ...props }) => (
    <div>
      <div className="[&>h3]:step mb-12 ml-4 border-l pl-8 [counter-reset:step]" {...props} />
    </div>
  ),
  ComponentDemo: ComponentDemo,
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
} satisfies MDXComponents;

export default mdxComponents;
