import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";

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
        {/*
          Immediately stamp `loading` onto <html> before React hydrates
          so .page-content stays hidden while the loading screen plays.
          Fallback timeout removes it after 12 s in case JS stalls.
        */}
        <script dangerouslySetInnerHTML={{ __html: `
          document.documentElement.classList.add('loading');
          setTimeout(function(){
            if(!document.documentElement.classList.contains('page-loaded')){
              document.documentElement.classList.remove('loading');
              document.documentElement.classList.add('page-loaded');
            }
          }, 12000);
        `}} />
        <LoadingScreen />
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