import { cn } from "@/lib/utils";
import React, { ForwardedRef } from "react";

const Code = React.forwardRef(
  (
    {
      children,
      className,
      block = false,
    }: React.ComponentPropsWithoutRef<"pre"> & {
      block?: boolean;
    },
    passedRef: ForwardedRef<HTMLElement>
  ) => {
    const Parent = block ? "pre" : React.Fragment;

    return (
      <Parent>
        <code
          className={cn("relative rounded border border-border-light bg-muted px-1.5 py-1", className)}
          ref={passedRef}
        >
          {children}
        </code>
      </Parent>
    );
  }
);
Code.displayName = "Code";

export { Code };
