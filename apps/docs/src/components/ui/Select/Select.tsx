"use client";

import * as React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const Select = RadixSelect.Root;

const SelectGroup = RadixSelect.Group;

const SelectValue = RadixSelect.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Trigger>
>(({ children, className, ...rest }, passedRef) => {
  return (
    <RadixSelect.Trigger
      {...rest}
      className={cn(
        "group flex items-center justify-center gap-2 rounded-md border-2 border-border bg-transparent py-1 pl-3 pr-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border/75 focus-visible:ring-offset-2 focus-visible:ring-offset-paper aria-[invalid=true]:border-invalid aria-[invalid=true]:focus-visible:ring-invalid/75 data-[disabled]:opacity-50",
        className
      )}
      ref={passedRef}
    >
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
    <RadixSelect.Portal className="animate-fadeIn">
      <RadixSelect.Content
        {...rest}
        sideOffset={8}
        className={cn("relative z-[1200] min-w-[8rem] rounded bg-paper shadow-md p-2 border dark:border-0", className)}
        position={position}
        ref={passedRef}
      >
        <ScrollArea.Root className="h-full w-full" type="auto">
          <RadixSelect.Viewport
            asChild
            className={cn(isPopper && "min-w-[calc(var(--radix-select-trigger-width)+0.5rem)] max-h-56 w-full")}
          >
            <ScrollArea.Viewport
              className="h-full w-full"
              //Fixes a radix ui bug where Select.Viewport sets overflow and Scrollarea.Viewport also sets overflow and this clashes as one uses shorthand other doesnt
              style={{ overflowY: undefined }}
            >
              <RadixSelect.Group>{children}</RadixSelect.Group>
            </ScrollArea.Viewport>
          </RadixSelect.Viewport>
          <ScrollArea.Scrollbar className="w-1 rounded bg-transparent">
            <ScrollArea.Thumb className="rounded bg-scroll-thumb/50 hover:w-8 hover:bg-scroll-thumb" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
});
SelectContent.displayName = RadixSelect.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Label>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Label>
>(({ className, ...rest }, passedRef) => (
  <RadixSelect.Label {...rest} className={cn("px-2 py-1 font-semibold", className)} ref={passedRef} />
));
SelectLabel.displayName = RadixSelect.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Item>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Item>
>(({ children, className, ...rest }, passedRef) => (
  <RadixSelect.Item
    {...rest}
    className={cn(
      "data-[state='checked']:hover:border-border/75 my-2 flex items-center rounded border border-transparent p-1 pl-2 transition duration-75 hover:border-border focus-visible:outline-none focus-visible:border-border/75 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state='checked']:border-border data-[state='checked']:bg-accent/50 data-[state='checked']:hover:bg-accent/90 data-[state='checked']:focus-visible:border-border/75 data-[state='checked']:focus-visible:bg-accent/90 w-full",

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
>(({ className, ...rest }, passedRef) => (
  <RadixSelect.Separator {...rest} className={cn("", className)} ref={passedRef} />
));
SelectSeparator.displayName = RadixSelect.Separator.displayName;

export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator };
