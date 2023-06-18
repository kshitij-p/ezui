"use client";
import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

const Dialog = RadixDialog.Root;

const DialogTrigger = RadixDialog.Trigger;

const DialogClose = RadixDialog.Close;

const DialogPortal = ({ className, children, ...rest }: RadixDialog.DialogPortalProps) => {
  return (
    <RadixDialog.Portal {...rest} className={cn("fixed inset-0 z-[1400]", className)}>
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
      "fixed inset-0 z-[1399] w-full bg-background/10 backdrop-blur-[8px] transition-all duration-100",
      className
    )}
    ref={passedRef}
  />
));
DialogOverlay.displayName = RadixDialog.Overlay.displayName;

const DEFAULT_DIALOG_POSITION = { x: "center", y: "center" } as {
  x: "left" | "center" | "right";
  y: "top" | "center" | "bottom";
};

type DialogPosition = typeof DEFAULT_DIALOG_POSITION;

const positionLookup: {
  x: {
    [k in DialogPosition["x"]]: string;
  };
  y: {
    [k in DialogPosition["y"]]: string;
  };
} = {
  x: {
    left: "left-0",
    center: "left-1/2 -translate-x-1/2",
    right: "right-0",
  },
  y: {
    top: "top-0",
    center: "top-1/2 -translate-y-1/2",
    bottom: "bottom-0",
  },
};

const DialogContent = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Content> & {
    position?: Partial<DialogPosition>;
  }
>(({ className, children, position: passedPosition = DEFAULT_DIALOG_POSITION, ...rest }, passedRef) => {
  const position = { ...DEFAULT_DIALOG_POSITION, ...passedPosition };

  return (
    <DialogPortal>
      <DialogOverlay className="group" />

      <RadixDialog.Content
        {...rest}
        className={cn(
          "fixed z-[1400] w-full sm:max-w-lg max-w-[90vw] origin-top-left overflow-y-auto rounded bg-paper p-6 shadow shadow-black/20 animate-zoomIn data-[state='closed']:animate-zoomOut flex flex-col gap-4",
          positionLookup.x[position.x],
          positionLookup.y[position.y],
          className
        )}
        ref={passedRef}
      >
        {children}
      </RadixDialog.Content>
    </DialogPortal>
  );
});
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
