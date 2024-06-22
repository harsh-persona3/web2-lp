import BackedBy from "@/components/BackedBy";
import BrandsAndInfo from "@/components/BrandsAndInfo";
import Footer, { Card } from "@/components/Footer";
import Hero from "@/components/Hero";
import RewardsCards from "@/components/RewardsCards";
import Cursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="" id="main">
      <Cursor />
      <Hero />
      <BrandsAndInfo />
      {/* <RewardsCards /> */}
      <BackedBy />
      <Card />
      <Footer className="pt-32 pb-8" />
    </main>
  );
}
