"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const ALL_TOGGLE_VARIANTS = {
  type: {
    default: "border border-border/50 data-[state=on]:border-border",
    borderless: "",
  },
  size: {
    md: "h-10 px-3",
    sm: "h-9 px-2.5",
    lg: "h-11 px-5",
  },
};

type ToggleVariants = { [k in keyof typeof ALL_TOGGLE_VARIANTS]: keyof (typeof ALL_TOGGLE_VARIANTS)[k] };

const DEFAULT_VARIANTS = {
  type: "default",
  size: "md",
} satisfies ToggleVariants;

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors enabled:hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent/50 bg-paper",
  {
    variants: ALL_TOGGLE_VARIANTS,
    defaultVariants: DEFAULT_VARIANTS,
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & {
    variants?: Partial<ToggleVariants>;
  }
>(({ className, variants = DEFAULT_VARIANTS, ...rest }, passedRef) => (
  <TogglePrimitive.Root {...rest} className={cn(toggleVariants(variants))} ref={passedRef} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants, ALL_TOGGLE_VARIANTS, DEFAULT_VARIANTS, type ToggleVariants };
