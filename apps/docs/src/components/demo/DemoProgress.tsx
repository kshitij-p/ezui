"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Progress } from "@/components/ui/Progress";
import { Button } from "@/components/ui/Button";

const DemoProgress = () => {
  const [timeoutRef, setTimeoutRef] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [sliderVal, setSliderVal] = useState(20);

  const startAnimation = useCallback(() => {
    setSliderVal(20);
    setTimeoutRef(
      setTimeout(() => {
        setSliderVal(60);
        setTimeoutRef(
          setTimeout(() => {
            setSliderVal(100);
            setTimeoutRef(null);
          }, 400)
        );
      }, 400)
    );
  }, []);

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex w-full max-w-lg flex-col items-center gap-4">
        <Progress value={sliderVal} />
        <Button disabled={timeoutRef !== null} onClick={startAnimation} variants={{ type: "secondary" }}>
          Replay animation
        </Button>
      </div>
    </div>
  );
};

export default DemoProgress;
