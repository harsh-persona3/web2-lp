import { HTMLAttributes } from "react";
import CTAButton from "../CTA";
import ViewDemoBtn from "./ViewDemoBtn";
interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export default function Footer(props: FooterProps) {
  const { ...rest } = props;
  return (
    <>
      <div {...rest}>
        <div className="mx-auto w-[80%]">
          <p className="text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">We are changing advertising for the benefit of ALL</p>
          <p className="mt-5 text-center font-normal font-agrandir text-lg sm:text-xl md:text-2xl">
            At Persona, we are passionate about helping businesses achieve explosive growth through scalable and innovative financial incentives. Let us show
            you what sets us apart.
          </p>
          <div className="flex gap-8 mx-auto w-fit mt-10">
            <CTAButton
              href="https://www.persona3.io/contact"
              target="_black"
              title={"Get in touch"}
              classname={"capitalize pointer-events-auto cursor-none font-semibold p-1 sm:px-8 md:px-12 text-xs sm:text-xl md:text-2xl bg-[#CBC1FF]"}
            ></CTAButton>
            <ViewDemoBtn />
          </div>
          <div className="pt-16">
            <hr />
            <p className="my-4 w-fit mx-auto font-agrandir">© 2024 Persona XYZ, Inc</p>
          </div>
        </div>
      </div>
    </>
  );
}
