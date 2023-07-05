"use client";
import { useEffect, useRef, useState } from "react";
import NoiseFilter from "@/components/util/NoiseFilter";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import { SidebarContent } from "./Sidebar";
import { Menu, Moon, Sun } from "lucide-react";

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const headerRef = useRef<HTMLElement | null>(null);

  const hasMounted = useHasMounted();

  const isLightTheme = theme === "light";

  useEffect(() => {
    const debounce = (fn: (...params: unknown[]) => void) => {
      let frame: number;

      return (...params: unknown[]) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };

    const storeScroll = debounce(() => {
      if (!headerRef.current) {
        return;
      }
      headerRef.current.dataset.scroll = `${window.scrollY}`;
    });

    document.addEventListener("scroll", storeScroll, { passive: true });

    //Initialise scroll pos
    storeScroll();

    return function cleanup() {
      document.removeEventListener("scroll", storeScroll);
    };
  }, []);

  return (
    <header
      className="group sticky inset-0 z-40 border-b border-transparent bg-slate-900/10 backdrop-blur-sm transition data-[scroll='0']:border-border-light data-[scroll='0']:bg-background"
      data-scroll={"0"}
      ref={headerRef}
    >
      <NoiseFilter className="will-change-opacity h-full w-full opacity-25 mix-blend-soft-light transition-opacity group-data-[scroll='0']:opacity-0" />
      <nav className="flex items-center justify-between px-8 py-4 text-lg md:justify-evenly md:text-xl [&>*]:shrink-0">
        <Link href={"/"}>
          <b>Ezui</b>
        </Link>
        <ul className="flex items-center gap-4 md:gap-16">
          <li className="inline-flex items-center justify-center">
            <button
              suppressHydrationWarning
              onClick={() => {
                setTheme(isLightTheme ? "dark" : "light");
              }}
            >
              <span suppressHydrationWarning>{hasMounted && !isLightTheme ? <Moon /> : <Sun />}</span>
            </button>
          </li>

          <li className="inline-flex items-center justify-center md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent className="w-[70%]">
                <SidebarContent />
              </SheetContent>
            </Sheet>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
