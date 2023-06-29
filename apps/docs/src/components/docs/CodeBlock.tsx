import { cn } from "@/lib/utils";
import React from "react";

const CodeBlock = ({ children, className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "relative mb-4 mt-6 max-h-[40rem] overflow-y-auto rounded border bg-[hsl(180_4%_6%)] px-4 py-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CodeBlock;
