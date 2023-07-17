import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React, { ForwardedRef } from "react";

const ALL_INPUT_VARIANTS = {
  size: {
    xs: "h-7 rounded border px-2 text-xs",
    sm: "h-8 text-sm px-2.5 border rounded",
    md: "h-10 text-base px-2.5 border-2 rounded-md",
    lg: "h-11 text-lg px-3 border-2 rounded-md",
    xl: "h-[3.25rem] text-xl px-3 border-2 rounded-[0.425rem]",
  },
} as const;

type InputVariants = {
  [k in keyof typeof ALL_INPUT_VARIANTS]: keyof (typeof ALL_INPUT_VARIANTS)[k];
};

const DEFAULT_VARIANTS = {
  size: "md",
} satisfies InputVariants;

const inputVariants = cva(
  "flex border border-border py-1 bg-transparent transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:hover:border-border disabled:opacity-50 aria-[invalid=true]:border-invalid aria-[invalid=true]:hover:border-invalid aria-[invalid=true]:focus-visible:ring-invalid/75 placeholder:text-light-text",
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
