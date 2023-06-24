"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...rest }, passedRef) => (
  <DropdownMenuPrimitive.SubTrigger
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
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...rest }, passedRef) => (
  <DropdownMenuPrimitive.SubContent
    {...rest}
    className={cn(
    "z-50 min-w-[8rem] animate-zoomIn overflow-hidden rounded-md border bg-paper p-2 data-[state=open]:data-[side=bottom]:animate-slideInTop/5 data-[state=open]:data-[side=left]:animate-slideInRight/5 data-[state=open]:data-[side=right]:animate-slideInLeft/5 data-[state=open]:data-[side=top]:animate-slideInBottom/5 data-[state=closed]:animate-zoomOut",
      "shadow-lg",
      className
    )}
    ref={passedRef}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 8, ...rest }, passedRef) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      {...rest}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] animate-zoomIn overflow-hidden rounded-md border bg-paper p-2 data-[state=open]:data-[side=bottom]:animate-slideInTop/5 data-[state=open]:data-[side=left]:animate-slideInRight/5 data-[state=open]:data-[side=right]:animate-slideInLeft/5 data-[state=open]:data-[side=top]:animate-slideInBottom/5 data-[state=closed]:animate-zoomOut",
        "shadow-md",
        className
      )}
      ref={passedRef}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...rest }, passedRef) => (
  <DropdownMenuPrimitive.Item
    {...rest}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm border border-transparent px-2 py-1.5 text-sm outline-none transition-colors focus:border-border focus:bg-accent/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    ref={passedRef}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...rest }, passedRef) => (
  <DropdownMenuPrimitive.CheckboxItem
    {...rest}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm border border-transparent py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:border-border focus:bg-accent/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    ref={passedRef}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-primary" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...rest }, passedRef) => (
  <DropdownMenuPrimitive.RadioItem
    {...rest}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm border border-transparent py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:border-border focus:bg-accent/50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    ref={passedRef}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-primary text-primary" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...rest }, passedRef) => (
  <DropdownMenuPrimitive.Label
    {...rest}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    ref={passedRef}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...rest }, passedRef) => (
  <DropdownMenuPrimitive.Separator
    {...rest}
    className={cn("-mx-1 my-1 h-px bg-separator", className)}
    ref={passedRef}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

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
