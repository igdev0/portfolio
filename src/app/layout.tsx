import type {Metadata} from "next";
import type {ReactNode} from 'react';
import "./globals.css";
import {Lexend} from "next/font/google";
import {GoogleAnalytics} from '@next/third-parties/google';

export const metadata: Metadata = {
  title: "IGDev's portfolio",
  description: "IGDev's portfolio",
};

const lexend = Lexend({weight: ["600", "400"]});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {

  return (
      <html suppressHydrationWarning lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Default Page title</title>
      </head>
      <body className={`${lexend.className}`}>
      {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? "not set"}/>}
      {children}
      </body>
      </html>
  );
}
