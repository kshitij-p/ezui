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
          <Link className="text-zinc-400" href={`/docs`}>
            Introduction
          </Link>
          <Link className="text-zinc-400" href={`/docs/installation`}>
            Installation
          </Link>
        </nav>
      </div>
      <div>
        <h4 className="mb-2 text-lg font-semibold">Components</h4>
        <nav className="flex flex-col gap-2">
          {Object.keys(registryComponents).map((name) => {
            //Todo flip this prefetch to true when docs for all comps are ready
            return (
              <Link className="text-zinc-400" prefetch={false} href={`/docs/components/${name}`} key={name}>
                {name}
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
    <aside className="sticky top-20 z-40 hidden h-screen w-full shrink-0 pl-2 pr-4 md:flex md:max-w-[12rem] xl:max-w-[15rem] xl:pl-6">
      <ScrollList className="px-4">
        <SidebarContent />
      </ScrollList>
    </aside>
  );
};

export { Sidebar, SidebarContent };
