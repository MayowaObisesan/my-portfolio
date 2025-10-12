import {Sidebar} from "@/components/Sidebar";
import type {Metadata} from "next";
import Script from "next/script";
import {Inter} from "next/font/google";
import {twMerge} from "tailwind-merge";
import {Footer} from "@/components/Footer";
import {ThemeProvider} from "@/components/theme-provider";
import "./globals.css";
import {ThemeSwitch} from "@/components/ThemeSwitch";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mayowa Obisesan - Developer",

  description:
    "Mayowa Obisesan is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely."
};

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head><title></title></head>
    <body
      className={twMerge(
        inter.className,
        "flex antialiased h-screen overflow-hidden"
      )}
    >
    <Script
      src="https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js"
      strategy="afterInteractive"
    />
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Sidebar/>
      <div className="lg:pl-2 lg:pt-2 flex-1 overflow-y-auto dark:bg-secondary/40">
        <div
          className="flex-1 min-h-screen lg:rounded-tl-xl overflow-y-auto">
          {children}
          <Footer/>
        </div>
        <div className={'absolute right-8 top-4'}>
          <ThemeSwitch />
        </div>
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}
