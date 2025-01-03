
import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "@/components/nav/top-nav";
import { ThemeProvider } from "@/context/theme";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenAI",
  description: "Generated by create next app",
  keywords: ["GenAI", "AI Generator", "Website", "Next.js", "Mingxiang Zhang"],
  authors: [{ name: "Mingxiang Zhang" }],
  creator: "Mingxiang Zhang",
  publisher: "Mingxiang Zhang",
  formatDetection:{
    telephone: true,
    email: true,
    address: true
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      
    <html lang="en">
       <head>
        <link rel="icon" href="icon-96.png" />
        <meta charSet="UTF-8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <header>
          <TopNav />
        </header>
       <main>{children}</main>
       </ThemeProvider>
      </body>
    </html>
    
    </ClerkProvider>
    
  );
}
