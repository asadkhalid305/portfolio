import type { Metadata } from "next";
import { ChildrenProps } from "@/util/types";
import Footer from "./components/footer";
import Header from "./components/header";
import RootWrapper from "./components/wrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asad Ullah Khalid - Portfolio",
  description: "This is Asad Ullah Khalid portfolio landing page",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className="antialiased">
        <RootWrapper>
          <Header />
          {children}
          <Footer />
        </RootWrapper>
      </body>
    </html>
  );
}
