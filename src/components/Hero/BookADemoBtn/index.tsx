"use client";
import SheetProvider from "@/components/ui/Sheet";

export default function BookADemoBtn() {
  return (
    <SheetProvider.Trigger>
      {({ openSheet }) => {
        return (
          <button
            onClick={openSheet}
            className={
              "bg-black outline block outline-black hover:scale-105  hover:bg-gradient-to-l from-[#DFD9FF] via-[#DFD9FF] to-[#FFF3E9] hover:text-black transition-all duration-500 ease-out text-white font-bold sm:px-14 sm:py-5 py-3 px-8 rounded-xl text-base md:text-xl xl:text-3xl pointer-events-auto"
            }
          >
            Get in touch
          </button>
        );
      }}
    </SheetProvider.Trigger>
  );
}
