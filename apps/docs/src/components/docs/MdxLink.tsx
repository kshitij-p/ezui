import React, { ForwardedRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MdxLink = React.forwardRef(
  ({ className, ...rest }: React.ComponentPropsWithoutRef<typeof Link>, passedRef: ForwardedRef<HTMLAnchorElement>) => (
    <Link
      {...rest}
      className={cn(
        "relative underline decoration-border underline-offset-4 transition hover:text-foreground/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/75 focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        className
      )}
      ref={passedRef}
    />
  )
);
MdxLink.displayName = "MdxLink";

export default MdxLink;
