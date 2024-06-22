import { HTMLAttributes } from "react";
import AnimatedGrid from "../AnimatedGrid";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

export default function Hero(props: HeroProps) {
  const { className, ...rest } = props;
  return (
    <div {...rest} className={twMerge("", className)}>
      <div className="relative z-10 mx-auto min-h-[50vw]">
        <div className="w-full h-full absolute inset-0 -z-10">
          <AnimatedGrid squareSize={200} gridColor="rgba(0, 0, 0, 0.01)" />
        </div>
        <div className="absolute right-[20%] m-auto w-[20vw] aspect-square rounded-full bg-gradient-to-b from-[#8BFCFF] via-[#8BFCFF] to-[#8BFCFF] blur-[5vw] "></div>
        <div className="absolute left-[15%] top-[50%] m-auto w-[30vw] aspect-square rounded-full bg-gradient-to-b from-[#DFD9FF] via-[#DFD9FF] to-[#FFF3E9] blur-[5vw] "></div>

        <div className="pointer-events-none flex sm:py-20 py-6 relative z-10 flex-wrap-reverse min-h-[50vw] justify-center items-center gap-8 sm:gap-0">
          <div className="mx-auto w-1/2 flex-grow px-10 flex flex-col gap-8 justify-center sm:items-start items-center">
            <h1 className="text-center sm:text-left font-bold text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
              World&apos;s only sponsored checkout experience
            </h1>
            <div>
              <button className="bg-black text-white font-bold sm:px-14 sm:py-5 py-3 px-8 rounded-xl text-base md:text-xl xl:text-3xl pointer-events-auto cursor-none">
                Book a demo
              </button>
            </div>
          </div>
          <div className="w-[60%] sm:w-[50vw] aspect-[842/577] border border-black rounded-2xl relative sm:left-[1%] backdrop-blur-sm bg-white/50">
            <Image
              className="absolute -top-[13%] -left-[8.5%]"
              src={"/images/cart.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "10vw" }}
              alt="cart"
            />
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
