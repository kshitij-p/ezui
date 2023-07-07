import React, { ForwardedRef } from "react";
import Link from "next/link";
import { ScrollArea } from "../ui/ScrollArea";
import { cn } from "@/lib/utils";
import SidebarContent from "./SidebarContent";

const SidebarLink = React.forwardRef(
  (
    {
      children,
      className,
      active,
      ...rest
    }: React.ComponentPropsWithoutRef<typeof Link> & {
      active: boolean;
    },
    passedRef: ForwardedRef<HTMLAnchorElement>
  ) => {
    return (
      <Link
        {...rest}
        className={cn(
          "max-w-max text-sm text-zinc-500 decoration-primary hover:text-primary focus:outline-none focus-visible:text-primary dark:text-zinc-400 dark:hover:text-primary dark:focus-visible:text-primary xl:text-base",
          active
            ? "font-semibold text-foreground underline decoration-primary underline-offset-4 dark:text-foreground"
            : "underline-teal-anim",
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

const Sidebar = () => {
  return (
    <aside className="sticky top-20 z-40 hidden h-[calc(100vh-5.75rem)] w-full shrink-0 pl-2 pr-4 md:flex xl:pl-6">
      <ScrollArea className="px-4 pb-6">
        <SidebarContent />
      </ScrollArea>
    </aside>
  );
};

export { Sidebar, SidebarContent, SidebarLink };
