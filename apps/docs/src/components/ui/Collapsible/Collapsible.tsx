"use client";

import * as React from "react";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { cn } from "@/lib/utils";

const Collapsible = RadixCollapsible.Root;

const CollapsibleTrigger = RadixCollapsible.CollapsibleTrigger;

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof RadixCollapsible.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof RadixCollapsible.CollapsibleContent>
>(({ children, className, ...rest }, passedRef) => {
  return (
    <RadixCollapsible.CollapsibleContent
      {...rest}
      className={cn(
        "overflow-hidden data-[state=closed]:animate-collapsibleUp data-[state=open]:animate-collapsibleDown",
        className
      )}
      ref={passedRef}
    >
      {children}
    </RadixCollapsible.CollapsibleContent>
  );
});
CollapsibleContent.displayName = RadixCollapsible.CollapsibleContent.displayName;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
