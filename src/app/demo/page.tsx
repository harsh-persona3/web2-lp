import ContactFormSheetContainer from "@/components/ContactFormSheetContainer";
import Header from "@/components/Header";
import Cart from "./_components/cart";
import { offers } from "./constants";
import Image from "next/image";
import Offers from "./_components/offers";

export default function Demo() {
  return (
    <ContactFormSheetContainer>
      <Header />
      <div className="text-black flex flex-col gap-8 items-center justify-center bg-gradient-to-tr from-pink-100 via-cyan-100 to-white-200 backdrop-blur-2xl w-full py-32">
        <h1 className="text-black text-5xl max-w-[650px] font-bold text-center">
          Browse best rewarded ads curated just for you
        </h1>
        <section className="flex items-start justify-between w-full px-24 gap-8 max-w-screen-2xl">
          <Cart />
          <Offers />
        </section>
      </div>
    </ContactFormSheetContainer>
  );
}
