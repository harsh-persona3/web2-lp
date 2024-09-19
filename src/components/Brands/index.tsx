import { HTMLAttributes } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface BrandsProps extends HTMLAttributes<HTMLDivElement> {}

const images = ["/images/amazon.png", "/images/alexa.png","/images/linkedin.png","/images/oracle.png","/images/barclays.png","/images/livspace.png"];

export default function Brands(props: BrandsProps) {
  const { className, ...rest } = props;
  return (
    <div className={twMerge(`flex flex-col items-center justify-center gap-10 min-h-[50vw] relative`, className)} {...rest}>
      <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-black text-center">Surround yourself with great company</h1>
      <p className="relative z-20 text-base sm:text-xl md:text-2xl lg:text-4xl text-black sm:max-w-[70vw] text-center">
        We are trusted by the best. We create win-win-win scenarios. We are builders from
      </p>
      <div className="grid grid-cols-3 gap-4 gap-y-8 sm:gap-y-12 md:grid-cols-6 place-items-center md:w-3/5 md:mx-auto w-full">
        {images.map((image, index) => {
          return (
            <Image key={index} alt="brand" src={image} className="rounded-xl" width={0} height={0} sizes="100vw" style={{ width: "5vw", minWidth: "40px" }} />
          );
        })}
      </div>
    </div>
  );
}
