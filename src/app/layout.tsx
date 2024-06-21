import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

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
      path: "../../public/fonts/Agrandir/Agrandir Grand Light 300.otf",
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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proximaNova.variable} ${agrandir.variable} antialiased`}>{children}</body>
    </html>
  );
}
