"use client";

import * as React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof RadixCheckbox.Root>,
  React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root>
>(({ className, ...rest }, passedRef) => (
  <RadixCheckbox.Root
    {...rest}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 aria-[invalid=true]:border-invalid aria-[invalid=true]:ring-invalid/75 data-[state=checked]:bg-primary data-[state=indeterminate]:bg-accent/50 enabled:data-[state=unchecked]:hover:bg-accent/50 enabled:data-[state=unchecked]:focus-visible:bg-accent/50 aria-[invalid=true]:data-[state=checked]:bg-invalid",
      className
    )}
    ref={passedRef}
  >
    <RadixCheckbox.Indicator className={cn("group flex items-center justify-center text-white")}>
      <Check className="h-full w-full group-data-[state=indeterminate]:hidden" />
      <Minus className="h-full w-full group-data-[state=checked]:hidden" />
    </RadixCheckbox.Indicator>
  </RadixCheckbox.Root>
));
Checkbox.displayName = RadixCheckbox.Root.displayName;

export { Checkbox };
