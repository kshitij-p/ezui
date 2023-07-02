"use client";

import React, { useEffect, useRef, useState } from "react";
import CodeBlock from "./CodeBlock";
import { Check, Copy } from "lucide-react";

const CodeCopyBlock = ({ children, ...rest }: React.ComponentPropsWithoutRef<typeof CodeBlock>) => {
  const codeRef = useRef<HTMLDivElement>(null);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    return function cleanup() {
      clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  return (
    <CodeBlock {...rest}>
      <button
        className="absolute bottom-0 right-0 top-0 mr-4 mt-5 h-max w-max rounded text-light-text transition hover:text-primary focus-visible:text-primary focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50"
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
        <div className="flex h-5 w-5 items-center justify-center ">{copied ? <Check /> : <Copy />}</div>
        <p className="sr-only">Copy code to clipboard</p>
      </button>
      <div ref={codeRef}>{children}</div>
    </CodeBlock>
  );
};

export default CodeCopyBlock;
