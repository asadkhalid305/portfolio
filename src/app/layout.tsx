import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import Header from "./components/header";
import Chatbot from "./components/chatbot";
import { LayoutProps } from "./utils/types";
import { metadata as metadataContent } from "./utils/constants";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = { ...metadataContent };

const showChatbot = !!process.env.OPENAI_API_KEY;

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="antialiased text-c-dark scroll-smooth lg:subpixel-antialiased ">
        <Header />
        {children}
        <Footer />
        {showChatbot && <Chatbot />}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
