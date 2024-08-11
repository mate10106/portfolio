import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Máté",
  description: "Portolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/Mate.png" type="image/x-icon" />
      <body className={inter.className}>
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </body>
    </html>
  );
}
