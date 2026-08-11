import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Chatbot from "@/components/chatbot";
import { ScrollToTop } from "@/components/scroll-to-top";
import { LayoutProps } from "@/utils/types";
import metadataData from "@/constants/metadata.json";
import { env } from "@/config/env";
import "@/app/globals.css";
import commonData from "@/constants/common.json";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: metadataData.title,
  description: metadataData.description,
};

// Validate environment on startup
void env;

const showChatbot =
  (!!process.env.OPENAI_API_KEY || !!process.env.OPENROUTER_API_KEY) &&
  process.env.ENABLE_CHATBOT !== "false";

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html
      lang="en"
      className={poppins.className + " scroll-smooth"}
      data-scroll-behavior="smooth"
    >
      <body className="antialiased text-c-dark scroll-smooth lg:subpixel-antialiased ">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only absolute top-2 left-2 z-50 bg-c-dark text-c-light px-4 py-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-c-light"
        >
          {commonData.skipToMain}
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        {showChatbot && <Chatbot />}
        <ScrollToTop hasChatbot={showChatbot} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
