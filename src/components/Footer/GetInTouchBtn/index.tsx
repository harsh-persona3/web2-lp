"use client";
import ContactForm from "@/components/ContactForm";
import CTAButton from "@/components/CTA";
import SheetProvider from "@/components/ui/Sheet";

export default function GetInTouchBtn() {
  return (
    <SheetProvider side="right">
      <SheetProvider.Trigger>
        {({ openSheet }) => {
          return (
            <CTAButton
              onClick={openSheet}
              title={"Get in touch"}
              classname={"capitalize pointer-events-auto cursor-none font-semibold p-1 sm:px-8 md:px-12 text-xs sm:text-xl md:text-2xl bg-[#CBC1FF]"}
            ></CTAButton>
          );
        }}
      </SheetProvider.Trigger>
      <SheetProvider.Content className="bg-white min-h-screen top-0 right-0 duration-500 rounded-tl-2xl rounded-bl-2xl">
        {() => {
          return <ContactForm className="p-16 h-screen" />;
        }}
      </SheetProvider.Content>
    </SheetProvider>
  );
}
