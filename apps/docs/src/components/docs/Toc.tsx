"use client";

import { cn } from "@/lib/utils";
import { Items } from "@/utils/toc";
import { useEffect, useState } from "react";

const Tree = ({ toc, activeId }: { toc?: Items; activeId: string | null }) => {
  if (!toc?.items) return null;

  return (
    <>
      {toc.items.map((item) => (
        <div className="flex flex-col pl-4" key={item.title}>
          <span className={cn(activeId === item.id && "font-bold")}>{item.title}</span>
          {item.items !== undefined && <Tree toc={{ items: item.items }} activeId={activeId} />}
        </div>
      ))}
    </>
  );
};

const tocNodeToSelector = (toc: Items | undefined, res = [] as string[]) => {
  if (!toc?.items) return;

  for (let item of toc.items) {
    res.push(`#${item.id}`);
    tocNodeToSelector({ items: item.items }, res);
  }
};

const Toc = ({ toc }: { toc: Items }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  console.log(activeId);

  useEffect(() => {
    if (!toc.items?.length) return;

    let res: string[] = [];
    tocNodeToSelector(toc, res);

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
      let el = document.querySelector(item);
      if (!el) continue;
      observer.observe(el);
    }

    return function cleanup() {
      observer.disconnect();
    };
  }, [toc]);

  return (
    <div className="sticky top-20">
      <Tree toc={toc} activeId={activeId} />
    </div>
  );
};

export default Toc;
