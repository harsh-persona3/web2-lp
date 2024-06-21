import { HTMLAttributes } from "react";
import styles from "./Footer.module.css";
import CTAButton from "../CTA";
interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export default function Footer(props: FooterProps) {
  const { ...rest } = props;
  return (
    <div {...rest}>
      <div className="mx-auto w-[80%]">
        <Card />
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

const Card = () => {
  return (
    <div className="p-16 bg-[#CBC0FF] rounded-2xl flex flex-col  gap-20 items-center border border-black">
      <h1
        className={`bg-[#FFD184] font-extrabold inline-block text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${styles.textStroke}`}
      >
        Win-Win for everyone 
      </h1>
      <div className="flex items-center justify-evenly gap-4 font-agrandir text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <p className="w-[33%]">
          Publishers <br /> increase conversions
        </p>
        <p className="w-[33%]">
          Advertisers&apos; <br />
          zero-risk <br />
          acquisition
        </p>
        <p className="w-[33%]">Users financial incentives</p>
      </div>
    </div>
  );
};
