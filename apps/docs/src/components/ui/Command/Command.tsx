"use client";

import * as React from "react";

import { Command as CommandPrimitive } from "cmdk";
import { Dialog, DialogContent } from "@/components/ui/Dialog";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { cn } from "@/lib/utils";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...rest }, passedRef) => (
  <CommandPrimitive
    {...rest}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-paper border dark:border-none shadow-md",
      className
    )}
    ref={passedRef}
  />
));
Command.displayName = CommandPrimitive.displayName;

type CommandDialogProps = React.ComponentPropsWithoutRef<typeof Dialog>;

const CommandDialog = ({ children, ...rest }: CommandDialogProps) => {
  return (
    <Dialog {...rest}>
      <DialogContent className="overflow-hidden p-0 shadow-2xl">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...rest }, passedRef) => (
  <div className="flex items-center border-b border-border-light px-3" cmdk-input-wrapper="">
    <CommandPrimitive.Input
      {...rest}
      ref={passedRef}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...rest }, passedRef) => {
  return (
    <ScrollArea type="always" className="h-[300px]">
      <CommandPrimitive.List {...rest} className={cn("overflow-x-hidden p-1", className)} ref={passedRef} />
    </ScrollArea>
  );
});

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...rest }, passedRef) => (
  <CommandPrimitive.Empty {...rest} className={cn("py-6 text-center text-sm", className)} ref={passedRef} />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...rest }, passedRef) => (
  <CommandPrimitive.Group
    {...rest}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-text",
      className
    )}
    ref={passedRef}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...rest }, passedRef) => (
  <CommandPrimitive.Separator {...rest} className={cn("-mx-1 h-px my-1 bg-border-light", className)} ref={passedRef} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...rest }, passedRef) => (
  <CommandPrimitive.Item
    {...rest}
    className={cn(
      "relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-base outline-none aria-selected:border-border border aria-selected:bg-accent/50 border-transparent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    ref={passedRef}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...rest }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span {...rest} className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} />;
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
