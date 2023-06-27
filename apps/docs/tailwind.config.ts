import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const directions = [
  {
    name: "Top",
    start: {
      x: 0,
      y: -100,
    },
    end: {
      x: 0,
      y: 0,
    },
  },
  {
    name: "Bottom",

    start: {
      x: 0,
      y: 100,
    },
    end: {
      x: 0,
      y: 0,
    },
  },
  {
    name: "Left",
    start: {
      x: -100,
      y: 0,
    },
    end: {
      x: 0,
      y: 0,
    },
  },
  {
    name: "Right",
    start: {
      x: 100,
      y: 0,
    },
    end: {
      x: 0,
      y: 0,
    },
  },
];

const slideAnimations = {};

const slideKeyframes = {};

type Position = { x: number; y: number };

const getTranslateProp = ({ x, y }: Position, multipler: number) => {
  return `${x * multipler}% ${y * multipler}%`;
};

const createSlideAnimation = (name: string, start: Position, end: Position, multipler = 1) => {
  let offsetStr = multipler !== 1 ? `/${multipler * 100}` : "";
  let inName = `slideIn${name}${offsetStr}`;
  let outName = `slideOut${name}${offsetStr}`;

  slideAnimations[inName] = `${inName} 0.25s ease-in-out forwards`;
  slideAnimations[outName] = `${outName} 0.2s ease-in-out forwards`;

  const translateStart = getTranslateProp(start, multipler);
  const translateEnd = getTranslateProp(end, multipler);

  slideKeyframes[inName] = {
    "0%": { translate: translateStart, opacity: "0" },
    "100%": { translate: translateEnd, opacity: "1" },
  };

  slideKeyframes[outName] = {
    "0%": { translate: translateEnd, opacity: "0" },
    "100%": { translate: translateStart, opacity: "1" },
  };
};

for (let direction of directions) {
  createSlideAnimation(direction.name, direction.start, direction.end);
  createSlideAnimation(direction.name, direction.start, direction.end, 0.75);
  createSlideAnimation(direction.name, direction.start, direction.end, 0.5);
  createSlideAnimation(direction.name, direction.start, direction.end, 0.25);
  createSlideAnimation(direction.name, direction.start, direction.end, 0.1);
  createSlideAnimation(direction.name, direction.start, direction.end, 0.05);
  // Copy paste the above function and change the last param to create a variant
  // For e.g. to make 15% do createSlideAnimation(direction.name, direction.start, direction.end, 0.15);
}

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        paper: "hsl(var(--paper))",
        muted: "hsl(var(--muted))",
        "muted-text": "hsl(var(--muted-text))",
        "light-text": "hsl(var(--light-text))",
        card: "hsl(var(--card))",
        primary: "hsl(var(--primary))",
        border: "hsl(var(--border))",
        "border-light": "hsl(var(--border-light))",
        separator: "hsl(var(--separator))",
        ring: "hsl(var(--ring))",
        accent: "hsl(var(--accent))",
        "scroll-thumb": "hsl(var(--scroll-thumb))",
        invalid: "hsl(var(--invalid))",
        danger: "hsl(var(--danger))",
      },

      animation: {
        fadeIn: "fadeIn 0.25s ease-in-out forwards",
        fadeOut: "fadeOut 0.2s ease-in-out forwards",
        zoomIn: "zoomIn 0.25s ease-in-out forwards",
        zoomOut: "zoomOut 0.2s ease-in-out forwards",
        accordionDown: "accordionDown 0.25s ease-in-out",
        accordionUp: "accordionUp 0.2s ease-in-out",
        collapsibleDown: "collapsibleDown 0.25s ease-in-out",
        collapsibleUp: "collapsibleUp 0.2s ease-in-out",
        ...slideAnimations,
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        zoomIn: {
          "0%": { opacity: "0", scale: "0.85" },
          "100%": { opacity: "1", scale: "1" },
        },
        zoomOut: {
          "100%": { opacity: "0", scale: "0.85" },
          "0%": { opacity: "1", scale: "1" },
        },
        accordionDown: {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        collapsibleDown: {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        collapsibleUp: {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        ...slideKeyframes,
      },
      zIndex: {
        "dialog-backdrop": "49", //Dialog overlay/backdrop. Also applies to Sheet comp.
        dialog: "50", //Dialog portal and the content inside it. Also applies to Sheet comp.
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
