import React, { ForwardedRef } from "react";
import { cn } from "@/lib/utils";

const Skeleton = React.forwardRef(
  ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>, passedRef: ForwardedRef<HTMLDivElement>) => {
    return <div {...rest} className={cn("animate-pulse rounded-md bg-muted", className)} ref={passedRef} />;
  }
);

Skeleton.displayName = "Skeleton";

export { Skeleton };
