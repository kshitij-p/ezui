import { JetBrains_Mono as FontMono } from "next/font/google";
import FontSans from "next/font/local";

export const fontSans = FontSans({
  variable: "--font-sans",
  src: "../../public/fonts/InterVariable.ttf",
});

//Todo add install this properly
export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
