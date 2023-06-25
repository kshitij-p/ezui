"use client";

import * as React from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = RadixDropdownMenu.Root;

const DropdownMenuTrigger = RadixDropdownMenu.Trigger;

const DropdownMenuGroup = RadixDropdownMenu.Group;

const DropdownMenuPortal = RadixDropdownMenu.Portal;

const DropdownMenuSub = RadixDropdownMenu.Sub;

const DropdownMenuRadioGroup = RadixDropdownMenu.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...rest }, passedRef) => (
  <RadixDropdownMenu.SubTrigger
    {...rest}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm border border-transparent px-2 py-1.5 text-sm outline-none focus:border-border focus:bg-accent/50 data-[state=open]:border-border data-[state=open]:bg-accent/75",
      inset && "pl-8",
      className
    )}
    ref={passedRef}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </RadixDropdownMenu.SubTrigger>
));
DropdownMenuSubTrigger.displayName = RadixDropdownMenu.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.SubContent>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.SubContent>
>(({ className, ...rest }, passedRef) => (
  <RadixDropdownMenu.SubContent
    {...rest}
    className={cn(
      "z-50 min-w-[8rem] animate-zoomIn overflow-hidden rounded-md border bg-paper p-2 data-[state=closed]:animate-zoomOut data-[state=open]:data-[side=bottom]:animate-slideInTop/5 data-[state=open]:data-[side=left]:animate-slideInRight/5 data-[state=open]:data-[side=right]:animate-slideInLeft/5 data-[state=open]:data-[side=top]:animate-slideInBottom/5",
      "shadow-lg",
      className
    )}
    ref={passedRef}
  />
));
DropdownMenuSubContent.displayName = RadixDropdownMenu.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Content>
>(({ className, sideOffset = 8, ...rest }, passedRef) => (
  <RadixDropdownMenu.Portal>
    <RadixDropdownMenu.Content
      {...rest}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] animate-zoomIn overflow-hidden rounded-md border bg-paper p-2 data-[state=closed]:animate-zoomOut data-[state=open]:data-[side=bottom]:animate-slideInTop/5 data-[state=open]:data-[side=left]:animate-slideInRight/5 data-[state=open]:data-[side=right]:animate-slideInLeft/5 data-[state=open]:data-[side=top]:animate-slideInBottom/5",
        "shadow-md",
        className
      )}
      ref={passedRef}
    />
  </RadixDropdownMenu.Portal>
));
DropdownMenuContent.displayName = RadixDropdownMenu.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...rest }, passedRef) => (
  <RadixDropdownMenu.Item
    {...rest}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm border border-transparent px-2 py-1.5 text-sm outline-none transition-colors focus:border-border focus:bg-accent/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    ref={passedRef}
  />
));
DropdownMenuItem.displayName = RadixDropdownMenu.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.CheckboxItem>
>(({ className, children, checked, ...rest }, passedRef) => (
  <RadixDropdownMenu.CheckboxItem
    {...rest}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm border border-transparent py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:border-border focus:bg-accent/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    ref={passedRef}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RadixDropdownMenu.ItemIndicator>
        <Check className="h-4 w-4 text-primary" />
      </RadixDropdownMenu.ItemIndicator>
    </span>
    {children}
  </RadixDropdownMenu.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = RadixDropdownMenu.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.RadioItem>
>(({ className, children, ...rest }, passedRef) => (
  <RadixDropdownMenu.RadioItem
    {...rest}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm border border-transparent py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:border-border focus:bg-accent/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    ref={passedRef}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RadixDropdownMenu.ItemIndicator>
        <Circle className="h-2 w-2 fill-primary text-primary" />
      </RadixDropdownMenu.ItemIndicator>
    </span>
    {children}
  </RadixDropdownMenu.RadioItem>
));
DropdownMenuRadioItem.displayName = RadixDropdownMenu.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Label>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...rest }, passedRef) => (
  <RadixDropdownMenu.Label
    {...rest}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    ref={passedRef}
  />
));
DropdownMenuLabel.displayName = RadixDropdownMenu.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Separator>
>(({ className, ...rest }, passedRef) => (
  <RadixDropdownMenu.Separator {...rest} className={cn("-mx-1 my-1 h-px bg-separator", className)} ref={passedRef} />
));
DropdownMenuSeparator.displayName = RadixDropdownMenu.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...rest }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span {...rest} className={cn("ml-auto text-xs tracking-widest opacity-60", className)} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
