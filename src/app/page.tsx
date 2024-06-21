import BackedBy from "@/components/BackedBy";
import BrandsAndInfo from "@/components/BrandsAndInfo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <BrandsAndInfo />
      <BackedBy />
      {/* <Footer className="mx-auto w-[80%]"/> */}
    </main>
  );
}
