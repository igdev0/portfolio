import type {Metadata} from "next";
import type {ReactNode} from 'react';
import "./globals.css";
import {Inter} from "next/font/google";
import {GoogleAnalytics} from '@next/third-parties/google';
import {ThemeProvider} from 'next-themes';

export const metadata: Metadata = {
  title: "IGDev | Software Engineer",
  description: "IGDev is a Software Engineer focused on building modern applications and exploring bleeding-edge technologies.",
};

const inter = Inter({weight: ["600", "400"]});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {

  return (
      <html suppressHydrationWarning lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta property="og:image" content="https://dorultanianos.dev/preview.png"/>
        <meta property="og:image:alt" content="IGDev website"/>
        <meta property="og:image:type" content="image/png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={(`${inter.className}`)}>
      <ThemeProvider
          defaultTheme="system"
          enableSystem={true}
          enableColorScheme={true}
      >
        {children}
      </ThemeProvider>
      {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? "not set"}/>}
      </body>
      </html>
  );
}
