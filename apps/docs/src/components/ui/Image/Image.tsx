"use client";
import * as React from "react";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { Skeleton } from "../Skeleton";

type ImageContext = {
  status: RadixAvatar.ImageLoadingStatus;
  onStatusChange: (status: RadixAvatar.ImageLoadingStatus) => void;
  defaultFallbackText: string;
  fallbackText: string;
  setFallbackText: React.Dispatch<React.SetStateAction<string>>;
};

const ImageContext = React.createContext({} as ImageContext);

const ImageRoot = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Root>,
  React.ComponentPropsWithoutRef<typeof RadixAvatar.Root> & {
    defaultFallbackText?: string;
  }
>(({ children, className, defaultFallbackText = "", ...rest }, passedRef) => {
  const [status, setStatus] = React.useState<ImageContext["status"]>("idle");
  const [fallbackText, setFallbackText] = React.useState(defaultFallbackText);

  return (
    <ImageContext.Provider
      value={{ status, onStatusChange: setStatus, defaultFallbackText, fallbackText, setFallbackText }}
    >
      <RadixAvatar.Root {...rest} className={cn("flex shrink-0 relative", className)} ref={passedRef}>
        {children}
      </RadixAvatar.Root>
    </ImageContext.Provider>
  );
});
ImageRoot.displayName = "ImageRoot";

const ImageSrc = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Image>,
  React.ComponentPropsWithoutRef<typeof RadixAvatar.Image>
>(({ children, className, onLoadingStatusChange: passedOnLoadingChange, alt, ...rest }, passedRef) => {
  const ctx = React.useContext(ImageContext);

  if (!ctx) {
    throw new Error("ImageSrc can only be used within ImageRoot.");
  }

  const { onStatusChange, defaultFallbackText, setFallbackText } = ctx;

  React.useEffect(() => {
    setFallbackText(alt ?? defaultFallbackText);
  }, [alt, defaultFallbackText, setFallbackText]);

  return (
    <RadixAvatar.Image
      {...rest}
      alt={alt}
      className={cn("flex shrink-0 relative", className)}
      onLoadingStatusChange={(newStatus: ImageContext["status"]) => {
        onStatusChange(newStatus);
        if (passedOnLoadingChange) {
          passedOnLoadingChange(newStatus);
        }
      }}
      ref={passedRef}
    >
      {children}
    </RadixAvatar.Image>
  );
});
ImageSrc.displayName = "ImageSrc";

const ImageSkeleton = React.forwardRef(
  (
    {
      children,
      className,
      asChild = false,
      delayMs,
      ...rest
    }: React.ComponentPropsWithoutRef<"div"> & {
      asChild?: boolean;
      delayMs?: number;
    },
    passedRef: React.ForwardedRef<HTMLDivElement>
  ) => {
    const ctx = React.useContext(ImageContext);
    if (!ctx) {
      throw new Error("ImageSkeleton can only be used within ImageRoot.");
    }

    const { status } = ctx;
    const shldRender = status === "loading" || status === "idle";

    const Element = asChild ? Slot : Skeleton;

    const [timeoutDone, setTimeoutDone] = React.useState(delayMs ? false : true);

    React.useEffect(() => {
      let timer: ReturnType<typeof setTimeout> | undefined;
      if (shldRender) {
        setTimeoutDone(delayMs ? false : true);
        if (delayMs) {
          timer = setTimeout(() => {
            setTimeoutDone(true);
          }, delayMs);
        }
      }

      return function cleanup() {
        clearTimeout(timer);
      };
    }, [delayMs, shldRender]);

    return (
      timeoutDone &&
      shldRender ? (
        <Element {...rest} className={cn("h-full w-full shrink-0", className)} ref={passedRef}>
          {children}
        </Element>
      ) : null
    );
  }
);
ImageSkeleton.displayName = "ImageSkeleton";

const ImageFallback = React.forwardRef(
  (
    {
      children,
      className,
      asChild = false,
      ...rest
    }: React.ComponentPropsWithoutRef<"div"> & {
      asChild?: boolean;
    },
    passedRef: React.ForwardedRef<HTMLDivElement>
  ) => {
    const ctx = React.useContext(ImageContext);
    if (!ctx) {
      throw new Error("ImageFallback can only be used within ImageRoot.");
    }

    const Element = asChild ? Slot : "div";

    const { status } = ctx;

    return (
      status === "error" ? (
        <Element
          {...rest}
          className={cn(
            "h-full w-full shrink-0 from-muted/50 to-muted bg-gradient-to-br flex items-center justify-center",
            className
          )}
          ref={passedRef}
        >
          {children}
        </Element>
      ) : null
    );
  }
);
ImageFallback.displayName = "ImageFallback";

const ImageFallbackValue = React.forwardRef(
  (
    {
      asChild = false,
      className,
      ...rest
    }: Omit<React.ComponentPropsWithoutRef<"p">, "children"> & {
      asChild?: boolean;
      placeholder?: string;
    },
    passedRef: React.ForwardedRef<HTMLParagraphElement>
  ) => {
    const ctx = React.useContext(ImageContext);
    if (!ctx) {
      throw new Error("ImageFallbackValue can only be used within ImageRoot.");
    }

    const Element = asChild ? Slot : "p";

    const { fallbackText } = ctx;

    return (
      <Element {...rest} className={cn("text-center font-light", className)} ref={passedRef}>
        {fallbackText}
      </Element>
    );
  }
);
ImageFallbackValue.displayName = "ImageFallbackValue";

export { ImageRoot, ImageSrc, ImageSkeleton, ImageFallback, ImageFallbackValue };
