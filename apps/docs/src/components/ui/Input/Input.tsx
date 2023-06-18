import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React, { ForwardedRef } from "react";

const ALL_INPUT_VARIANTS = {
  size: {
    xs: "h-7 text-xs px-2.5 border rounded focus-visible:ring-offset-2",
    sm: "h-8 text-sm px-3 border rounded focus-visible:ring-offset-2",
    md: "h-10 text-base px-3 border-2 rounded-md focus-visible:ring-offset-2",
    lg: "h-11 text-lg px-3 border-2 rounded-lg focus-visible:ring-offset-4",
    xl: "h-14 text-xl px-4 border-2 rounded-lg focus-visible:ring-offset-4",
  },
} as const;

type InputVariants = { [k in keyof typeof ALL_INPUT_VARIANTS]: keyof typeof ALL_INPUT_VARIANTS[k] };

const DEFAULT_VARIANTS = {
  size: "md",
} satisfies InputVariants;

const inputVariants = cva(
  "border border-border bg-transparent transition focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-paper focus-visible:hover:border-border disabled:opacity-50 aria-[invalid=true]:border-invalid aria-[invalid=true]:hover:border-invalid aria-[invalid=true]:focus-visible:ring-invalid/75",
  {
    variants: ALL_INPUT_VARIANTS,
    defaultVariants: DEFAULT_VARIANTS,
  }
);

const Input = React.forwardRef(
  (
    {
      className,
      variants = DEFAULT_VARIANTS,
      ...rest
    }: React.ComponentProps<"input"> & {
      variants?: Partial<InputVariants>;
    },
    passedRef: ForwardedRef<HTMLInputElement>
  ) => {
    return <input {...rest} className={cn(inputVariants(variants), className)} ref={passedRef} />;
  }
);

export { Input, inputVariants, DEFAULT_VARIANTS, ALL_INPUT_VARIANTS, type InputVariants };
