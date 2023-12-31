"use client";

import * as React from "react";
import * as RadixScrollArea from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";

const ScrollAreaRoot = React.forwardRef<
  React.ElementRef<typeof RadixScrollArea.Root>,
  React.ComponentPropsWithoutRef<typeof RadixScrollArea.Root>
>(({ children, className, type = "auto", ...rest }, passedRef) => {
  return (
    <RadixScrollArea.Root
      {...rest}
      className={cn("relative h-full w-full overflow-hidden", className)}
      type={type}
      ref={passedRef}
    >
      {children}
    </RadixScrollArea.Root>
  );
});
ScrollAreaRoot.displayName = "ScrollAreaRoot";

const ScrollAreaViewport = React.forwardRef<
  React.ElementRef<typeof RadixScrollArea.Viewport>,
  React.ComponentPropsWithoutRef<typeof RadixScrollArea.Viewport>
>(({ children, className }, passedRef) => {
  return (
    <RadixScrollArea.Viewport
      className={cn("h-full w-full rounded-[inherit]", className)}
      //Fixes a radix ui bug where Select.Viewport sets overflow and RadixScrollArea.Viewport also sets overflow and this clashes as one uses shorthand other doesnt
      style={{ overflowY: undefined }}
      ref={passedRef}
    >
      {children}
    </RadixScrollArea.Viewport>
  );
});
ScrollAreaViewport.displayName = RadixScrollArea.Viewport.displayName;

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaRoot>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaRoot>
>(({ children, className, ...rest }, passedRef) => {
  return (
    <ScrollAreaRoot {...rest} className={className} ref={passedRef}>
      <ScrollAreaViewport>{children}</ScrollAreaViewport>
      <ScrollBar />
    </ScrollAreaRoot>
  );
});
ScrollArea.displayName = RadixScrollArea.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof RadixScrollArea.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof RadixScrollArea.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...rest }, passedRef) => (
  <RadixScrollArea.ScrollAreaScrollbar
    {...rest}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none bg-transparent transition-colors",
      orientation === "vertical" && "h-full w-1 hover:w-[5px]",
      orientation === "horizontal" && "h-1 w-full hover:h-[5px]",
      className
    )}
    ref={passedRef}
  >
    <RadixScrollArea.ScrollAreaThumb className="relative flex-1 rounded bg-scroll-thumb/50 hover:bg-scroll-thumb focus-visible:bg-scroll-thumb" />
  </RadixScrollArea.ScrollAreaScrollbar>
));
ScrollBar.displayName = RadixScrollArea.ScrollAreaScrollbar.displayName;

export { ScrollAreaRoot, ScrollAreaViewport, ScrollArea, ScrollBar };
