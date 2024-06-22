"use client";
import { HTMLAttributes } from "react";
import CTAButton from "../CTA";

interface BrandsProps extends HTMLAttributes<HTMLDivElement> {}

export default function Brands(props: BrandsProps) {;

  return (
    <div className={`flex flex-col items-center justify-center gap-10 p-20`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black md:max-w-[600px] lg:max-w-[700px] text-center">Surround yourself with great company</h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-black md:max-w-[700px] lg:max-w-[800px] text-center">We are trusted by the best. All the brands that keep customers happy. We create win-win-win scenarios.</p>
        <CTAButton title='Join Us' classname='font-semibold bg-white text-xl md:text-2xl px-20 cursor-none' />
        <div className="flex flex-row items-center gap-5">
            <img src="/images/brand-dunzo.png" className="w-[100px] rounded-lg"></img>
            <img src="/images/brand-dunzo.png" className="w-[100px] rounded-lg"></img>
            <img src="/images/brand-dunzo.png" className="w-[100px] rounded-lg"></img>
            <img src="/images/brand-dunzo.png" className="w-[100px] rounded-lg"></img>
        </div>
    </div>
  );
}
