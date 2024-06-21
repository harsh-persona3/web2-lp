import BackedBy from "@/components/BackedBy";
import BrandsAndInfo from "@/components/BrandsAndInfo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero className="bg-[#FFF3E9]" />
      <BrandsAndInfo />
      <BackedBy />
      <Footer className="bg-[#FFF3E9] py-32" />
    </main>
  );
}
