"use client";

import React from "react";
import { RangeSlider, Slider } from "@/components/ui/Slider";

const DemoSlider = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-wrap items-center justify-center gap-8">
        <div className="flex w-full max-w-lg flex-col items-center gap-8">
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
        <div className="flex w-full max-w-lg flex-col items-center gap-8">
          <RangeSlider defaultValue={[25, 50]} max={100} step={1} />
        </div>
      </div>
    </div>
  );
};

export default DemoSlider;
