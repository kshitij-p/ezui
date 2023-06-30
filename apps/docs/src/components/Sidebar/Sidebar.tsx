"use client";
import React from "react";
import { registryComponents } from "@/registry";
import Link from "next/link";
import ScrollList from "./ScrollList";

const SidebarContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="mb-2 text-lg font-semibold">Getting Started</h4>
        <nav className="flex flex-col gap-2">
          <Link
            className="text-zinc-500 decoration-primary underline-offset-4 hover:text-zinc-600 hover:underline focus:outline-none focus-visible:text-zinc-600 focus-visible:underline dark:text-zinc-400 dark:hover:text-zinc-300 dark:focus-visible:text-zinc-300"
            href={`/docs`}
          >
            Introduction
          </Link>
          <Link
            className="text-zinc-500 decoration-primary underline-offset-4 hover:text-zinc-600 hover:underline focus:outline-none focus-visible:text-zinc-600 focus-visible:underline dark:text-zinc-400 dark:hover:text-zinc-300 dark:focus-visible:text-zinc-300"
            href={`/docs/installation`}
          >
            Installation
          </Link>
        </nav>
      </div>
      <div>
        <h4 className="mb-2 text-lg font-semibold">Components</h4>
        <nav className="flex flex-col gap-2">
          {Object.values(registryComponents).map(({ name, displayName }) => {
            //Todo flip this prefetch to true when docs for all comps are ready
            return (
              <Link
                className="text-zinc-500 decoration-primary underline-offset-4 hover:text-zinc-600 hover:underline focus:outline-none focus-visible:text-zinc-600 focus-visible:underline dark:text-zinc-400 dark:hover:text-zinc-300 dark:focus-visible:text-zinc-300"
                prefetch={false}
                href={`/docs/components/${name}`}
                key={name}
              >
                {displayName}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="sticky top-20 z-40 hidden h-[calc(100vh-5.75rem)] w-full shrink-0 pl-2 pr-4 md:flex md:max-w-[12rem] xl:max-w-[15rem] xl:pl-6">
      <ScrollList className="px-4 pb-6">
        <SidebarContent />
      </ScrollList>
    </aside>
  );
};

export { Sidebar, SidebarContent };
