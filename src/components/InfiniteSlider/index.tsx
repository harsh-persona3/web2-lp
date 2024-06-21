"use client";
// @ts-ignore
import { HorizontalTicker } from "react-infinite-ticker";

export default function InfiniteSlider() {
  return (
    <div className="w-full bg-purple-600 border-b-4 md:border-b-6 lg:border-b-8 py-2 md:py-3 lg:py-4 border-white">
      <HorizontalTicker duration={25000} delay={0} easing="linear">
          <div className="flex flex-row gap-10 pr-10">
              {Array.from({ length: 10 }, (_, i) => (
                <>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl text-lime-200 font-bold">Win</h1>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl text-lime-200 font-bold">-</h1>
                </>
              ))}
          </div>
      </HorizontalTicker>
    </div>
  );
}