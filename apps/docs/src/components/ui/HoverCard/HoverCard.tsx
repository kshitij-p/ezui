"use client";

import * as React from "react";
import * as RadixHoverCard from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = RadixHoverCard.Root;

const HoverCardTrigger = RadixHoverCard.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof RadixHoverCard.Content>,
  React.ComponentPropsWithoutRef<typeof RadixHoverCard.Content>
>(({ className, align = "center", sideOffset = 6, ...rest }, passedRef) => (
  <RadixHoverCard.Content
    {...rest}
    className={cn(
      "z-50 w-64 animate-zoomIn rounded-md border bg-paper p-4 shadow-md outline-none data-[state=closed]:animate-zoomOut",
      className
    )}
    align={align}
    sideOffset={sideOffset}
    ref={passedRef}
  />
));
HoverCardContent.displayName = RadixHoverCard.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
