import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import BottomNav from "@/organism/BottomNav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Specify the weights you need
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gojo",
  description: "Ethiopian real estate platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${montserrat.className} antialiased h-screen flex flex-col justify-between `}
      >
        <main className="flex-1">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
