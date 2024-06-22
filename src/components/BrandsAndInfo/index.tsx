import { useState } from "react";
import Brands from "../Brands";
import Image from "next/image";

export default function BrandsAndInfo() {

    return (
        <div className="w-full bg-blue bg-gradient-to-b from-white to-white via-cyan-200">
            <Brands />
            <div className="flex flex-col gap-32 px-10 py-10 md:py-20 sm:mt-10 font-agrandir">

              <CheckoutPartnersInfo />
              <AdvertiserInfo />
              <UsersInfo />

            </div>
        </div>
    );

}

function CheckoutPartnersInfo() {

  const [focussed, setFocussed] = useState(false);

  const handleMouseEnter = () => {
    setFocussed(true);
  }

  const handleMouseLeave = () => {
    setFocussed(false);
  }

  return (
    <div className={`flex flex-col min-[840px]:flex-row flex-wrap md:flex-nowrap items-center justify-center gap-10`}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    >
      <div className="w-full min-[840px]:w-1/2 flex items-center justify-center">
        <div className="flex flex-col text-center min-[840px]:text-left items-center min-[840px]:items-start gap-8 w-4/5">
          <div className="max-w-[fit-content] flex-none border border-black z-10 rounded-md bg-opacity-40 bg-[#71FBFF] ">
            <div className={`max-w-[fit-content] py-2 sm:py-4 px-4 bg-[#71FBFF] transition-transform transform border border-black rounded-md ${!focussed?`translate-y-[6px] translate-x-[6px]`:``}`}>
              <p className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold">CHECKOUT PARTNERS</p>
            </div>
          </div>
          <p className="text-2xl md:text-3xl lg:text-[40px] font-bold lg:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px]">
            Grow lifetime revenue at zero cost through Persona’s checkout flywheel!!!
          </p>
          <p className="text-lg md:text-lg lg:text-[26px] lg:leading-[36px] 2xl:text-[32px] 2xl:leading-[46px]">
            Subsidize your user’s checkout all sponsored by Persona’s advertising partners.
          </p>
        </div>
      </div>
      <div className="flex w-3/5 min-[840px]:w-1/2 items-center justify-center">
        <div className="w-full max-[820px]:min-w-[350px] min-[1200px]:w-4/5">
          <Image
            className=""
            src={"/images/info1.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%" }}
            alt="cart"
          />
        </div>
      </div>
    </div>
  );

}

function AdvertiserInfo() {

  const [focussed, setFocussed] = useState(false);

  const handleMouseEnter = () => {
    setFocussed(true);
  }

  const handleMouseLeave = () => {
    setFocussed(false);
  }

  return (
    <div className={`flex flex-col min-[840px]:flex-row-reverse flex-wrap md:flex-nowrap items-center justify-center gap-10`}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    >
      <div className="w-full min-[840px]:w-1/2 flex items-center justify-center">
        <div className="flex flex-col text-center min-[840px]:text-left items-center min-[840px]:items-start gap-8 w-4/5">
          <div className="max-w-[fit-content] flex-none border border-black rounded-md bg-opacity-40 bg-[#A998FF]">
            <div className={`max-w-[fit-content] py-2 sm:py-4 px-4 bg-[#A998FF] transition-transform transform border border-black rounded-md ${!focussed?`translate-y-[6px] translate-x-[-6px]`:``}`}>
              <p className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold">ADVERTISERS</p>
            </div>
          </div>
          <p className="text-2xl md:text-3xl lg:text-[40px] 2xl:text-[46px] font-bold lg:leading-[50px] 2xl:leading-[56px]">
            Target high intent users on the checkout pages of our partner websites.
          </p>
          <p className="text-lg md:text-lg lg:text-[26px] 2xl:text-[32px] lg:leading-[36px] 2xl:leading-[46px]">
            Pay only for conversions, not impressions. A portion of your payment subsidizes the user&apos;s checkout experience on our partner websites—making users love your brand!
          </p>
        </div>
      </div>
      <div className="flex w-3/5 min-[840px]:w-1/2 items-center justify-center">
        <div className="w-full max-[820px]:min-w-[350px] min-[1200px]:w-4/5 ml-20">
          <Image
            className=""
            src={"/images/info2.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "70%" }}
            alt="cart"
          />
        </div>
      </div>
    </div>
  );
}

function UsersInfo() {

  const [focussed, setFocussed] = useState(false);

  const handleMouseEnter = () => {
    setFocussed(true);
  }

  const handleMouseLeave = () => {
    setFocussed(false);
  }

  return (
    <div className={`flex flex-col min-[840px]:flex-row flex-wrap md:flex-nowrap items-center justify-center gap-10`}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    >
      <div className="w-full min-[840px]:w-1/2 flex items-center justify-center">
        <div className="flex flex-col text-center min-[840px]:text-left items-center min-[840px]:items-start gap-8 w-4/5">
          <div className="max-w-[fit-content] flex-none border border-black bg-[#FFB8FF] bg-opacity-40 rounded-md">
            <div className={`max-w-[fit-content] py-2 sm:py-4 px-4 bg-[#FFB8FF] transition-transform transform border border-black rounded-md ${!focussed?`translate-y-[6px] translate-x-[6px]`:``}`}>
              <p className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold">FOR USERS</p>
            </div>
          </div>
          <p className="text-2xl md:text-3xl lg:text-[40px] font-bold lg:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px]">
            Users love us and therefore love you
          </p>
          <p className="text-lg md:text-lg lg:text-[26px] lg:leading-[36px] 2xl:text-[32px] 2xl:leading-[46px]">
            You care about user experience, we get it. Don’t worry, they win, BIG! They receive direct financial rewards without being annoyed.
          </p>
        </div>
      </div>
      <div className="flex w-3/5 min-[840px]:w-1/2 items-center justify-center">
        <div className="w-full max-[820px]:min-w-[350px] min-[1200px]:w-4/5">
          <Image
            className=""
            src={"/images/info3.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%" }}
            alt="cart"
          />
        </div>
      </div>
    </div>
  );
}
