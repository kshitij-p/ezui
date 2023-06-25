"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

type RadioGroupContext = {
  invalid: boolean;
};

const RadioGroupContext = React.createContext({} as RadioGroupContext);

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, "aria-invalid": ariaInvalid, ...rest }, passedRef) => {
  return (
    <RadioGroupContext.Provider value={{ invalid: ariaInvalid !== undefined && ariaInvalid !== false }}>
      <RadioGroupPrimitive.Root
        {...rest}
        className={cn("grid gap-2", className)}
        aria-invalid={ariaInvalid}
        ref={passedRef}
      />
    </RadioGroupContext.Provider>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, "aria-invalid": ariaInvalid, ...rest }, passedRef) => {
  const { invalid: groupInvalid } = React.useContext(RadioGroupContext);

  return (
    <RadioGroupPrimitive.Item
      {...rest}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-border text-border ring-offset-background transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 disabled:opacity-50 aria-[invalid=true]:border-invalid aria-[invalid=true]:ring-invalid/75 enabled:data-[state=unchecked]:hover:bg-accent/50",
        className
      )}
      aria-invalid={ariaInvalid ?? groupInvalid}
      ref={passedRef}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-primary text-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
