import Providers from "@/_providers/Providers";
import {
  PrefetchCrossZoneLinks,
  PrefetchCrossZoneLinksProvider,
} from "@vercel/microfrontends/next/client";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import SpinnerComponent from "@/_components/general/SpinnerComponent";

// export const fetchCache = "default-cache";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // match your design system
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Learnify",
    default: "Learnify",
  },
  description: "Welcome to Learnify",
  icons: {
    icon: "/icons8-learning-32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} flex h-screen min-h-screen flex-col font-sans antialiased`}
      >
        <Suspense fallback={<SpinnerComponent />}>
          <Providers>
            <PrefetchCrossZoneLinksProvider>
              {children}
            </PrefetchCrossZoneLinksProvider>
            <PrefetchCrossZoneLinks />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
