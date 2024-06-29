import { HTMLAttributes } from "react";
import Brands from "../Brands";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function BrandsAndInfo(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div
      className={twMerge(
        `w-full bg-blue bg-gradient-to-b from-white to-white via-cyan-200`,
        className
      )}
      {...rest}
    >
      <Brands className="mx-10" />
      <div className="flex flex-col gap-16 sm:gap-32 px-6 md:mx-auto md:w-[85%] w-full">
        <CheckoutPartnersInfo />
        <AdvertiserInfo />
        <UsersInfo />
      </div>
    </div>
  );
}

function CheckoutPartnersInfo() {
  return (
    <div
      className="flex items-center justify-between lg:gap-20 gap-10 flex-wrap pt-[80px]"
      id="checkout-partners"
    >
      <div className="w-full group lg:w-[40%] flex flex-col text-left sm:items-start lg:gap-8 gap-4 items-center">
        <div className="w-fit relative bg-transparent">
          <div className="relative z-20 py-2 px-4 bg-transparent outline rounded-sm">
            <p className="invisible uppercase whitespace-nowrap text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold">
              CHECKOUT PARTNERS
            </p>
          </div>
          <div className="absolute left-0 top-0 md:left-2 md:top-2 py-2 px-4 bg-[#71FBFF] transition-all transform group-hover:left-0 group-hover:top-0 rounded-sm">
            <p className="uppercase whitespace-nowrap text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold">
              CHECKOUT PARTNERS
            </p>
          </div>
        </div>

        <p className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center md:text-left">
          Grow lifetime revenue at zero cost through Persona’s checkout flywheel
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-center md:text-left">
          Subsidize your user’s checkout all sponsored by Persona’s advertising
          partners.
        </p>
      </div>
      <div className="w-full lg:w-[50%] aspect-[584/458]">
        <Image
          src={"/images/info1.png"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%" }}
          alt="lifetime revenue"
        />
      </div>
    </div>
  );
}

function AdvertiserInfo() {
  return (
    <div
      className="flex flex-row-reverse items-start justify-between lg:gap-20 gap-10 flex-wrap pt-[80px]"
      id="advertisers"
    >
      <div className="w-full group lg:w-[50%] flex flex-col text-left sm:items-start lg:gap-8 gap-4 items-center">
        <div className="w-fit relative bg-transparent">
          <div className="relative z-20 py-2 px-4 bg-transparent outline rounded-sm">
            <p className="invisible whitespace-nowrap uppercase text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold">
              Advertisers
            </p>
          </div>
          <div className="absolute left-0 top-0 md:left-2 md:top-2 py-2 px-4 bg-[#A998FF] transition-all transform group-hover:left-0 group-hover:top-0 rounded-sm">
            <p className="uppercase whitespace-nowrap text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold">
              Advertisers
            </p>
          </div>
        </div>
        <p className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center md:text-left">
          Target high intent users on the checkout pages of our premium partners
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-justify md:text-left">
          Pay only for conversions, not impressions. A portion of your payment
          subsidizes the user&apos;s checkout experience on partner websites and
          apps.
        </p>
      </div>
      <div className="w-[60%] md:w-[50%] lg:w-[40%] mx-auto lg:mx-0 flex justify-center">
        <Image
          className="lg:w-2/3 w-full"
          src={"/images/info2.png"}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="rewards on checkout"
        />
      </div>
    </div>
  );
}

function UsersInfo() {
  return (
    <div className="flex items-start justify-between lg:gap-20 gap-10 flex-wrap pt-[80px]">
      <div className="w-full group lg:w-[40%] flex flex-col text-left sm:items-start lg:gap-8 gap-4 items-center">
        <div className="w-fit relative bg-transparent">
          <div className="relative z-20 py-2 px-4 bg-transparent outline rounded-sm">
            <p className="invisible whitespace-nowrap uppercase text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold">
              For users
            </p>
          </div>
          <div className="absolute left-0 top-0 md:left-2 md:top-2 py-2 px-4 w-full bg-[#FFB8FF] transition-all transform group-hover:left-0 group-hover:top-0 rounded-sm">
            <p className="uppercase whitespace-nowrap text-lg text-center md:text-xl lg:text-2xl 2xl:text-4xl font-bold">
              Users
            </p>
          </div>
        </div>
        <p className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-justify md:text-left">
          Users love us and therefore love you
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-justify md:text-left">
          You care about user experience, we get it. Don’t worry, they win, BIG!
          They receive direct financial rewards without being annoyed.
        </p>
      </div>
      <div className="w-full lg:w-[50%] aspect-[584/458]">
        <Image
          className=""
          src={"/images/info3.png"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%" }}
          alt="user rewards"
        />
      </div>
    </div>
  );
}
