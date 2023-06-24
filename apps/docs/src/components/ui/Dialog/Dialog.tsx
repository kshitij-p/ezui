"use client";
import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";
import {
  DEFAULT_DIALOG_POSITION,
  DialogAnimation,
  DialogPosition,
  dialogAnimationLookup,
  dialogPositionLookup,
} from "@/components/ui/Dialog/utils";

const Dialog = RadixDialog.Root;

const DialogTrigger = RadixDialog.Trigger;

const DialogClose = RadixDialog.Close;

const DialogPortal = ({ className, children, ...rest }: RadixDialog.DialogPortalProps) => {
  return (
    <RadixDialog.Portal {...rest} className={cn("fixed inset-0 z-dialog", className)}>
      {children}
    </RadixDialog.Portal>
  );
};
DialogPortal.displayName = RadixDialog.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Overlay>
>(({ className, ...rest }, passedRef) => (
  <RadixDialog.Overlay
    {...rest}
    className={cn(
      "fixed inset-0 z-dialog-backdrop w-full bg-background/10 backdrop-blur-[8px] transition-all duration-100",
      className
    )}
    ref={passedRef}
  />
));
DialogOverlay.displayName = RadixDialog.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Content> & {
    position?: Partial<DialogPosition>;
    animation?: DialogAnimation;
  }
>(
  (
    { className, children, position: passedPosition = DEFAULT_DIALOG_POSITION, animation = "zoom", ...rest },
    passedRef
  ) => {
    const position = { ...DEFAULT_DIALOG_POSITION, ...passedPosition };

    return (
      <DialogPortal>
        <DialogOverlay className="group" />

        <RadixDialog.Content
          {...rest}
          className={cn(
            "fixed z-dialog flex w-full max-w-[90vw] origin-top-left flex-col gap-4 overflow-y-auto rounded border bg-paper p-6 shadow shadow-black/20 focus-visible:outline-none sm:max-w-lg",
            dialogAnimationLookup[animation],
            dialogPositionLookup.x[position.x],
            dialogPositionLookup.y[position.y],
            className
          )}
          ref={passedRef}
        >
          {children}
        </RadixDialog.Content>
      </DialogPortal>
    );
  }
);
DialogContent.displayName = RadixDialog.Content.displayName;

const DialogHeader = React.forwardRef(
  (
    { children, className, ...rest }: React.HTMLAttributes<HTMLDivElement>,
    passedRef: React.ForwardedRef<HTMLDivElement>
  ) => (
    <div {...rest} className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} ref={passedRef}>
      {children}
    </div>
  )
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = React.forwardRef(
  (
    { children, className, ...rest }: React.HTMLAttributes<HTMLDivElement>,
    passedRef: React.ForwardedRef<HTMLDivElement>
  ) => (
    <div
      {...rest}
      className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
      ref={passedRef}
    >
      {children}
    </div>
  )
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Title>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Title>
>(({ className, ...rest }, passedRef) => (
  <RadixDialog.Title
    {...rest}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    ref={passedRef}
  />
));
DialogTitle.displayName = RadixDialog.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Description>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Description>
>(({ className, ...rest }, passedRef) => (
  <RadixDialog.Description {...rest} className={cn("text-sm", className)} ref={passedRef} />
));
DialogDescription.displayName = RadixDialog.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
