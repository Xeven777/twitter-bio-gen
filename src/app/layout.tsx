import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Metadata } from "next";

const bric = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Twitter Bio Generator",
  description:
    "Generate your perfect Twitter bio with the help of AI. Just answer a few questions and let our AI craft a bio that truly represents you",
  metadataBase: new URL("https://twitter-ai-bio.vercel.app"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          bric.className,
          "min-h-svh relative h-full w-full bg-background"
        )}
      >
        <ThemeProvider attribute="class">
          <div className="absolute invisible dark:visible bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
