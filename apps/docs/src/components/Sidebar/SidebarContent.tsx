"use client";

import { registryComponents } from "@/registry";
import { SidebarLink } from "./Sidebar";
import { usePathname } from "next/navigation";

const content = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        path: "/docs",
      },
      {
        title: "Installation",
        path: "/docs/installation",
      },
    ],
  },
  {
    title: "Components",
    items: Object.values(registryComponents).map(({ name, displayName }) => {
      return {
        title: displayName,
        path: `/docs/components/${name}`,
      };
    }),
  },
];

const SidebarContent = () => {
  const pathName = usePathname();

  return (
    <div className="flex flex-col gap-4">
      {content.map((group) => (
        <div key={group.title}>
          <h4 className="mb-2 text-base font-semibold xl:text-lg">Getting Started</h4>
          {group.items.length > 0 && (
            <nav className="flex flex-col gap-2">
              {group.items.map((item) => (
                //Todo flip this prefetch to true when docs for all comps are ready
                <SidebarLink prefetch={false} href={item.path} key={item.title} active={item.path === pathName}>
                  {item.title}
                </SidebarLink>
              ))}
            </nav>
          )}
          <nav className="flex flex-col gap-2"></nav>
        </div>
      ))}
    </div>
  );
};

export default SidebarContent;
