import { HTMLAttributes } from "react";
import CTAButton from "../CTA";
import ViewDemoBtn from "./ViewDemoBtn";
interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export default function Footer(props: FooterProps) {
  const { ...rest } = props;
  return (
    <>
      <div {...rest}>
        <div className="mx-auto w-[80%] relative">
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

          <div className="absolute z-10 -left-36 top-0 w-full w-[261px] md:w-[301px] lg:w-[401px] 2xl:w-[501px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 401 179"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                d="M0.755252 150.24C25.9028 49.4085 93.656 -100.34 163.488 107.32C205.128 203.486 231.622 192.29 288.844 113.977C313.023 80.8864 342.226 36.6051 398.905 63.6765"
                stroke="url(#paint0_linear_44_7)"
                strokeWidth="5.2952"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_44_7"
                  x1="370.416"
                  y1="100.548"
                  x2="15.9761"
                  y2="185.4"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9884FF80" />
                  <stop offset="1" stopColor="#CBC1FF20" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute z-10 -right-5 md:-right-20 top-[120px] sm:top-0 md:-top-12 w-full  w-[401px] max-w-[550px]-w-[501px] sm:w-[601px] md:w-[551px] lg:w-[801px] 2xl:w-[901px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 801 562"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                d="M0.11164 499.432C21.7682 500.373 67.2839 513.26 76.094 557.277C73.1693 567.398 85.0622 535.943 114.822 495.695C161.182 432.996 265.559 341.073 312.188 474.972C398.727 291.629 575.573 -16.3484 590.641 218.488C627.045 156.899 750.041 9.74417 797.371 17.0415M797.371 17.0415L762.259 100.603C766.678 74.9639 797.371 17.0415 797.371 17.0415ZM797.371 17.0415C796.868 9.58543 776.991 -2.80443 701.512 7.28437"
                stroke="url(#paint0_linear_44_4)"
                strokeWidth="5.2952"
              />
              <defs>
                <linearGradient id="paint0_linear_44_4" x1="907.5" y1="-28" x2="248.939" y2="411.409" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9884FF" />
                  <stop offset="1" stopColor="#CBC1FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
