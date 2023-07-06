import React, { ForwardedRef } from "react";
import { registryComponents } from "@/registry";
import Link from "next/link";
import { ScrollArea } from "../ui/ScrollArea";
import { cn } from "@/lib/utils";

const SidebarLink = React.forwardRef(
  (
    { children, className, ...rest }: React.ComponentPropsWithoutRef<typeof Link>,
    passedRef: ForwardedRef<HTMLAnchorElement>
  ) => {
    return (
      <Link
        {...rest}
        className={cn(
          "underline-teal-anim max-w-max text-sm text-zinc-500 decoration-primary hover:text-primary focus-visible:text-primary focus-visible:outline-none dark:text-zinc-400 dark:hover:text-primary dark:focus-visible:text-primary xl:text-base",
          className
        )}
        ref={passedRef}
      >
        {children}
      </Link>
    );
  }
);
SidebarLink.displayName = "SidebarLink";

const SidebarContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="mb-2 text-base font-semibold xl:text-lg">Getting Started</h4>
        <nav className="flex flex-col gap-2">
          <SidebarLink href={`/docs`}>Introduction</SidebarLink>
          <SidebarLink href={`/docs/installation`}>Installation</SidebarLink>
        </nav>
      </div>
      <div>
        <h4 className="mb-2 text-base font-semibold xl:text-lg">Components</h4>
        <nav className="flex flex-col gap-2">
          {Object.values(registryComponents).map(({ name, displayName }) => {
            //Todo flip this prefetch to true when docs for all comps are ready
            return (
              <SidebarLink prefetch={false} href={`/docs/components/${name}`} key={name}>
                {displayName}
              </SidebarLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="sticky top-20 z-40 hidden h-[calc(100vh-5.75rem)] w-full shrink-0 pl-2 pr-4 md:flex xl:pl-6">
      <ScrollArea className="px-4 pb-6">
        <SidebarContent />
      </ScrollArea>
    </aside>
  );
};

export { Sidebar, SidebarContent };
