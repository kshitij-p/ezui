"use client";

import * as React from "react";
import * as RadixContextMenu from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = RadixContextMenu.Root;

const ContextMenuTrigger = RadixContextMenu.Trigger;

const ContextMenuGroup = RadixContextMenu.Group;

const ContextMenuPortal = RadixContextMenu.Portal;

const ContextMenuSub = RadixContextMenu.Sub;

const ContextMenuRadioGroup = RadixContextMenu.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...rest }, passedRef) => (
  <RadixContextMenu.SubTrigger
    {...rest}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm border border-transparent px-2 py-1.5 text-sm outline-none focus:border-border focus:bg-accent/50 data-[state=open]:border-border data-[state=open]:bg-accent/50",
      inset && "pl-8",
      className
    )}
    ref={passedRef}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </RadixContextMenu.SubTrigger>
));
ContextMenuSubTrigger.displayName = RadixContextMenu.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.SubContent>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.SubContent>
>(({ className, ...rest }, passedRef) => (
  <RadixContextMenu.SubContent
    {...rest}
    className={cn(
      "z-50 min-w-[8rem] animate-zoomIn rounded-md border bg-paper p-1 shadow-md data-[state=closed]:animate-zoomOut data-[state=open]:data-[side=bottom]:animate-slideInTop/5 data-[state=open]:data-[side=left]:animate-slideInRight/5 data-[state=open]:data-[side=right]:animate-slideInLeft/5 data-[state=open]:data-[side=top]:animate-slideInBottom/5",
      className
    )}
    ref={passedRef}
  />
));
ContextMenuSubContent.displayName = RadixContextMenu.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Content>
>(({ className, ...rest }, passedRef) => (
  <RadixContextMenu.Portal>
    <RadixContextMenu.Content
      {...rest}
      className={cn(
        "z-50 min-w-[8rem] animate-zoomIn rounded-md border bg-paper p-1 shadow-md data-[state=closed]:animate-zoomOut data-[state=open]:data-[side=bottom]:animate-slideInTop/5 data-[state=open]:data-[side=left]:animate-slideInRight/5 data-[state=open]:data-[side=right]:animate-slideInLeft/5 data-[state=open]:data-[side=top]:animate-slideInBottom/5",
        className
      )}
      ref={passedRef}
    />
  </RadixContextMenu.Portal>
));
ContextMenuContent.displayName = RadixContextMenu.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Item>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...rest }, passedRef) => (
  <RadixContextMenu.Item
    {...rest}
    className={cn(
      "relative flex cursor-default select-none items-center rounded border border-transparent px-2 py-1.5 text-sm outline-none focus:border-border focus:bg-accent/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    ref={passedRef}
  />
));
ContextMenuItem.displayName = RadixContextMenu.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.CheckboxItem>
>(({ className, children, checked, ...rest }, passedRef) => (
  <RadixContextMenu.CheckboxItem
    {...rest}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm border border-transparent py-1.5 pl-8 pr-2 text-sm outline-none focus:border-border focus:bg-accent/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    ref={passedRef}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RadixContextMenu.ItemIndicator>
        <Check className="h-4 w-4 text-primary" />
      </RadixContextMenu.ItemIndicator>
    </span>
    {children}
  </RadixContextMenu.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = RadixContextMenu.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.RadioItem>
>(({ className, children, ...rest }, passedRef) => (
  <RadixContextMenu.RadioItem
    {...rest}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm border border-transparent py-1.5 pl-8 pr-2 text-sm outline-none focus:border-border focus:bg-accent/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    ref={passedRef}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RadixContextMenu.ItemIndicator>
        <Circle className="h-2 w-2 fill-primary text-primary" />
      </RadixContextMenu.ItemIndicator>
    </span>
    {children}
  </RadixContextMenu.RadioItem>
));
ContextMenuRadioItem.displayName = RadixContextMenu.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Label>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...rest }, passedRef) => (
  <RadixContextMenu.Label
    {...rest}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    ref={passedRef}
  />
));
ContextMenuLabel.displayName = RadixContextMenu.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Separator>
>(({ className, ...props }, ref) => (
  <RadixContextMenu.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-separator", className)} {...props} />
));
ContextMenuSeparator.displayName = RadixContextMenu.Separator.displayName;

const ContextMenuShortcut = React.forwardRef(
  ({ className, ...rest }: React.HTMLAttributes<HTMLSpanElement>, passedRef: React.ForwardedRef<HTMLSpanElement>) => {
    return (
      <span {...rest} className={cn("ml-auto text-xs tracking-widest text-light-text", className)} ref={passedRef} />
    );
  }
);
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
