import React from "react";
import { Code } from "../ui/Code/Code";

const DemoCode = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full max-w-lg flex-col items-center gap-4">
        <Code>look some real code</Code>

        <div className="flex w-full flex-col items-center text-center">
          As block
          <Code className="flex w-full flex-col" block>
            <span className="inline-block w-full">let x = d</span>
            <span className="inline-block w-full">let 8 = d</span>
          </Code>
        </div>
      </div>
    </div>
  );
};

export default DemoCode;
