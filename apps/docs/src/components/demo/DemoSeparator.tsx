import React from "react";
import { Separator } from "@/components/ui/Separator";

const DemoSeparator = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold leading-none">Ezui</h4>
          <p className="text-sm text-light-text">A comp lib made by a cat enjoyer.</p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    </div>
  );
};

export default DemoSeparator;
