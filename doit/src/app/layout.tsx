import type { Metadata } from "next";
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
    <html lang="en" className="h-full antialiased">
      <body className="w-full bg-(--color-background) min-h-full flex flex-col py-3 sm:px-4 md:px-6 xl:px-[360px]">
        {children}
      </body>
    </html>
  );
}
