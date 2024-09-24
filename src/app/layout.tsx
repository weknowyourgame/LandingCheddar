/* eslint-disable */

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Goldman, Roboto_Mono } from "next/font/google";
import { cn } from "./lib/utils";

const goldman = Goldman({ subsets: ["latin"], weight: ["400"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Cheddar - Blinks, Trade and Stonks",
  description: "Use our bot to make money",
  metadataBase: new URL("https://cheddarbot.io"),
  twitter: {
    card: "summary_large_image",
    site: "https://cheddarbot.io",
    creator: "@cheddarbot", // Update with real Twitter handle
    title: "Cheddarbot",
    description: "",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <head>
        {/* Cloudflare web analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "16d76ebb82c74d9983b71d09ab6617bc"}'
        ></script>
      </head>
        <body
          className={cn(
            `${goldman.className} dark`,
            robotoMono
          )}
        >
          {children}
          {/* <Toaster /> */}
          {/* <PostHogPageView /> */}
        </body>
    </html>
  );
}