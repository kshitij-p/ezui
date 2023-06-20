/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "muted-text": "hsl(var(--muted-text))",
        primary: "hsl(var(--primary))",
        border: "hsl(var(--border))",
        "border-light": "hsl(var(--border-light))",
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

        slideInLeft: "slideInLeft 0.25s ease-in-out forwards",
        slideOutLeft: "slideOutLeft 0.2s ease-in-out forwards",

        slideInRight: "slideInRight 0.25s ease-in-out forwards",
        slideOutRight: "slideOutRight 0.2s ease-in-out forwards",

        slideInTop: "slideInTop 0.25s ease-in-out forwards",
        slideOutTop: "slideOutTop 0.2s ease-in-out forwards",

        slideInBottom: "slideInBottom 0.25s ease-in-out forwards",
        slideOutBottom: "slideOutBottom 0.2s ease-in-out forwards",
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

        slideInLeft: {
          "0%": { translate: "-101% 0%", opacity: "0" },
          "100%": { translate: "0% 0%", opacity: "1" },
        },
        slideOutLeft: {
          "100%": { translate: "-101% 0%", opacity: "1" },
          "0%": { translate: "0% 0%", opacity: "0" },
        },

        slideInRight: {
          "0%": { translate: "101% 0%", opacity: "0" },
          "100%": { translate: "0% 0%", opacity: "1" },
        },
        slideOutRight: {
          "100%": { translate: "101% 0%", opacity: "1" },
          "0%": { translate: "0% 0%", opacity: "0" },
        },

        slideInTop: {
          "0%": { translate: "0% -101%", opacity: "0" },
          "100%": { translate: "0% 0%", opacity: "1" },
        },
        slideOutTop: {
          "100%": { translate: "0% -101%", opacity: "1" },
          "0%": { translate: "0% 0%", opacity: "0" },
        },

        slideInBottom: {
          "0%": { translate: "0% 101%", opacity: "0" },
          "100%": { translate: "0% 0%", opacity: "1" },
        },
        slideOutBottom: {
          "100%": { translate: "0% 101%", opacity: "1" },
          "0%": { translate: "0% 0%", opacity: "0" },
        },
      },
      zIndex: {
        "dialog-backdrop": 49, //Dialog overlay/backdrop. Also applies to Sheet comp.
        dialog: 50, //Dialog portal and the content inside it. Also applies to Sheet comp.
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
