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
      },

      animation: {
        fadeIn: "fadeIn 0.25s ease-in-out forwards",
        fadeOut: "fadeOut 0.2s ease-in-out forwards",
        zoomIn: "zoomIn 0.25s ease-in-out forwards",
        zoomOut: "zoomOut 0.2s ease-in-out forwards",
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
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
