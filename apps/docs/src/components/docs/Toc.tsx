"use client";

import { cn } from "@/lib/utils";
import { Items } from "@/utils/toc";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Tree = ({
  toc,
  activeId,
  level = 0,
  setActiveId,
}: {
  toc?: Items;
  activeId: string | null;
  level?: number;
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  if (!toc?.items) return null;

  return (
    <>
      {toc.items.map((item) => (
        <div className={cn("flex flex-col", level > 0 && "pl-4")} key={item.title}>
          <Link
            className={cn(
              "max-w-max rounded-sm p-0.5 text-light-text transition hover:text-primary focus-visible:text-primary focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-primary",
              activeId === item.url
                ? "font-semibold text-foreground underline decoration-primary underline-offset-4"
                : "underline-teal-anim"
            )}
            onClick={() => {
              setActiveId(item.url);
            }}
            href={`#${item.url}`}
          >
            {item.title}
          </Link>
          {item.items !== undefined && (
            <Tree toc={{ items: item.items }} activeId={activeId} setActiveId={setActiveId} level={level + 1} />
          )}
        </div>
      ))}
    </>
  );
};

const tocNodeToSelector = (toc: Items | undefined, res = [] as string[]) => {
  if (!toc?.items) return;

  for (let item of toc.items) {
    res.push(`#${item.url}`);
    tocNodeToSelector({ items: item.items }, res);
  }
};

const Toc = ({ toc }: { toc: Items }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!toc.items?.length) return;

    let res: string[] = [];
    tocNodeToSelector(toc, res);

    //Todo improve this detection method - while scrolling up, active link doesnt go from anatomy to usage
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      },
      {
        threshold: [1],
      }
    );

    for (let item of res) {
      try {
        let el = document.querySelector(item);
        if (!el) continue;
        observer.observe(el);
      } catch (e) {
        continue;
      }
    }

    return function cleanup() {
      observer.disconnect();
    };
  }, [toc]);

  return (
    <div className="sticky top-20 grid gap-4">
      <p className="text-lg font-semibold">On This Page</p>
      <div className="space-y-1">
        <Tree toc={toc} activeId={activeId} setActiveId={setActiveId} />
      </div>
    </div>
  );
};

export default Toc;
