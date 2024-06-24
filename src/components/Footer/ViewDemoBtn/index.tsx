"use client";
import CTAButton from "@/components/CTA";
import React from "react";

function ViewDemoBtn() {
  const onBtnClick = () => {
    document.getElementById("demo-container")?.scrollIntoView();
  };

  return (
    <CTAButton
      onClick={onBtnClick}
      title={"View demo"}
      classname={"capitalize pointer-events-auto cursor-none font-semibold p-1 2xl:py-4 sm:px-8 md:px-12 text-xs sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl bg-[white]"}
    ></CTAButton>
  );
}

export default ViewDemoBtn;
