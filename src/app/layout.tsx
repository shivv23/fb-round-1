import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "NovaAutomate — AI-Powered Data Automation Platform",
  description:
    "Transform your data workflows with next-generation AI automation. Extract, process, and analyze data at scale with zero manual effort.",
  openGraph: {
    title: "NovaAutomate — AI-Powered Data Automation Platform",
    description:
      "Transform your data workflows with next-generation AI automation. Extract, process, and analyze data at scale with zero manual effort.",
    type: "website",
    siteName: "NovaAutomate",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaAutomate — AI-Powered Data Automation Platform",
    description:
      "Transform your data workflows with next-generation AI automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
