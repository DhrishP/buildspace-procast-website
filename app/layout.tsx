import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Whycurious's Buildspace Blog",
  description: "A place to build my habit of sharing my thoughts and ideas.",
  openGraph: {
    title: "Whycurious's Buildspace Blog",
    description: "A place to build my habit of sharing my thoughts and ideas.",
    url: baseUrl,
    siteName: "Whycurious's Writeups",
    locale: "en_US",
    type: "website",
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
  
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-black text-white",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Link
            href={"https://buildspace.so"}
            className="flex items-center absolute top-2 left-2"
          >
            <Image
              src={"/images/buildspace.png"}
              alt="Buildspace"
              width={50}
              height={50}
            />

            <h4 className="text-blue-400 ">alterok</h4>
          </Link>

          <Navbar />

          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
