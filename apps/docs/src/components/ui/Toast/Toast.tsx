"use client";

import * as React from "react";
import * as RadixToast from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { useToast } from "./useToast";

const ToastProvider = RadixToast.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof RadixToast.Viewport>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Viewport>
>(({ className, ...rest }, passedRef) => (
  <RadixToast.Viewport
    {...rest}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-3 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    ref={passedRef}
  />
));
ToastViewport.displayName = RadixToast.Viewport.displayName;

const ALL_TOAST_VARIANTS = {
  type: {
    default: "border bg-paper",
    danger: "danger border-danger border-danger bg-paper",
  },
} as const;

type ToastVariants = {
  [k in keyof typeof ALL_TOAST_VARIANTS]: keyof (typeof ALL_TOAST_VARIANTS)[k];
};

const DEFAULT_VARIANTS = {
  type: "default",
} satisfies ToastVariants;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-slideOutRight data-[state=open]:animate-slideInTop data-[swipe=move]:transition-none data-[state=open]:sm:animate-slideInBottom",
  {
    variants: ALL_TOAST_VARIANTS,
    defaultVariants: DEFAULT_VARIANTS,
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof RadixToast.Root>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Root> & {
    variants?: Partial<ToastVariants>;
  }
>(({ className, variants = DEFAULT_VARIANTS, ...rest }, passedRef) => {
  return <RadixToast.Root {...rest} className={cn(toastVariants(variants), className)} ref={passedRef} />;
});
Toast.displayName = RadixToast.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof RadixToast.Action>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Action>
>(({ className, ...rest }, passedRef) => (
  <RadixToast.Action
    {...rest}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:border-border hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus-visible:border-border focus-visible:bg-accent/50 disabled:pointer-events-none disabled:opacity-50 group-[.danger]:hover:border-danger/30 group-[.danger]:hover:bg-danger/50 group-[.danger]:focus:ring-danger/75 group-[.danger]:focus-visible:border-danger/30 group-[.danger]:focus-visible:bg-danger/50",

      className
    )}
    ref={passedRef}
  />
));
ToastAction.displayName = RadixToast.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof RadixToast.Close>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Close>
>(({ className, ...rest }, passedRef) => (
  <RadixToast.Close
    {...rest}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring/75 group-hover:opacity-100 group-[.danger]:text-red-300 group-[.danger]:hover:text-danger group-[.danger]:focus:ring-danger/75",
      className
    )}
    toast-close=""
    ref={passedRef}
  >
    <X className="h-4 w-4" />
  </RadixToast.Close>
));
ToastClose.displayName = RadixToast.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof RadixToast.Title>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Title>
>(({ className, ...rest }, passedRef) => (
  <RadixToast.Title {...rest} className={cn("text-sm font-semibold", className)} ref={passedRef} />
));
ToastTitle.displayName = RadixToast.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof RadixToast.Description>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Description>
>(({ className, ...rest }, passedRef) => (
  <RadixToast.Description {...rest} className={cn("text-sm opacity-90", className)} ref={passedRef} />
));
ToastDescription.displayName = RadixToast.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

const Toaster = (props: React.ComponentPropsWithoutRef<typeof ToastProvider>) => {
  const { toasts } = useToast();

  return (
    <ToastProvider {...props}>
      {toasts.map(function ({ id, title, description, action, ...rest }) {
        return (
          <Toast key={id} {...rest}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
};

export {
  Toaster,
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  ALL_TOAST_VARIANTS,
  DEFAULT_VARIANTS,
  type ToastVariants,
};
