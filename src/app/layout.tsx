import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import {Sidebar} from "@/components/Sidebar";
import { Main } from "@/components/Main";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music-Player",
  description: "Enjoy the music!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
       
    <Sidebar>
      {children}
     </Sidebar>
   
      </body>
    </html>
  );
}
