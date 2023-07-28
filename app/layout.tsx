import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/containers/Header";
import Content from "../components/Content";
import Navbar from "@/containers/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kommina Tour & Travel",
  description: "Hassle Free Online Travel Booking Platform",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Content>
          <Header />
        </Content>
        <Navbar />
        <div className="mb-5"></div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
