import { HTMLAttributes } from "react";
import CTAButton from "../CTA";
import Image from "next/image";

interface BrandsProps extends HTMLAttributes<HTMLDivElement> {}

export default function Brands(props: BrandsProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-[50vw] py-16 px-10 relative z-20">
      <div className="hidden sm:block absolute inset-0 top-[40%]">
        <Image
          src="/images/linkedin.png"
          alt="brand"
          className="absolute rounded-xl left-[5%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw", minWidth: "40px" }}
        />
        <Image
          src="/images/alexa.png"
          alt="brand"
          className="absolute rounded-xl top-[33%] left-[10%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw", minWidth: "40px" }}
        />
        <Image
          src="/images/uber.png"
          alt="brand"
          className="absolute rounded-xl top-[66%] left-[20%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw", minWidth: "40px" }}
        />
        <Image
          src="/images/blinkist.png"
          alt="brand"
          className="absolute rounded-xl top-[66%] right-[20%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw", minWidth: "40px" }}
        />
        <Image
          src="/images/uber-eats.png"
          alt="brand"
          className="absolute rounded-xl right-[5%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw", minWidth: "40px" }}
        />
        <Image
          src="/images/amazon.png"
          alt="brand"
          className="absolute rounded-xl top-[33%] right-[10%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw", minWidth: "40px" }}
        />
        <Image
          src="/images/oracle.png"
          alt="brand"
          className="absolute rounded-xl -top-[40%] right-[4%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw", minWidth: "40px" }}
        />
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-black text-center">Surround yourself with great company</h1>
      <p className="relative z-20 text-base sm:text-xl md:text-2xl lg:text-4xl text-black sm:max-w-[70vw] text-center">
        We are trusted by the best. All the brands that keep customers happy. We create win-win-win scenarios.
      </p>
      <CTAButton title="Join Us" classname="font-semibold bg-white text-lg sm:text-xl md:text-2xl sm:px-24 cursor-none sm:py-4 relative z-20" />
    </div>
  );
}
