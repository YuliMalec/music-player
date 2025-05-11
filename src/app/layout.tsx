import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import {Sidebar} from "@/components/Sidebar";
import { SessionProvider } from "next-auth/react"
import  {ModalProvider}  from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
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
        <NextAuthProvider>
        <ToasterProvider/>
  <ModalProvider/>
    <Sidebar>
      {children}
     </Sidebar>
  </NextAuthProvider>
      </body>
    </html>
  );
}
