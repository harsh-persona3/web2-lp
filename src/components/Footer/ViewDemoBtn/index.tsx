"use client";
import CTAButton from "@/components/CTA";
import { useRouter } from "next/navigation";
import React from "react";


function ViewDemoBtn() {
  const router = useRouter();
  const onBtnClick = () => {
    router.push('https://demo.personapay.ai');
  };

  return (
    <CTAButton
      onClick={onBtnClick}
      title={"View demo"}
      classname={"capitalize cursor-pointer pointer-events-auto font-semibold p-1 2xl:py-4 sm:px-8 md:px-12 text-xs sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl bg-[white]"}
    ></CTAButton>
  );
}

export default ViewDemoBtn;
