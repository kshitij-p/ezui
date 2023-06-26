"use client";

import * as React from "react";
import * as RadixSeparator from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof RadixSeparator.Root>,
  React.ComponentPropsWithoutRef<typeof RadixSeparator.Root>
>(({ className, orientation = "horizontal", decorative = true, ...rest }, passedRef) => (
  <RadixSeparator.Root
    {...rest}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-separator",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    ref={passedRef}
  />
));
Separator.displayName = RadixSeparator.Root.displayName;

export { Separator };
