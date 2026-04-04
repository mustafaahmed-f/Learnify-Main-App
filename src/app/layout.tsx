import Footer from "@/_components/Footer/Footer";
import Header from "@/_components/Header/Header";
import Providers from "@/_providers/Providers";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
import {
  PrefetchCrossZoneLinks,
  PrefetchCrossZoneLinksProvider,
} from "@vercel/microfrontends/next/client";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

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
    <ClerkProvider
      appearance={{ baseTheme: shadcn }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body
          className={`${manrope.variable} ${inter.variable} flex min-h-screen flex-col font-sans antialiased`}
        >
          <Providers>
            <PrefetchCrossZoneLinksProvider>
              {children}
            </PrefetchCrossZoneLinksProvider>
            <PrefetchCrossZoneLinks />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
