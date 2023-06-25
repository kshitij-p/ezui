import React, { ForwardedRef } from "react";
import { cn } from "@/lib/utils";

const Skeleton = React.forwardRef(
  ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>, passedRef: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        {...rest}
        className={cn("animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800", className)}
        ref={passedRef}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

export { Skeleton };
