"use client";
import * as React from "react";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";
import {
  DEFAULT_DIALOG_POSITION,
  DialogAnimation,
  DialogPosition,
  dialogAnimationLookup,
  dialogPositionLookup,
} from "@/components/ui/Dialog/utils";

const AlertDialog = RadixAlertDialog.Root;

const AlertDialogTrigger = RadixAlertDialog.Trigger;

const AlertDialogPortal = ({ className, children, ...rest }: RadixAlertDialog.DialogPortalProps) => {
  return (
    <RadixAlertDialog.Portal {...rest} className={cn("fixed inset-0 z-[1400]", className)}>
      {children}
    </RadixAlertDialog.Portal>
  );
};
AlertDialogPortal.displayName = RadixAlertDialog.Portal.displayName;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof RadixAlertDialog.Overlay>
>(({ className, ...rest }, passedRef) => (
  <RadixAlertDialog.Overlay
    {...rest}
    className={cn(
      "fixed inset-0 z-[1399] w-full bg-background/10 backdrop-blur-[8px] transition-all duration-100",
      className
    )}
    ref={passedRef}
  />
));
AlertDialogOverlay.displayName = RadixAlertDialog.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Content>,
  React.ComponentPropsWithoutRef<typeof RadixAlertDialog.Content> & {
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
      <AlertDialogPortal>
        <AlertDialogOverlay className="group" />

        <RadixAlertDialog.Content
          {...rest}
          className={cn(
            "fixed z-[1400] w-full sm:max-w-lg max-w-[90vw] origin-top-left overflow-y-auto rounded bg-paper p-6 shadow shadow-black/20 flex flex-col gap-4",
            dialogAnimationLookup[animation],
            dialogPositionLookup.x[position.x],
            dialogPositionLookup.y[position.y],
            className
          )}
          ref={passedRef}
        >
          {children}
        </RadixAlertDialog.Content>
      </AlertDialogPortal>
    );
  }
);
AlertDialogContent.displayName = RadixAlertDialog.Content.displayName;

const AlertDialogHeader = React.forwardRef(
  (
    { children, className, ...rest }: React.HTMLAttributes<HTMLDivElement>,
    passedRef: React.ForwardedRef<HTMLDivElement>
  ) => (
    <div {...rest} className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} ref={passedRef}>
      {children}
    </div>
  )
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = React.forwardRef(
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
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Title>,
  React.ComponentPropsWithoutRef<typeof RadixAlertDialog.Title>
>(({ className, ...rest }, passedRef) => (
  <RadixAlertDialog.Title
    {...rest}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    ref={passedRef}
  />
));
AlertDialogTitle.displayName = RadixAlertDialog.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Description>,
  React.ComponentPropsWithoutRef<typeof RadixAlertDialog.Description>
>(({ className, ...rest }, passedRef) => (
  <RadixAlertDialog.Description {...rest} className={cn("text-sm", className)} ref={passedRef} />
));
AlertDialogDescription.displayName = RadixAlertDialog.Description.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Cancel>,
  React.ComponentPropsWithoutRef<typeof RadixAlertDialog.Cancel>
>(({ className, ...rest }, passedRef) => (
  <RadixAlertDialog.Cancel {...rest} className={cn("mt-2 sm:mt-0", className)} ref={passedRef} />
));
AlertDialogCancel.displayName = RadixAlertDialog.Cancel.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Action>,
  React.ComponentPropsWithoutRef<typeof RadixAlertDialog.Action>
>(({ className, ...rest }, passedRef) => (
  <RadixAlertDialog.Action {...rest} className={cn(className)} ref={passedRef} />
));
AlertDialogAction.displayName = RadixAlertDialog.Action.displayName;

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
