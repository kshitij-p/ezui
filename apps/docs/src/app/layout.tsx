import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/Toast";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import "@/styles/docs.css";
import { Sidebar } from "@/components/Sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn("font-sans", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="flex px-6 py-8 md:gap-2 xl:gap-6">
            <Sidebar />
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
