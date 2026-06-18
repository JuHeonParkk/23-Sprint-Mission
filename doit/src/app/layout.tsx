import type { Metadata } from "next";

import Header from "@/components/common/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "do it ;",
  description: "할 일 관리",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="w-full min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
