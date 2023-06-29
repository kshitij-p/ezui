"use client";
import React, { useEffect, useRef, useState } from "react";
import CodeBlock from "./CodeBlock";
import { Check, Clipboard } from "lucide-react";

const ComponentSource = ({ children }: React.PropsWithChildren) => {
  const codeRef = useRef<HTMLDivElement>(null);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    return function cleanup() {
      clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  return (
    <CodeBlock>
      <button
        onClick={async () => {
          if (!codeRef.current?.textContent) return;
          clearTimeout(copyTimeoutRef.current);
          await navigator.clipboard.writeText(codeRef.current.textContent);
          setCopied(true);
          copyTimeoutRef.current = setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
      >
        <div className="absolute bottom-0 right-0 top-0 ml-4 mr-4 mt-4 h-6 w-6">
          {copied ? <Check /> : <Clipboard />}
        </div>
        <p className="sr-only">Copy code to clipboard</p>
      </button>
      <div ref={codeRef}>{children}</div>
    </CodeBlock>
  );
};

export default ComponentSource;