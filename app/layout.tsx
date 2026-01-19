import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://denescsaszar-portfolio.vercel.app"),
  title: {
    default: "Denes Csaszar | Project Manager",
    template: "%s | Denes Csaszar",
  },
  description:
    "Project Manager with 7+ years experience bridging technical execution and business strategy. Specialized in digital products, e-commerce, and API integrations. Partnered with Google, Apple, Amazon, and Deutsche Bank.",
  keywords: [
    "Project Manager",
    "Product Manager",
    "PSPO",
    "Scrum",
    "Digital Products",
    "E-commerce",
    "API Integration",
    "Agile",
    "Berlin",
    "Denes Csaszar",
  ],
  authors: [
    { name: "Denes Csaszar", url: "https://denescsaszar-portfolio.vercel.app" },
  ],
  creator: "Denes Csaszar",
  publisher: "Denes Csaszar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://denescsaszar-portfolio.vercel.app",
    title: "Denes Csaszar | Project Manager",
    description:
      "Project Manager bridging technical execution and business strategy. 7+ years experience with Google, Apple, Amazon, Deutsche Bank.",
    siteName: "Denes Csaszar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denes Csaszar | Project Manager",
    description:
      "Project Manager bridging technical execution and business strategy",
    creator: "@denescsaszar", // Add your Twitter handle if you have one, or remove this line
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
  verification: {
    // Add Google Search Console verification later
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
