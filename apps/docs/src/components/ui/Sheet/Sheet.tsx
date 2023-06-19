"use client";
import React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { cn } from "@/lib/utils";
import { DialogAnimation, DialogPosition, dialogPositionLookup } from "@/components/ui/Dialog/utils";
import { cva } from "class-variance-authority";

const Sheet = Dialog;

const SheetTrigger = DialogTrigger;

type SheetPosition = Exclude<DialogPosition["x"] | DialogPosition["y"], "center">;

const ALL_SHEET_VARIANTS = {
  size: {
    content: undefined,
  },
  position: {
    left: undefined,
    right: undefined,
    top: undefined,
    bottom: undefined,
  } satisfies {
    [k in SheetPosition]: undefined;
  },
};

type SheetVariants = { [k in keyof typeof ALL_SHEET_VARIANTS]: keyof typeof ALL_SHEET_VARIANTS[k] };

const DEFAULT_VARIANTS = {
  position: "right",
  size: "content",
} satisfies SheetVariants;

const sheetVariants = cva("max-w-none sm:max-w-none", {
  variants: {
    size: {
      content: undefined,
    },
    position: {
      left: undefined,
      right: undefined,
      top: undefined,
      bottom: undefined,
    } satisfies {
      [k in SheetPosition]: undefined;
    },
  },
  compoundVariants: [
    { position: "left", className: "h-full" },
    { position: "right", className: "h-full" },
    { position: "top", className: "w-full" },
    { position: "bottom", className: "w-full" },
    {
      size: "content",
      position: "left",
      className: "w-max",
    },
    {
      size: "content",
      position: "right",
      className: "w-max",
    },
    {
      size: "content",
      position: "top",
      className: "h-max",
    },
    {
      size: "content",
      position: "bottom",
      className: "h-max",
    },
  ],
  defaultVariants: DEFAULT_VARIANTS,
});

const animationHelper = {
  left: "slideLeft",
  right: "slideRight",
  top: "slideTop",
  bottom: "slideBottom",
} satisfies {
  [k in SheetPosition]: DialogAnimation;
};

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Content> & {
    variants?: Partial<Omit<SheetVariants, "position">>;
    position?: SheetVariants["position"];
    animation?: DialogAnimation;
  }
>(
  (
    {
      children,
      className,
      variants = DEFAULT_VARIANTS,
      position: passedPosition = "right",
      animation: passedAnimation,
      ...rest
    },
    passedRef
  ) => {
    const isVertical = passedPosition in dialogPositionLookup["y"];

    const position = {
      x: (isVertical ? "center" : passedPosition) as DialogPosition["x"],
      y: (isVertical ? passedPosition : "center") as DialogPosition["y"],
    };

    const animation = animationHelper[passedPosition];

    return (
      <DialogContent
        {...rest}
        position={position}
        animation={animation}
        className={cn(sheetVariants({ ...variants, position: passedPosition }), className)}
        ref={passedRef}
      >
        {children}
      </DialogContent>
    );
  }
);

const SheetHeader = DialogHeader;

const SheetFooter = DialogFooter;
const SheetTitle = DialogTitle;
const SheetDescription = DialogDescription;
const SheetClose = DialogClose;

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
  type SheetPosition,
};
