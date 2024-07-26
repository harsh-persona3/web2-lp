
import ContactFormSheetContainer from "@/components/ContactFormSheetContainer";
import Header from "@/components/Header";
import Cart from "./_components/cart";
import { offers } from "./constants";
import Image from "next/image";
import Offers from "./_components/offers";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function Demo() {
  return (
    <ContactFormSheetContainer>
      <Header />
      <div className="text-black flex flex-col gap-8 items-center justify-center  w-full py-32 relative">
        <div className="absolute right-[20%] m-auto w-[40vw] aspect-square rounded-full bg-gradient-to-b from-[#8BFCFF] via-[#8BFCFF] to-[#8BFCFF] blur-[10vw] -top-32"></div>
        <div className="absolute left-[10%] top-[40%] m-auto w-[30vw] aspect-square rounded-full bg-gradient-to-b from-[#DFD9FF] via-[#DFD9FF] to-[#FFF3E9] blur-[5vw] "></div>

        <h1 className="text-black text-5xl max-w-[650px] font-bold text-center z-10">
          Browse best rewarded ads curated just for you
        </h1>
        <section className="z-10 flex items-start justify-between w-full px-24 gap-8 max-w-screen-2xl">
          <Suspense>
            <Cart />
          </Suspense>
          <Offers />
        </section>
      </div>
    </ContactFormSheetContainer>
  );
}
