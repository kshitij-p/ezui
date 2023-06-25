"use client";

import * as React from "react";

import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof RadixNavigationMenu.Root>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenu.Root>
>(({ className, children, ...rest }, passedRef) => (
  <RadixNavigationMenu.Root
    {...rest}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    ref={passedRef}
  >
    {children}
    <NavigationMenuViewport />
  </RadixNavigationMenu.Root>
));
NavigationMenu.displayName = RadixNavigationMenu.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof RadixNavigationMenu.List>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenu.List>
>(({ className, ...rest }, passedRef) => (
  <RadixNavigationMenu.List
    {...rest}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    ref={passedRef}
  />
));
NavigationMenuList.displayName = RadixNavigationMenu.List.displayName;

const NavigationMenuItem = RadixNavigationMenu.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 focus-visible:bg-accent/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 hover:border-border border border-transparent focus-visible:border-border data-[state=open]:border-border"
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof RadixNavigationMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenu.Trigger>
>(({ className, children, ...rest }, passedRef) => (
  <RadixNavigationMenu.Trigger
    {...rest}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    ref={passedRef}
  >
    {children}{" "}
    <ChevronDownIcon
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </RadixNavigationMenu.Trigger>
));
NavigationMenuTrigger.displayName = RadixNavigationMenu.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixNavigationMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenu.Content>
>(({ className, ...rest }, passedRef) => (
  <RadixNavigationMenu.Content
    {...rest}
    className={cn(
      "left-0 top-0 w-full data-[motion=from-end]:animate-slideInRight data-[motion=from-start]:animate-slideInLeft data-[motion=to-end]:animate-slideOutRight data-[motion=to-start]:animate-slideOutLeft md:absolute md:w-auto ",
      className
    )}
    ref={passedRef}
  />
));
NavigationMenuContent.displayName = RadixNavigationMenu.Content.displayName;

const NavigationMenuLink = RadixNavigationMenu.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof RadixNavigationMenu.Viewport>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenu.Viewport>
>(({ className, ...rest }, passedRef) => (
  <div className={cn("absolute left-0 top-full mt-2 flex justify-center")}>
    <RadixNavigationMenu.Viewport
      {...rest}
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full animate-zoomIn overflow-hidden rounded-md border bg-paper shadow data-[state=closed]:animate-zoomOut md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={passedRef}
    />
  </div>
));
NavigationMenuViewport.displayName = RadixNavigationMenu.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof RadixNavigationMenu.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenu.Indicator>
>(({ className, ...rest }, passedRef) => (
  <RadixNavigationMenu.Indicator
    {...rest}
    className={cn(
      "top-full z-[1] flex h-3 items-end justify-center overflow-hidden data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn",
      className
    )}
    ref={passedRef}
  >
    <div className="relative top-[60%] h-full w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </RadixNavigationMenu.Indicator>
));
NavigationMenuIndicator.displayName = RadixNavigationMenu.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
