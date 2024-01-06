import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { links } from "@/lib/data";
import ActiveSectionContextProvider from "@/context/active-section-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ninad | Personal Portfolio",
  description: "powered by N.developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-38`}
      >
        <div className="bg-[#fbe2e3] h-[31.25rem] w-[31.25rem] absolute top-[-6rem] right-[11rem] rounded-full blur-[10rem] -z-10 sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] h-[31.25rem] w-[50rem] absolute top-[-1rem] left-[-35rem] rounded-full blur-[10rem] -z-10 sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header links={links} />
          {children}
        </ActiveSectionContextProvider>
      </body> 
    </html>
  );
}
