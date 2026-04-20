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
  title: {
    default: "Mayowa Obisesan - Developer",
    template: "%s | Mayowa Obisesan",
  },
  description:
    "Mayowa Obisesan is a full-stack developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
  keywords: [
    "developer",
    "full-stack",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "software engineer",
    "frontend engineer",
    "web developer",
    "digital nomad",
  ],
  authors: [{ name: "Mayowa Obisesan", url: "https://amtheblessed.vercel.app" }],
  creator: "Mayowa Obisesan",
  publisher: "Mayowa Obisesan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amtheblessed.vercel.app",
    siteName: "Mayowa Obisesan",
    title: "Mayowa Obisesan - Developer",
    description:
      "Mayowa Obisesan is a full-stack developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
    images: [
      {
        url: "/images/my_profile_picture_blurred.jpg",
        width: 1200,
        height: 630,
        alt: "Mayowa Obisesan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayowa Obisesan - Developer",
    description:
      "Mayowa Obisesan is a full-stack developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
    images: ["/images/my_profile_picture_blurred.jpg"],
    creator: "@amdblessed",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://amtheblessed.vercel.app",
  },
};

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mayowa Obisesan",
            url: "https://amtheblessed.vercel.app",
            jobTitle: "Full-Stack Developer",
            sameAs: [
              "https://github.com/MayowaObisesan",
              "https://x.com/amdblessed",
              "https://linkedin.com/in/mayowa-obisesan",
              "https://youtube.com/@iamaprogrammer01",
              "https://t.me/amtheblessed",
            ],
            worksFor: {
              "@type": "Organization",
              name: "Self-employed",
            },
            knowsAbout: [
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Full-Stack Development",
            ],
          }),
        }}
      />
    </head>
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
