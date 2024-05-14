import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";


const montserrat = Montserrat({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "StyleSavvy",
  description: " Your premier destination for curated fashion finds, blending timeless elegance with contemporary flair, all at your fingertips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${montserrat.className}`}>
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
