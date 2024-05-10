import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { LayoutProps } from "./utils/types";
import Chatbot from "./components/chatbot/chatbot";

export const metadata: Metadata = {
  title: "Asad Ullah Khalid - Portfolio",
  description: "This is Asad Ullah Khalid portfolio landing page",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased scroll-smooth text-c-dark">
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
