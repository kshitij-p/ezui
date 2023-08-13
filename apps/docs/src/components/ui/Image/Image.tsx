import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const ImageContainer = React.forwardRef(
  (
    {
      className,
      asChild = false,
      ...rest
    }: React.HTMLAttributes<HTMLDivElement> & {
      asChild?: boolean;
    },
    passedRef: React.ForwardedRef<HTMLDivElement>
  ) => {
    const Element = asChild ? Slot : "div";

    return <Element {...rest} className={cn("relative flex shrink-0", className)} ref={passedRef} />;
  }
);
ImageContainer.displayName = "ImageContainer";

const ImageSrc = React.forwardRef(
  (
    {
      className,
      asChild = false,
      ...rest
    }: React.ComponentPropsWithoutRef<"img"> & {
      asChild?: boolean;
    },
    passedRef: React.ForwardedRef<HTMLImageElement>
  ) => {
    const Element = asChild ? Slot : "img";

    return <Element {...rest} className={cn("absolute inset-0 h-full w-full", className)} ref={passedRef} />;
  }
);
ImageSrc.displayName = "ImageSrc";

export { ImageContainer, ImageSrc };
