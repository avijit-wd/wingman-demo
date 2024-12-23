import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/top-nav";
import AppSidebar from "@/components/app-sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wingman demo app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  antialiased`}>
        <main className="flex">
          <AppSidebar />

          <div className="flex flex-col w-full">
            <TopNav />
            <div className="p-4 pl-[76px] mt-[80px]">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
