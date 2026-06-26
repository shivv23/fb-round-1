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

const SITE_URL = 'https://fb-round-1.vercel.app';

export const metadata: Metadata = {
  title: "NovaAutomate — AI-Powered Data Automation Platform",
  description:
    "Transform your data workflows with next-generation AI automation. Extract, process, and analyze data at scale with zero manual effort.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NovaAutomate — AI-Powered Data Automation Platform",
    description:
      "Transform your data workflows with next-generation AI automation. Extract, process, and analyze data at scale with zero manual effort.",
    url: '/',
    type: "website",
    siteName: "NovaAutomate",
    locale: "en_US",
    images: [{
      url: '/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'NovaAutomate — AI-Powered Data Automation Platform',
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaAutomate — AI-Powered Data Automation Platform",
    description:
      "Transform your data workflows with next-generation AI automation.",
    images: ['/og-image.svg'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'SoftwareApplication',
                  name: 'NovaAutomate',
                  applicationCategory: 'BusinessApplication',
                  operatingSystem: 'Web',
                  description: 'AI-powered data automation platform for extracting, processing, and analyzing data at scale.',
                  url: SITE_URL,
                  offers: {
                    '@type': 'Offer',
                    price: '29',
                    priceCurrency: 'USD',
                  },
                },
                {
                  '@type': 'Organization',
                  name: 'NovaAutomate',
                  url: SITE_URL,
                  description: 'Next-generation AI-powered data automation platform.',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
