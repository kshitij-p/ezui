"use client";
import React, { useState } from "react";
import { ScrollArea } from "../ui/ScrollArea";

const DemoScrollArea = () => {
  const [scrollAreaTestData] = useState(new Array(15).fill(undefined).map((_, idx) => `Item-${idx + 1}`));

  return (
    <div className="w-full">
      <ScrollArea>
        <div className="h-[100px]">
          {scrollAreaTestData.map((val) => (
            <div className="h-8" key={val}>
              {val}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default DemoScrollArea;
