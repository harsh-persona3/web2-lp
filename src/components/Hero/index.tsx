import { HTMLAttributes } from "react";
import AnimatedGrid from "../AnimatedGrid";
import { twMerge } from "tailwind-merge";

interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

export default function Hero(props: HeroProps) {
  const { className, ...rest } = props;
  return (
    <div {...rest} className={twMerge("", className)}>
      <div className="relative z-10 mx-auto h-screen overflow-hidden">
        <AnimatedGrid squareSize={200} gridColor="rgba(255, 255, 255, 0.09)" />
        <div className="absolute z-20 text-center top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="relative w-fit">
            <div className="absolute z-10 -left-96">
              <svg width="401" height="179" viewBox="0 0 401 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.755252 150.24C25.9028 49.4085 93.656 -100.34 163.488 107.32C205.128 203.486 231.622 192.29 288.844 113.977C313.023 80.8864 342.226 36.6051 398.905 63.6765"
                  stroke="url(#paint0_linear_44_7)"
                  strokeWidth="5.2952"
                />
                <defs>
                  <linearGradient id="paint0_linear_44_7" x1="370.416" y1="100.548" x2="15.9761" y2="185.4" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D8D195" />
                    <stop offset="1" stopColor="#9B8A8A" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
              Grow Revenue
            </p>
          </div>
          <div className="relative">
            <p className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap">Boost Conversions</p>
            <p className="font-normal text-2xl sm:text-3xl md:text-4xl">
              Build loyalty. Add Value. Zero-risk strategies users cannot resist. All with simple integration.
            </p>
            <div className="mx-auto w-fit mt-3">
              <button className="capitalize">Book a demo</button>
            </div>
            <div className="absolute z-10 left-48 -top-32">
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
            </div>
          </div>
        </div>
        <div className="absolute -z-10 w-[40vw] aspect-square blur-3xl left-48 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full opacity-10 shadow-inner top-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
}