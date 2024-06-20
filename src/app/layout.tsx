import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/constants";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react"

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${site.title} | Software developer `,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NextTopLoader color="#2563eb" showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
