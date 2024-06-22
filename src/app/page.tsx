"use client"
import BackedBy from "@/components/BackedBy";
import BrandsAndInfo from "@/components/BrandsAndInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RewardsCards from "@/components/RewardsCards";
import WinWinWin from "@/components/WinWinWin";
import Cursor from "@/components/ui/CustomCursor";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  return (
    <main className="" id="main">
      <Cursor />
      <Header />
      <Hero />
      <BrandsAndInfo />
      <BackedBy />
      <RewardsCards />
      <WinWinWin />
      <Footer className="py-20" />
    </main>
  );
}
