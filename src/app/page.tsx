import BackedBy from "@/components/BackedBy";
import BrandsAndInfo from "@/components/BrandsAndInfo";
import Footer, { Card } from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RewardsCards from "@/components/RewardsCards";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <BrandsAndInfo />
      <RewardsCards />
      <BackedBy />
      <Card />
      <Footer className="mx-auto w-[80%]"/>
    </main>
  );
}
