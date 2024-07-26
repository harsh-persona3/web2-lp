import BackedBy from "@/components/BackedBy";
import BrandsAndInfo from "@/components/BrandsAndInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RewardsCards from "@/components/RewardsCards";
import ContactFormSheetContainer from "@/components/ContactFormSheetContainer";
import WinWinWin from "@/components/WinWinWin";

export default function Home() {
  return (
    <main id="main">
      <ContactFormSheetContainer>
        <Header />
        <Hero className="mb-20" id="demo-container" />
        <BrandsAndInfo className="mb-20" />
        <RewardsCards className="mx-auto w-[80%] mb-10 mt-20 md:mt-20 lg:mt-32 xl:mt-52 " />
        <WinWinWin className="mx-auto w-[80%] mb-8 md:mb-20 mt-24 md:mt-40 lg:mt-32 xl:mt-52 " />
        <Footer className="py-10" />
        <BackedBy className="mx-auto w-[80%] mt-20 mb-10" />
        <div className="pt-4 mx-auto w-[80%] ">
          <hr />
          <p className="my-4 w-fit mx-auto font-agrandir">© 2024 Persona XYZ, Inc</p>
        </div>
      </ContactFormSheetContainer>
    </main>
  );
}
