import { HTMLAttributes } from "react";
import AnimatedGrid from "../AnimatedGrid";
import { twMerge } from "tailwind-merge";

interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

export default function Hero(props: HeroProps) {
  const { className, ...rest } = props;
  return (
    <div {...rest} className={twMerge("", className)}>
      <div className="relative z-10 max-w-[80%] mx-auto h-screen">
        <AnimatedGrid squareSize={200} />
        <div className="absolute z-20 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            Grow Revenue
          </p>
          <p className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap">Boost Conversions</p>
          <p className="font-normal text-2xl sm:text-3xl md:text-4xl">
            Build loyalty. Add Value. Zero-risk strategies users cannot resist. All with simple integration.
          </p>
          <div className="mx-auto w-fit mt-3">
            <button className="capitalize">Book a demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

