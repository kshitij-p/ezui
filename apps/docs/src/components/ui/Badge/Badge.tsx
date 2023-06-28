import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const ALL_BADGE_VARIANTS = {
  type: {
    primary: "bg-primary text-black hover:bg-primary/80 focus-visible:bg-primary/80",
    secondary:
      "bg-background border border-border hover:bg-accent/50 dark:hover:bg-accent dark:focus-visible:bg-accent  focus-visible:bg-accent/50",
    danger: "bg-danger text-black hover:bg-danger/80 focus-visible:bg-danger/80 focus-visible:ring-danger/75",
    "danger-secondary":
      "bg-background border border-danger hover:bg-danger/50 focus-visible:bg-danger/50 focus-visible:ring-danger/75",
    outline: "bg-background border hover:bg-background/80 focus-visible:bg-background/80",
  },
} as const;

type BadgeVariants = {
  [k in keyof typeof ALL_BADGE_VARIANTS]: keyof (typeof ALL_BADGE_VARIANTS)[k];
};

const DEFAULT_VARIANTS = {
  type: "primary",
} satisfies BadgeVariants;

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-offset-2",
  {
    variants: ALL_BADGE_VARIANTS,
    defaultVariants: DEFAULT_VARIANTS,
  }
);

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variants?: Partial<BadgeVariants>;
}

const Badge = (
  { className, variants = DEFAULT_VARIANTS, ...rest }: BadgeProps,
  passedRef: React.ForwardedRef<HTMLDivElement>
) => {
  return <div {...rest} className={cn(badgeVariants(variants), className)} ref={passedRef} />;
};

export { Badge, badgeVariants, ALL_BADGE_VARIANTS, DEFAULT_VARIANTS, type BadgeVariants, type BadgeProps };
