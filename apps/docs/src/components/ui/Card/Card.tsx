import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, passedRef) => (
    <div {...rest} className={cn("rounded-lg border bg-card shadow-sm", className)} ref={passedRef} />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, passedRef) => (
    <div {...rest} className={cn("flex flex-col space-y-1.5 p-6", className)} ref={passedRef} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...rest }, passedRef) => (
    <h3 {...rest} className={cn("text-2xl font-semibold leading-none", className)} ref={passedRef} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...rest }, passedRef) => (
    <p {...rest} className={cn("text-sm text-light-text", className)} ref={passedRef} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, passedRef) => <div {...rest} className={cn("p-6 pt-0", className)} ref={passedRef} />
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, passedRef) => (
    <div {...rest} className={cn(" flex items-center p-6 pt-0", className)} ref={passedRef} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
