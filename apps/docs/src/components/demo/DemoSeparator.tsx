import React from "react";
import { Separator } from "../ui/Separator";

const DemoSeparator = () => {
  return (
    <div>
      <div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Ezui</h4>
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
