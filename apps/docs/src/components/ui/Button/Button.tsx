import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React, { ForwardedRef } from "react";

const ALL_BUTTON_VARIANTS = {
  size: {
    xs: "h-7 text-xs px-3 border rounded focus-visible:ring-offset-2",
    sm: "h-8 text-sm px-4 border rounded focus-visible:ring-offset-2",
    md: "h-10 text-base px-6 border-2 rounded focus-visible:ring-offset-2",
    lg: "h-11 text-lg px-6 border-2 rounded focus-visible:ring-offset-4",
    xl: "h-14 text-xl px-8 border-2 rounded focus-visible:ring-offset-4",
  },
  type: {
    primary: "bg-primary border-none hover:bg-primary/80 focus-visible:bg-primary/80",
    secondary: "bg-background border-border hover:bg-accent focus-visible:bg-accent",
    danger: "bg-danger border-none hover:bg-danger/80 focus-visible:bg-danger/80 focus-visible:ring-danger/75",
    "danger-secondary":
      "bg-background border-danger hover:bg-danger/50 focus-visible:bg-danger/50 focus-visible:ring-danger/75",
    ghost: "bg-transparent border-none hover:bg-accent focus-visible:bg-accent",
  },
} as const;

type ButtonVariants = { [k in keyof typeof ALL_BUTTON_VARIANTS]: keyof typeof ALL_BUTTON_VARIANTS[k] };

const DEFAULT_VARIANTS = {
  size: "md",
  type: "primary",
} satisfies ButtonVariants;

const buttonVariants = cva(
  "bg-transparent inline-flex items-center justify-center transition focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-paper focus-visible:hover:border-border disabled:opacity-50",
  {
    variants: ALL_BUTTON_VARIANTS,
    defaultVariants: DEFAULT_VARIANTS,
  }
);

const Button = React.forwardRef(
  (
    {
      children,
      className,
      variants = DEFAULT_VARIANTS,
      asChild = false,
      ...rest
    }: React.ComponentProps<"button"> & {
      variants?: Partial<ButtonVariants>;
      /**
       * If true, the immediate child of the button is rendered instead of the button but with the styling
       * button. Useful for rendering Links as button.
       *
       * \<Button asChild>\<Link>A link\</Link>\</Button>
       */
      asChild?: boolean;
    },
    passedRef: ForwardedRef<HTMLButtonElement>
  ) => {
    const Element = asChild ? Slot : "button";

    return (
      <Element {...rest} className={cn(buttonVariants(variants), className)} ref={passedRef}>
        {children}
      </Element>
    );
  }
);

export { Button, buttonVariants, ALL_BUTTON_VARIANTS, DEFAULT_VARIANTS, type ButtonVariants };
