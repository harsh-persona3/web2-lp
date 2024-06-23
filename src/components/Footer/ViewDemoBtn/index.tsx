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
      classname={"capitalize pointer-events-auto cursor-none font-semibold p-1 sm:px-8 md:px-12 text-xs sm:text-xl md:text-2xl bg-[white]"}
    ></CTAButton>
  );
}

export default ViewDemoBtn;
