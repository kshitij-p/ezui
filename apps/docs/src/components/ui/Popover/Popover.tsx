"use client";

import * as React from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

const Popover = RadixPopover.Root;

const PopoverTrigger = RadixPopover.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof RadixPopover.Content>,
  React.ComponentPropsWithoutRef<typeof RadixPopover.Content>
>(({ className, align = "center", sideOffset = 8, ...rest }, passedRef) => (
  <RadixPopover.Portal>
    <RadixPopover.Content
      {...rest}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 animate-zoomIn rounded-md border bg-paper p-4 shadow-md focus:outline-none data-[state=closed]:animate-zoomOut",
        className
      )}
      ref={passedRef}
    />
  </RadixPopover.Portal>
));
PopoverContent.displayName = RadixPopover.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
