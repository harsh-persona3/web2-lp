"use client";

import Image from "next/image";
import { offers } from "../constants";
import styles from "./styles.module.css";
import OfferModal from "./offer-modal";
import { useState } from "react";

export default function Offers() {
  const [open, setOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState({});
  const onClickOffer = (partnerData: any) => {
    setSelectedPartner({ ...partnerData });
    setOpen(true);
  };
  return (
    <>
      <div className=" flex flex-col items-center justify-center max-w-[2/3] w-full">
        <div className="w-full relative bg-transparent">
          <div className="relative z-20 py-2 px-4 bg-transparent outline rounded-sm w-full">
            <p className="invisible whitespace-nowrap uppercase text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold w-full">
              Offers For you
            </p>
          </div>
          <div className="absolute left-0 top-0 md:left-1 md:top-1 py-2 px-4 bg-[#A998FF] transition-all transform group-hover:left-0 group-hover:top-0 rounded-sm w-full">
            <p className="uppercase whitespace-nowrap text-center text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold">
              Offers For you
            </p>
          </div>
        </div>
        <div className="md:h-[550px] w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 mt-8">
          {offers.map((item) => {
            return (
              <div
                key={item.label}
                className={`size-full md:py-0 py-4 flex flex-col gap-4 items-center justify-center border-2 border-black rounded-xl relative overflow-hidden`}
              >
                <div className={styles.gradientOverlay}></div>
                <Image
                  src={item.bgSrc}
                  alt={item.label}
                  fill
                  className="object-cover filter z-0"
                />
                <div className="z-10 size-full flex flex-col gap-4 items-center justify-center">
                  <Image
                    src={item.logo}
                    height={70}
                    width={190}
                    alt={`${item.label}`}
                  />
                  <p className="text-lg font-semibold text-center mx-12 text-white">
                    {item.content}
                  </p>
                  <button
                    className={`bg-white rounded-lg p-3 uppercase font-bold`}
                    style={{
                      color: `#${item.accent}`
                    }}
                    onClick={() => onClickOffer(item)}
                  >
                    CLAIM OFFER
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <OfferModal open={open} setOpen={setOpen} partnerData={selectedPartner} />
    </>
  );
}
