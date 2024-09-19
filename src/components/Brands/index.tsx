import { HTMLAttributes } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface BrandsProps extends HTMLAttributes<HTMLDivElement> {}

const images = [
  "/images/amazon.png",
  "/images/alexa.png",
  "/images/linkedin.png",
  "/images/oracle.png",
  "/images/barclays.png",
  "/images/livspace.png",
];

export default function Brands(props: BrandsProps) {
  const { className, ...rest } = props;
  return (
    <div
      className={twMerge(
        `flex flex-col items-center justify-center gap-10 min-h-[50vw] relative`,
        className
      )}
      {...rest}
    >
      <div className="flex flex-col gap-0 sm:gap-2 justify-center">
        <div className="text-center w-full flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-black">
            Surround yourself with great company
          </h1>
          <div className="flex gap-0 sm:gap-2 items-center flex-col sm:flex-row w-full justify-center">
            <p className="relative z-20 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black ">
              We are trusted by the best.
            </p>
            <p className="relative z-20 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black ">
              We create win-win-win scenarios.
            </p>
          </div>
        </div>
        <p className="relative z-20 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black text-center flex-grow">
          We are builders from
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 gap-y-8 sm:gap-y-12 md:grid-cols-6 place-items-center md:w-3/5 md:mx-auto w-full">
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              alt="brand"
              src={image}
              className="rounded-xl"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "5vw", minWidth: "40px" }}
            />
          );
        })}
      </div>
    </div>
  );
}
