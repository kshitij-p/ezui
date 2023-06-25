"use client";

import * as React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = RadixTooltip.Provider;

const Tooltip = RadixTooltip.Root;

const TooltipTrigger = RadixTooltip.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof RadixTooltip.Content>,
  React.ComponentPropsWithoutRef<typeof RadixTooltip.Content>
>(({ className, sideOffset = 6, ...rest }, passedRef) => (
  <RadixTooltip.Content
    {...rest}
    sideOffset={sideOffset}
    className={cn(
      "z-50 animate-zoomIn overflow-hidden rounded-md border bg-paper px-3 py-1.5 text-sm shadow-md data-[state=closed]:animate-zoomOut",
      className
    )}
    ref={passedRef}
  />
));
TooltipContent.displayName = RadixTooltip.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
