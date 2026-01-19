"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <Script
      defer
      data-domain="denescsaszar-portfolio.vercel.app"
      src="https://plausible.io/js/script.js"
    />
  );
}
