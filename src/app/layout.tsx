import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Chatbot from "./components/chatbot/chatbot";
import { LayoutProps } from "./utils/types";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asad Ullah Khalid - Portfolio",
  description: "This is Asad Ullah Khalid portfolio landing page",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="antialiased text-c-dark scroll-smooth lg:subpixel-antialiased ">
        <Header />
        {children}
        <Footer />
        <Chatbot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
