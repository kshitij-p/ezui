"use client";

import * as React from "react";
import * as RadixAvatar from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Root>,
  React.ComponentPropsWithoutRef<typeof RadixAvatar.Root>
>(({ className, ...rest }, passedRef) => (
  <RadixAvatar.Root
    {...rest}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    ref={passedRef}
  />
));
Avatar.displayName = RadixAvatar.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Image>,
  React.ComponentPropsWithoutRef<typeof RadixAvatar.Image>
>(({ className, ...rest }, passedRef) => (
  <RadixAvatar.Image {...rest} className={cn("aspect-square h-full w-full", className)} ref={passedRef} />
));
AvatarImage.displayName = RadixAvatar.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Fallback>,
  React.ComponentPropsWithoutRef<typeof RadixAvatar.Fallback>
>(({ className, ...rest }, passedRef) => (
  <RadixAvatar.Fallback
    {...rest}
    className={cn("flex h-full w-full items-center justify-center rounded-[inherit] bg-muted", className)}
    ref={passedRef}
  />
));
AvatarFallback.displayName = RadixAvatar.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
