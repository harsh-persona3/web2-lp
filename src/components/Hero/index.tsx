"use client";
import { HTMLAttributes, useContext } from "react";
import AnimatedGrid from "../AnimatedGrid";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import BookADemoBtn from "./BookADemoBtn";
import { SheetContext } from "../ui/Sheet";

interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

export default function Hero(props: HeroProps) {
  const { className, ...rest } = props;
  const { isSheetOpen, side } = useContext(SheetContext) ?? {};

  return (
    <div {...rest} className={twMerge("", className)}>
      <div className={`relative ${isSheetOpen && side === 'right' ? "z-[99]" : "z-20"} mx-auto min-h-[50vw] pt-20 lg:pt-8`}>
        <div className="w-full h-full absolute inset-0 -z-10">
          <AnimatedGrid squareSize={100} gridColor="rgba(0, 0, 0, 0.01)" />
        </div>
        <div className="absolute right-[20%] m-auto w-[20vw] aspect-square rounded-full bg-gradient-to-b from-[#8BFCFF] via-[#8BFCFF] to-[#8BFCFF] blur-[5vw] "></div>
        <div className="absolute left-[15%] top-[50%] m-auto w-[30vw] aspect-square rounded-full bg-gradient-to-b from-[#DFD9FF] via-[#DFD9FF] to-[#FFF3E9] blur-[5vw] "></div>

        <div className="lg:ml-[4%] pointer-events-none flex sm:py-20 py-6 relative z-10 flex-wrap-reverse min-h-[50vw] justify-center items-center gap-8 sm:gap-0">
          <div className="lg:pt-16 lg:px-0 w-1/2 flex-grow px-10 flex flex-col gap-8 justify-center sm:items-start items-center">
            <h1 className="text-center sm:text-left font-bold text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
              World&apos;s only sponsored checkout experience
            </h1>
            <BookADemoBtn />
          </div>
          <div className="w-[80%] sm:w-[50%] lg:-mt-4 aspect-[842/577] border border-black rounded-2xl relative sm:left-[1%] backdrop-blur-sm bg-white/50">
            {/* <Image
              className="absolute sm:-top-[13%] sm:-left-[8.5%] -top-[9%] -left-[6%]"
              src={"/images/cart.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "10vw" }}
              alt="cart"
            /> */}
            <video autoPlay muted playsInline className="rounded-2xl w-full" loop>
            <source src="/videos/demo.webm" type="video/webm"/>
              <source src="/videos/demo.mp4" type="video/mp4"/>
            </video>
            {/* <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="w-full bg-[#D8D8D8] opacity-60 absolute top-[5%] py-1 -z-10">
                <p className="text-xs sm:text-sm md:text-lg relative left-[15%]">https://www.yourshopping.com</p>
              </div>
            </div>
            <Image
              className="absolute bottom-[20%] left-[5%] sm:bottom-[10%]"
              src={"/images/checkout-prev.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "30vw" }}
              alt="cart"
            />
            <div className="absolute bottom-[20%] right-[5%] sm:bottom-[8%] shadow-lg shadow-purple-400 outline rounded-lg md:rounded-[1.4vw] bg-white overflow-hidden">
              <Image
                className=" scale-100 overflow-hidden"
                src={"/images/place-order.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "25vw" }}
                alt="palce order"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
