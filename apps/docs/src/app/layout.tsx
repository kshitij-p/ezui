import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/Toast";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import "@/styles/docs.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
