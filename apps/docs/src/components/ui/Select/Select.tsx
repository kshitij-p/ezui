"use client";

import * as React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { ScrollAreaRoot, ScrollAreaViewport, ScrollBar } from "@/components/ui/ScrollArea";

const Select = RadixSelect.Root;

const SelectGroup = RadixSelect.Group;

const SelectValue = RadixSelect.Value;

//These classes are reused for Autocomplete
const selectTriggerClasses =
  "group flex items-center justify-center gap-2 rounded-md border-2 border-border bg-transparent py-1 pl-3 pr-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-paper aria-[invalid=true]:border-invalid aria-[invalid=true]:focus-visible:ring-invalid/75 data-[disabled]:opacity-50";

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Trigger>
>(({ children, className, ...rest }, passedRef) => {
  return (
    <RadixSelect.Trigger {...rest} className={cn(selectTriggerClasses, className)} ref={passedRef}>
      {children}
      <RadixSelect.Icon asChild>
        <ChevronDown className="ml-auto h-4 w-4 rotate-0 opacity-50 transition group-data-[state='open']:rotate-180" />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
  );
});

const SelectContent = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Content>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Content>
>(({ children, className, position = "popper", ...rest }, passedRef) => {
  const isPopper = position === "popper";

  return (
    <RadixSelect.Portal className="animate-zoomIn data-[state=closed]:animate-zoomOut">
      <RadixSelect.Content
        {...rest}
        sideOffset={8}
        className={cn("relative z-[1200] min-w-[8rem] rounded border bg-paper p-2 shadow-md dark:border-0", className)}
        position={position}
        ref={passedRef}
      >
        <ScrollAreaRoot>
          <RadixSelect.Viewport
            asChild
            className={cn(isPopper && "max-h-56 w-full min-w-[calc(var(--radix-select-trigger-width)+0.5rem)]")}
          >
            <ScrollAreaViewport>{children}</ScrollAreaViewport>
          </RadixSelect.Viewport>
          <ScrollBar />
        </ScrollAreaRoot>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
});
SelectContent.displayName = RadixSelect.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Label>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Label>
>(({ className, ...rest }, passedRef) => (
  <RadixSelect.Label {...rest} className={cn("px-2 py-1 text-muted-text", className)} ref={passedRef} />
));
SelectLabel.displayName = RadixSelect.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Item>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Item>
>(({ children, className, ...rest }, passedRef) => (
  <RadixSelect.Item
    {...rest}
    className={cn(
      "my-2 flex w-full items-center rounded border border-transparent p-1 pl-2 transition duration-75 hover:border-border focus-visible:border-border/75 focus-visible:outline-none data-[disabled]:pointer-events-none data-[state='checked']:border-border data-[state='checked']:bg-accent/50 data-[disabled]:opacity-50 data-[state='checked']:hover:border-border/75 data-[state='checked']:hover:bg-accent/90 data-[state='checked']:focus-visible:border-border/75 data-[state='checked']:focus-visible:bg-accent/90",

      className
    )}
    ref={passedRef}
  >
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
  </RadixSelect.Item>
));
SelectItem.displayName = RadixSelect.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Separator>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Separator>
>(({ className, ...rest }, passedRef) => <RadixSelect.Separator {...rest} className={cn(className)} ref={passedRef} />);
SelectSeparator.displayName = RadixSelect.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  selectTriggerClasses,
};
