"use client";

import * as React from "react";
import * as RadixMenubar from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const MenubarMenu = RadixMenubar.Menu;

const MenubarGroup = RadixMenubar.Group;

const MenubarPortal = RadixMenubar.Portal;

const MenubarSub = RadixMenubar.Sub;

const MenubarRadioGroup = RadixMenubar.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.Root>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.Root>
>(({ className, ...rest }, passedRef) => (
  <RadixMenubar.Root
    {...rest}
    className={cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className)}
    ref={passedRef}
  />
));
Menubar.displayName = RadixMenubar.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.Trigger>
>(({ className, ...rest }, passedRef) => (
  <RadixMenubar.Trigger
    {...rest}
    className={cn(
      "flex cursor-default select-none items-center rounded border border-transparent px-3 py-1.5 text-sm font-medium outline-none focus:border-border focus:bg-accent/50 data-[state=open]:border-border data-[state=open]:bg-accent/50",
      className
    )}
    ref={passedRef}
  />
));
MenubarTrigger.displayName = RadixMenubar.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...rest }, passedRef) => (
  <RadixMenubar.SubTrigger
    {...rest}
    className={cn(
      "flex cursor-default select-none items-center rounded border border-transparent px-2 py-1.5 text-sm outline-none focus:border-border focus:bg-accent/50 data-[state=open]:border-border data-[state=open]:bg-accent/50",
      inset && "pl-8",
      className
    )}
    ref={passedRef}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </RadixMenubar.SubTrigger>
));
MenubarSubTrigger.displayName = RadixMenubar.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.SubContent>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.SubContent>
>(({ className, ...rest }, passedRef) => (
  <RadixMenubar.SubContent
    {...rest}
    className={cn(
      "z-50 min-w-[8rem] animate-zoomIn rounded-md border bg-paper p-1 data-[state=closed]:animate-none data-[state=open]:data-[side=bottom]:animate-slideInTop/5 data-[state=open]:data-[side=left]:animate-slideInRight/5 data-[state=open]:data-[side=right]:animate-slideInLeft/5 data-[state=open]:data-[side=top]:animate-slideInBottom/5",
      className
    )}
    ref={passedRef}
  />
));
MenubarSubContent.displayName = RadixMenubar.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.Content>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...rest }, passedRef) => (
  <RadixMenubar.Portal>
    <RadixMenubar.Content
      {...rest}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] animate-zoomIn rounded-md border bg-paper p-1 shadow-md data-[state=closed]:animate-none data-[state=open]:data-[side=bottom]:animate-slideInTop/5 data-[state=open]:data-[side=left]:animate-slideInRight/5 data-[state=open]:data-[side=right]:animate-slideInLeft/5 data-[state=open]:data-[side=top]:animate-slideInBottom/5",
        className
      )}
      ref={passedRef}
    />
  </RadixMenubar.Portal>
));
MenubarContent.displayName = RadixMenubar.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.Item>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...rest }, passedRef) => (
  <RadixMenubar.Item
    {...rest}
    className={cn(
      "relative flex cursor-default select-none items-center rounded border border-transparent px-2 py-1.5 text-sm outline-none hover:border-border hover:bg-accent/50 focus:border-border focus:bg-accent/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    ref={passedRef}
  />
));
MenubarItem.displayName = RadixMenubar.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.CheckboxItem>
>(({ className, children, checked, ...rest }, passedRef) => (
  <RadixMenubar.CheckboxItem
    {...rest}
    className={cn(
      "relative flex cursor-default select-none items-center rounded border border-transparent py-1.5 pl-8 pr-2 text-sm outline-none hover:border-border hover:bg-accent/50 focus:border-border focus:bg-accent/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    ref={passedRef}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RadixMenubar.ItemIndicator>
        <Check className="h-4 w-4 text-primary" />
      </RadixMenubar.ItemIndicator>
    </span>
    {children}
  </RadixMenubar.CheckboxItem>
));
MenubarCheckboxItem.displayName = RadixMenubar.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.RadioItem>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.RadioItem>
>(({ className, children, ...rest }, passedRef) => (
  <RadixMenubar.RadioItem
    {...rest}
    className={cn(
      "relative flex cursor-default select-none items-center rounded border border-transparent py-1.5 pl-8 pr-2 text-sm outline-none hover:border-border hover:bg-accent/50 focus:border-border focus:bg-accent/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    ref={passedRef}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RadixMenubar.ItemIndicator>
        <Circle className="h-2 w-2 fill-primary text-primary" />
      </RadixMenubar.ItemIndicator>
    </span>
    {children}
  </RadixMenubar.RadioItem>
));
MenubarRadioItem.displayName = RadixMenubar.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.Label>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...rest }, passedRef) => (
  <RadixMenubar.Label
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...rest}
    ref={passedRef}
  />
));
MenubarLabel.displayName = RadixMenubar.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof RadixMenubar.Separator>,
  React.ComponentPropsWithoutRef<typeof RadixMenubar.Separator>
>(({ className, ...rest }, passedRef) => (
  <RadixMenubar.Separator {...rest} className={cn("-mx-1 my-1 h-px bg-muted", className)} ref={passedRef} />
));
MenubarSeparator.displayName = RadixMenubar.Separator.displayName;

const MenubarShortcut = React.forwardRef(
  ({ className, ...rest }: React.HTMLAttributes<HTMLSpanElement>, passedRef: React.ForwardedRef<HTMLSpanElement>) => {
    return (
      <span {...rest} className={cn("ml-auto text-xs tracking-widest text-light-text", className)} ref={passedRef} />
    );
  }
);
MenubarShortcut.displayName = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
