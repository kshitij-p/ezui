"use client";

import * as React from "react";
import * as RadixSwitch from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof RadixSwitch.Root>,
  React.ComponentPropsWithoutRef<typeof RadixSwitch.Root>
>(({ className, ...rest }, passedRef) => (
  <RadixSwitch.Root
    {...rest}
    className={cn(
      "group peer inline-flex h-[24px] w-[44px] shrink-0 items-center rounded-full border border-border/50 bg-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/75 focus-visible:ring-offset-2 focus-visible:ring-offset-background enabled:cursor-pointer disabled:opacity-50 aria-[invalid=true]:border-invalid/50 aria-[invalid=true]:ring-invalid/75 data-[state=checked]:border-border enabled:data-[state=unchecked]:hover:bg-accent/50 aria-[invalid=true]:data-[state=checked]:border-invalid",
      className
    )}
    ref={passedRef}
  >
    <RadixSwitch.Thumb
      className={cn(
        "pointer-events-none block h-[18px] w-[18px] rounded-full bg-accent/50 shadow-lg ring-0 transition group-aria-[invalid=true]:bg-invalid/25 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-1 data-[state=checked]:bg-primary group-aria-[invalid=true]:data-[state=checked]:bg-invalid"
      )}
    />
  </RadixSwitch.Root>
));
Switch.displayName = RadixSwitch.Root.displayName;

export { Switch };
