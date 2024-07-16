import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
  variable: "--font-inter"
})


const proximaNova = localFont({
  src: [
    {
      path: "../../public/fonts/ProximaNova/proximanova_light.otf",
      weight: "300"
    },
    {
      path: "../../public/fonts/ProximaNova/proximanova_regular.ttf",
      weight: "400"
    },
    {
      path: "../../public/fonts/ProximaNova/proximanova_bold.otf",
      weight: "700"
    },
    {
      path: "../../public/fonts/ProximaNova/proximanova_extrabold.otf",
      weight: "800"
    },
    {
      path: "../../public/fonts/ProximaNova/proximanova_black.otf",
      weight: "900"
    }
  ],
  variable: '--font-proxima-nova'
});

const agrandir = localFont({
  src: [
    {
      path: "../../public/fonts/Agrandir/Agrandir Wide Light 300.otf",
      weight: "300"
    },
    {
      path: "../../public/fonts/Agrandir/Agrandir Regular 400.otf",
      weight: "400"
    },
    {
      path: "../../public/fonts/Agrandir/Agrandir Text Bold 700.otf",
      weight: "700"
    },
    {
      path: "../../public/fonts/Agrandir/Agrandir Grand Heavy 800.otf",
      weight: "800"
    },
  ],
  variable: '--font-agrandir'
})

export const metadata: Metadata = {
  title: "Persona",
  description: "World's only sponsored checkout experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId='G-PE3YEB5600'/>
      <body className={`${proximaNova.variable} ${agrandir.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
