import { HTMLAttributes } from "react";
import styles from "./Footer.module.css";
import CTAButton from "../CTA";
import Image from "next/image";
interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export default function Footer(props: FooterProps) {
  const { ...rest } = props;
  return (
    <div {...rest}>
      <div className="mx-auto w-[80%]">
        <div className="my-32"></div>
        <p className="text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">We are changing advertising for the benefit of ALL</p>
        <p className="mt-5 text-center font-normal font-agrandir text-lg sm:text-xl md:text-2xl">
          At Persona, we are passionate about helping businesses achieve explosive growth through scalable and innovative financial incentives. Let us show you
          what sets us apart.
        </p>
        <div className="flex gap-8 mx-auto w-fit mt-10">
          <CTAButton
            title={"Get in touch"}
            classname={"capitalize pointer-events-auto font-semibold p-1 sm:px-8 md:px-12 text-xs sm:text-xl md:text-2xl bg-[#CBC1FF]"}
          ></CTAButton>
          <CTAButton
            title={"View demo"}
            classname={"capitalize pointer-events-auto font-semibold p-1 sm:px-8 md:px-12 text-xs sm:text-xl md:text-2xl bg-[#FFF3E9]"}
          ></CTAButton>
        </div>
      </div>
    </div>
  );
}

export const Card = () => {
  return (
    <div className="p-10 bg-[#CBC0FF] rounded-2xl flex flex-col gap-10 items-center border border-black w-4/5 mx-auto">
      <h1
        className={`bg-[#FFFFFF] text-white font-extrabold inline-block text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${styles.textStroke}`}
      >
        Win - Win - Win
      </h1>
      <div className="flex items-center justify-evenly w-full gap-4 font-agrandir text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
        <div className="w-[33%] flex flex-col items-center text-center justify-start gap-10">
          <img src='/images/win1.png' alt='-' className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]" />
          <p>Publishers increase <br /> conversions</p>
        </div>
        <div className="w-[33%] flex flex-col items-center text-center justify-start gap-10">
          <img src='/images/win2.png' alt='-' className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]" />
          <p>
            Advertisers
            zero-risk <br />
            acquisition
          </p>
        </div>
        <div className="w-[33%] flex flex-col items-center text-center justify-between gap-10">
          <img src='/images/win3.png' alt='-' className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"/>
          <p>Users financial <br /> incentives</p>
        </div>
      </div>
    </div>
  );
};
