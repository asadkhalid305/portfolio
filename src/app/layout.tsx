import Footer from "./components/footer";
import Header from "./components/header";
import RootWrapper from "./components/wrapper";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is Asad Ullah Khalid portfolio landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootWrapper>
          <Header />
          {children}
          <Footer />
        </RootWrapper>
      </body>
    </html>
  );
}
