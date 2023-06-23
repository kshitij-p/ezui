"use client";

import * as React from "react";
import * as RadixLabel from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

const Label = React.forwardRef<
  React.ElementRef<typeof RadixLabel.Root>,
  React.ComponentPropsWithoutRef<typeof RadixLabel.Root>
>(({ className, ...rest }, passedRef) => (
  <RadixLabel.Root
    {...rest}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    ref={passedRef}
  />
));
Label.displayName = RadixLabel.Root.displayName;

export { Label };
