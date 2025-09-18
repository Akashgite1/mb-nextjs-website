import Script from "next/script";
import type { Metadata } from "next";
import AnnouncementBanner from "@/components/announcementBanner/AnnouncementBanner";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Next.js Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex flex-col min-h-screen"
      >
        <AnnouncementBanner />
        <Header />
        <main className="flex-1 pl-6 pr-6 pb-6 bg-gray-50">{children}</main>
        <Footer />

        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VCG38PGCFN"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VCG38PGCFN');
          `}
        </Script>
      </body>
    </html>
  );
}
