"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...rest }, passedRef) => (
  <TooltipPrimitive.Content
    {...rest}
    sideOffset={sideOffset}
    className={cn(
      "z-50 animate-zoomIn overflow-hidden rounded-md border bg-paper px-3 py-1.5 text-sm shadow-md data-[state=closed]:animate-zoomOut",
      className
    )}
    ref={passedRef}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
