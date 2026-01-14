import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Denes Csaszar | Product Owner",
  description:
    "Product Owner with 7+ years experience bridging technical execution and business strategy. Specialized in digital products, e-commerce, and API integrations.",
  keywords: [
    "Product Owner",
    "Product Manager",
    "PSPO",
    "Scrum",
    "Digital Products",
    "E-commerce",
  ],
  authors: [{ name: "Denes Csaszar" }],
  openGraph: {
    title: "Denes Csaszar | Product Owner",
    description:
      "Product Owner bridging technical execution and business strategy",
    type: "website",
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
