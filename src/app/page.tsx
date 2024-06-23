import BackedBy from "@/components/BackedBy";
import BrandsAndInfo from "@/components/BrandsAndInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RewardsCards from "@/components/RewardsCards";
import WinWinWin from "@/components/WinWinWin";
import Cursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="" id="main">
      <Cursor />
      <Header />
      <Hero className="mb-20" />
      <BrandsAndInfo className="mb-20" />
      <BackedBy className="mx-auto w-[80%] mb-20" />
      <RewardsCards className="mx-auto w-[80%] mb-20 mt-40 md:mt-60 lg:mt-72 xl:mt-96 " />
      <WinWinWin className="mx-auto w-[80%] mb-20 mt-40 md:mt-48 lg:mt-52 xl:mt-60 " />
      <Footer className="py-20" />
    </main>
  );
}
