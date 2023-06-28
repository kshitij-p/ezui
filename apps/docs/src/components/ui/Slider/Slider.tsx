"use client";

import * as React from "react";
import * as RadixSlider from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const SliderRoot = React.forwardRef<
  React.ElementRef<typeof RadixSlider.Root>,
  React.ComponentPropsWithoutRef<typeof RadixSlider.Root>
>(({ children, className, ...rest }, passedRef) => {
  return (
    <RadixSlider.Root
      {...rest}
      className={cn("relative flex w-full touch-none select-none items-center", className)}
      ref={passedRef}
    >
      {children}
    </RadixSlider.Root>
  );
});
SliderRoot.displayName = RadixSlider.Root.displayName;

const SliderTrack = React.forwardRef<
  React.ElementRef<typeof RadixSlider.Track>,
  React.ComponentPropsWithoutRef<typeof RadixSlider.Track>
>(({ children, className, ...rest }, passedRef) => {
  return (
    <RadixSlider.Track
      className={cn("relative h-2 w-full grow overflow-hidden rounded-full bg-muted", className)}
      {...rest}
      ref={passedRef}
    >
      {children}
    </RadixSlider.Track>
  );
});
SliderTrack.displayName = RadixSlider.Track.displayName;

const SliderRange = React.forwardRef<
  React.ElementRef<typeof RadixSlider.Range>,
  React.ComponentPropsWithoutRef<typeof RadixSlider.Range>
>(({ children, className, ...rest }, passedRef) => {
  return (
    <RadixSlider.Range {...rest} className={cn("absolute h-full bg-primary", className)} ref={passedRef}>
      {children}
    </RadixSlider.Range>
  );
});
SliderRange.displayName = RadixSlider.Range.displayName;

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof RadixSlider.Range>,
  React.ComponentPropsWithoutRef<typeof RadixSlider.Range>
>(({ children, className, ...rest }, passedRef) => {
  return (
    <RadixSlider.Thumb
      {...rest}
      className={cn(
        "block h-5 w-5 rounded-full border-2 border-border bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      ref={passedRef}
    >
      {children}
    </RadixSlider.Thumb>
  );
});
SliderThumb.displayName = RadixSlider.Thumb.displayName;

const Slider = React.forwardRef<
  React.ElementRef<typeof RadixSlider.Root>,
  React.ComponentPropsWithoutRef<typeof RadixSlider.Root>
>((props, passedRef) => (
  <SliderRoot {...props} ref={passedRef}>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
));
Slider.displayName = RadixSlider.Root.displayName;

const RangeSlider = React.forwardRef<
  React.ElementRef<typeof RadixSlider.Root>,
  React.ComponentPropsWithoutRef<typeof RadixSlider.Root>
>((props, passedRef) => (
  <SliderRoot {...props} ref={passedRef}>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
    <SliderThumb />
  </SliderRoot>
));
RangeSlider.displayName = RadixSlider.Root.displayName;

export { SliderRoot, SliderTrack, SliderRange, SliderThumb, Slider, RangeSlider };
