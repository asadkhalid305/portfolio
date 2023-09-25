import type { Metadata } from "next";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Asad Ullah Khalid - Portfolio",
  description: "This is Asad Ullah Khalid portfolio landing page",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
