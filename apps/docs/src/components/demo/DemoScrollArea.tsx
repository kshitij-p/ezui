"use client";
import React, { useState } from "react";
import { ScrollArea, ScrollAreaRoot, ScrollAreaViewport, ScrollBar } from "@/components/ui/ScrollArea";

const DemoScrollArea = () => {
  const [scrollAreaTestData] = useState(new Array(15).fill(undefined).map((_, idx) => `Item-${idx + 1}`));

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <ScrollArea className="h-[100px] border">
        <div>
          {scrollAreaTestData.map((val) => (
            <div className="h-8 p-2" key={val}>
              {val}
            </div>
          ))}
        </div>
      </ScrollArea>
      <ScrollAreaRoot className="h-[200px] w-[350px] rounded-md border p-4" type="always">
        <ScrollAreaViewport>
          So let's make trouble in the dream world Hijack heaven with another memory now I make the most of the turning
          tide It just split what's left of the burning silence Don't wait, 'cause this could be the last time You turn
          up in the reveries of my mind I wake up to a suicide frenzy Loaded dreams still leave me empty I believe
          Somewhere in the past Something was between You and I my dear And it remains With me to this day No matter
          what I do This wound will never heal Why are you never real? The shifting states you follow me through
          Unrevealed Just let me go or take me with you
        </ScrollAreaViewport>
        <ScrollBar />
      </ScrollAreaRoot>
    </div>
  );
};

export default DemoScrollArea;
