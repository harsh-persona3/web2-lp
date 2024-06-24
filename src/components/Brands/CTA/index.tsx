"use client";
import CTAButton from "@/components/CTA";
import SheetProvider from "@/components/ui/Sheet";

export default function CTA() {
  return (
    <SheetProvider.Trigger>
      {({ openSheet }) => {
        return (
          <CTAButton
            onClick={openSheet}
            title={"Get in touch"}
            classname={
              "capitalize cursor-pointer pointer-events-auto font-semibold p-1 2xl:py-4 sm:px-8 md:px-12 text-xs sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl bg-[white] "
            }
          ></CTAButton>
        );
      }}
    </SheetProvider.Trigger>
  );
}
