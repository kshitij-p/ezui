import { JetBrains_Mono as FontMono } from "next/font/google";
import FontSans from "next/font/local";

//Todo add this installation to introduction
export const fontSans = FontSans({
  variable: "--font-sans",
  src: "../../public/fonts/InterVariable.ttf",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
