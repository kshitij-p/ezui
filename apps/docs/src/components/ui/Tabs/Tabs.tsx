"use client";

import * as React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = RadixTabs.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof RadixTabs.List>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.List>
>(({ className, ...rest }, passedRef) => (
  <RadixTabs.List
    {...rest}
    className={cn("inline-flex items-center justify-center rounded-md border bg-paper p-1", className)}
    ref={passedRef}
  />
));
TabsList.displayName = RadixTabs.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>
>(({ className, ...rest }, passedRef) => (
  <RadixTabs.Trigger
    {...rest}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-3 py-1.5 text-sm font-medium text-foreground/75 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/75 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-border data-[state=active]:bg-accent/50 data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    ref={passedRef}
  />
));
TabsTrigger.displayName = RadixTabs.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Content>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.Content>
>(({ className, ...rest }, passedRef) => (
  <RadixTabs.Content
    {...rest}
    className={cn(
      "mt-2 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    ref={passedRef}
  />
));
TabsContent.displayName = RadixTabs.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
