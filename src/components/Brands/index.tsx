import { HTMLAttributes } from "react";
import CTAButton from "../CTA";
import Image from "next/image";

interface BrandsProps extends HTMLAttributes<HTMLDivElement> {}

export default function Brands(props: BrandsProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-10 min-h-[50vw] sm:py-20 py-6 px-10 relative z-20">
      <div className="absolute inset-0 top-[40%]">
        <Image
          src="/images/brand-dunzo.png"
          alt="brand"
          className="absolute rounded-xl left-[5%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw" }}
        />
        <Image
          src="/images/little-gym.png"
          alt="brand"
          className="absolute rounded-xl top-[33%] left-[10%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw" }}
        />
        <Image
          src="/images/rapido.png"
          alt="brand"
          className="absolute rounded-xl top-[66%] left-[20%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw" }}
        />
        <Image
          src="/images/blinkist.png"
          alt="brand"
          className="absolute rounded-xl top-[80%] left-[45%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw" }}
        />
        <Image
          src="/images/play-learn.png"
          alt="brand"
          className="absolute rounded-xl right-[5%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw" }}
        />
        <Image
          src="/images/game-theory.png"
          alt="brand"
          className="absolute rounded-xl top-[33%] right-[10%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw" }}
        />
        <Image
          src="/images/cult.png"
          alt="brand"
          className="absolute rounded-xl top-[66%] right-[20%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw" }}
        />
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-black text-center">Surround yourself with great company</h1>
      <p className="relative z-20 text-xl md:text-2xl lg:text-3xl text-black md:max-w-[700px] lg:max-w-[800px] text-center">
        We are trusted by the best. All the brands that keep customers happy. We create win-win-win scenarios.
      </p>
      <CTAButton title="Join Us" classname="font-semibold bg-white text-lg sm:text-xl md:text-2xl sm:px-24 cursor-none sm:py-4 relative z-20" />
    </div>
  );
}
