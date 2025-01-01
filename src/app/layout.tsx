import type {Metadata} from "next";
import {Klee_One, Kode_Mono} from "next/font/google";
import "./globals.scss";
import {ThemeProvider} from 'next-themes';
import Globe from '@/app/components/globe/globe';
import AppContextProvider from '@/app/context';
import Navbar from '@/app/components/navbar/navbar';

export const metadata: Metadata = {
  title: "IGDev's portfolio",
  description: "My personal portfolio website",
};

const klee = Klee_One({weight: ["600", "400"], subsets: ["latin", "cyrillic"]});
const kode = Kode_Mono({weight: ["600", "400"], subsets: ['latin', 'latin-ext']});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html suppressHydrationWarning lang="en">
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body className={`${klee.className} ${kode.className}`}>
    <AppContextProvider>
      <ThemeProvider>
        <Navbar/>
        <Globe>
          <div className="page">
            {children}
          </div>
        </Globe>
      </ThemeProvider>
      </AppContextProvider>
      </body>
    </html>
  );
}
