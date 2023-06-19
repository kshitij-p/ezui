"use client";
import { useEffect, useRef } from "react";
import NoiseFilter from "@/components/util/NoiseFilter";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const noiseFilterRef = useRef<SVGSVGElement | null>(null);

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
      if (!noiseFilterRef.current) {
        return;
      }
      noiseFilterRef.current.dataset.scroll = `${window.scrollY}`;
    });

    document.addEventListener("scroll", storeScroll, { passive: true });

    //Initialise scroll pos
    storeScroll();

    return function cleanup() {
      document.removeEventListener("scroll", storeScroll);
    };
  }, []);

  return (
    <header className="sticky inset-0 z-40 bg-slate-900/10 backdrop-blur-sm">
      <NoiseFilter
        className="will-change-opacity opacity-25 mix-blend-soft-light transition-opacity data-[scroll='0']:opacity-0"
        data-scroll={"0"}
        ref={noiseFilterRef}
      />
      <nav className="flex items-center justify-between px-8 py-4 text-lg md:justify-evenly md:text-xl [&>*]:shrink-0">
        <b>Wrongdle</b>
        <ul className="flex items-center gap-4 md:gap-16">
          <li>
            <button
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
            >
              Toggle theme
            </button>
          </li>

          <li className="inline-flex items-center justify-center md:hidden">Meow</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
