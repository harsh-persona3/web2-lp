import { HTMLAttributes } from "react";
import AnimatedGrid from "../AnimatedGrid";
import { twMerge } from "tailwind-merge";
import styles from "./Hero.module.css";

interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

export default function Hero(props: HeroProps) {
  const { className, ...rest } = props;
  return (
    <div {...rest} className={twMerge("", className)}>
      <div className="relative z-10 mx-auto h-[50vw] overflow-hidden">
        <AnimatedGrid squareSize={200} gridColor="rgba(0, 0, 0, 0.04)" />
        <div className="absolute z-20 text-center top-[10%] left-[10%] right-[10%] bottom-[10%]">
          <div className="flex flex-wrap-reverse items-center justify-around mx-auto h-full w-full">
            <div className="w-1/2 flex flex-col">
              <div className="relative w-fit">
                <p className={`text-left uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-[#ACF0F2] inline-block text-transparent bg-clip-text ${styles.textStroke}`}>World’s only</p>
              </div>
              <div className="relative w-fit">
                <p
                  className={`text-left font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-pre-wrap`}
                >
                  sponsored checkout experience
                </p>

                <div className="w-fit mt-3">
                  <button className="capitalize">Book a demo</button>
                </div>
                {/* <div className="absolute z-10 -left-32 -top-32">
                  <svg width="801" height="562" viewBox="0 0 801 562" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.11164 499.432C21.7682 500.373 67.2839 513.26 76.094 557.277C73.1693 567.398 85.0622 535.943 114.822 495.695C161.182 432.996 265.559 341.073 312.188 474.972C398.727 291.629 575.573 -16.3484 590.641 218.488C627.045 156.899 750.041 9.74417 797.371 17.0415M797.371 17.0415L762.259 100.603C766.678 74.9639 797.371 17.0415 797.371 17.0415ZM797.371 17.0415C796.868 9.58543 776.991 -2.80443 701.512 7.28437"
                      stroke="url(#paint0_linear_44_4)"
                      strokeWidth="5.2952"
                    />
                    <defs>
                      <linearGradient id="paint0_linear_44_4" x1="907.5" y1="-28" x2="248.939" y2="411.409" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C071FF" />
                        <stop offset="1" stopColor="#E5E187" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div> */}
              </div>
            </div>
            <div className="w-[30vw] aspect-square bg-gray-300 rounded-3xl"></div>
          </div>
        </div>
        <div className="absolute -z-10 w-[40vw] aspect-square blur-3xl left-48 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full opacity-10 shadow-inner top-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
}
