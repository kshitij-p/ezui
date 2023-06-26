"use client";

import * as React from "react";
import * as RadixToggleGroup from "@radix-ui/react-toggle-group";
import { DEFAULT_VARIANTS, ToggleVariants, toggleVariants } from "@/components/ui/Toggle";
import { cn } from "@/lib/utils";

type ToggleGroupContext = {
  autoAdjustBorders: boolean;
};

const ToggleGroupContext = React.createContext({} as ToggleGroupContext);

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof RadixToggleGroup.Root>,
  React.ComponentPropsWithoutRef<typeof RadixToggleGroup.Root> & {
    /**
     * Adjusts border radii of items to look good in a group i.e.
     * sets the first items right border radii to none and last items left border radii
     * to none and all other items have their borders set to none
     */
    autoAdjustBorders?: ToggleGroupContext["autoAdjustBorders"];
  }
>(({ children, className, autoAdjustBorders = true, ...rest }, passedRef) => {
  return (
    <RadixToggleGroup.Root {...rest} className={cn(className)} ref={passedRef}>
      <ToggleGroupContext.Provider value={{ autoAdjustBorders }}>{children}</ToggleGroupContext.Provider>
    </RadixToggleGroup.Root>
  );
});
ToggleGroup.displayName = RadixToggleGroup.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof RadixToggleGroup.Item>,
  React.ComponentPropsWithoutRef<typeof RadixToggleGroup.Item> & {
    variants?: Partial<ToggleVariants>;
  }
>(({ children, className, variants = DEFAULT_VARIANTS, ...rest }, passedRef) => {
  const { autoAdjustBorders } = React.useContext(ToggleGroupContext);

  return (
    <RadixToggleGroup.Item
      {...rest}
      className={cn(
        toggleVariants(variants),
        //Adjusts border radii of items to look good in a group
        autoAdjustBorders &&
          "[&:not(:first-child)]:last:rounded-bl-none [&:not(:first-child)]:last:rounded-tl-none [&:not(:last-child)]:first:rounded-br-none [&:not(:last-child)]:first:rounded-tr-none [&:not(:last-child)]:[&:not(:first-child)]:rounded-none",
        className
      )}
      ref={passedRef}
    >
      {children}
    </RadixToggleGroup.Item>
  );
});
ToggleGroupItem.displayName = RadixToggleGroup.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
