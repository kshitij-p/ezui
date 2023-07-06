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
    className={cn("flex h-full w-full flex-col overflow-hidden rounded-md border bg-paper shadow-md", className)}
    ref={passedRef}
  />
));
Command.displayName = CommandPrimitive.displayName;

type CommandDialogProps = React.ComponentPropsWithoutRef<typeof Dialog>;

const CommandDialog = ({ children, ...rest }: CommandDialogProps) => {
  return (
    <Dialog {...rest}>
      <DialogContent className="overflow-hidden rounded-md border-none p-0 shadow-2xl">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-light-text [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ children, className, ...rest }, passedRef) => (
  <div className="flex items-center border-b border-separator px-3" cmdk-input-wrapper="">
    {children}
    <CommandPrimitive.Input
      {...rest}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-base outline-none placeholder:text-light-text disabled:opacity-50",
        className
      )}
      ref={passedRef}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ children, className, ...rest }, passedRef) => {
  return (
    <CommandPrimitive.List
      {...rest}
      className={cn("overflow-x-hidden p-1 [&_[cmdk-list-sizer]]:h-[300px]", className)}
      ref={passedRef}
    >
      <ScrollArea type="always">{children}</ScrollArea>
    </CommandPrimitive.List>
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
  <CommandPrimitive.Separator {...rest} className={cn("-mx-1 my-1 h-px bg-separator", className)} ref={passedRef} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, disabled, ...rest }, passedRef) => (
  <CommandPrimitive.Item
    {...rest}
    disabled={disabled}
    data-disabled={disabled === true ? true : undefined}
    className={cn(
      "relative flex cursor-default select-none items-center rounded border border-transparent px-2 py-1.5 text-base outline-none aria-selected:border-border aria-selected:bg-accent/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    ref={passedRef}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...rest }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span {...rest} className={cn("ml-auto text-xs tracking-widest text-light-text", className)} />;
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
