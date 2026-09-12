// Load global styles without requiring TypeScript declarations for the CSS file.
require("../styles/globals.css");
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SpeedInsights />
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
