import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Chatbot from "@/app/components/chatbot";
import { LayoutProps } from "@/app/utils/types";
import { metadata as metadataContent } from "@/app/utils/constants";
import "@/app/globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = { ...metadataContent };

const showChatbot = !!process.env.OPENAI_API_KEY;

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en" className={poppins.className + " scroll-smooth"}>
      <body className="antialiased text-c-dark scroll-smooth lg:subpixel-antialiased ">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-c-dark text-c-light px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-c-light"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        {showChatbot && <Chatbot />}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
