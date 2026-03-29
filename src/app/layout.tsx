import type { Metadata } from "next";
import {
  PrefetchCrossZoneLinks,
  PrefetchCrossZoneLinksProvider,
} from "@vercel/microfrontends/next/client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/_providers/Providers";
import Header from "@/_components/Header/Header";
import Footer from "@/_components/Footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";

// export const fetchCache = "default-cache";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
          className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
        >
          <Providers>
            <PrefetchCrossZoneLinksProvider>
              <Header />
              <main className="bg-background flex min-h-full grow flex-col">
                {children}
              </main>
              <Footer />
            </PrefetchCrossZoneLinksProvider>
            <PrefetchCrossZoneLinks />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
