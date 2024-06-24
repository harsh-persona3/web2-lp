"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import SheetProvider from "../ui/Sheet";
import useWindowSize from "@/hooks/useWindowSize";
import ContactForm from "../ContactForm";
import Image from "next/image";

export default function ContactFormSheetContainer(props: PropsWithChildren) {
  const { width } = useWindowSize();
  const [side, setSide] = useState<"right" | "bottom">("right");

  const [formStep, setFormStep] = useState(0);

  useEffect(() => {
    if (width >= 768) {
      setSide("right");
    } else {
      setSide("bottom");
    }
  }, [width]);

  const onSubmitSuccess = () => {
    setFormStep(1);
  };

  return (
    <SheetProvider side={side}>
      {props.children}
      <SheetProvider.Content
        className={`${
          side === "right"
            ? "top-0 right-0 rounded-tl-2xl rounded-bl-2xl min-h-screen"
            : "left-0 bottom-0 right-0 rounded-tl-2xl rounded-tr-2xl max-h-[calc(100vh-20%)] overflow-auto"
        } bg-white  duration-500`}
      >
        {() => {
          return formStep === 0 ? <ContactForm className="p-16 h-screen md:w-[50vw] overflow-auto" onSubmitSuccess={onSubmitSuccess} /> : <SuccessFeedback />;
        }}
      </SheetProvider.Content>
    </SheetProvider>
  );
}

const SuccessFeedback = () => {
  return (
    <div className={`flex flex-col gap-10 md:w-[50vw] overflow-auto p-16`}>
      <div className="group w-fit relative bg-transparent">
        <div className="relative z-20 py-2 px-4 bg-transparent outline rounded-sm">
          <p className="invisible uppercase whitespace-nowrap text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold">Get in touch</p>
        </div>
        <div className="absolute left-2 top-2 py-2 px-4 bg-[#71FBFF] transition-all transform group-hover:left-0 group-hover:top-0 rounded-sm">
          <p className="uppercase whitespace-nowrap text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold">Get in touch</p>
        </div>
      </div>

      <div className="flex gap-4 flex-col animate-in slide-in-from-bottom-8 fade-in-5 duration-300 ease-in">
        <div className="flex gap-2 items-center flex-wrap">
          <p className="text-3xl md:text-3xl lg:text-4xl font-bold">
            Thanks for being <br />
          </p>
          <div className="flex gap-2">
            <p className="text-3xl md:text-3xl lg:text-4xl font-bold">awesome!</p>
            <Image className="" src={"/images/heart-bubble.png"} width={40} height={40} alt="thanks" />
          </div>
        </div>
        <p className="text-3xl md:text-3xl">We&apos;ve received your message and look forward to reaching you out.</p>
      </div>
    </div>
  );
};
