import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Hafizh Fadhl | Portfolio",
  description: "Web Portfolio Hafizh Fadhl Muhammad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${jakarta.variable} font-sora`}>
        <div className="page-content">
          <Header />
          {/* Konten halaman akan dirender di sini */}
          {children}
          <Footer /> {/* Footer akan selalu berada di bawah di setiap halaman */}
        </div>
      </body>
    </html>
  );
}