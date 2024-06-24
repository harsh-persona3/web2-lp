import { HTMLAttributes } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface BrandsProps extends HTMLAttributes<HTMLDivElement> {}

const images = ["/images/linkedin.png", "/images/alexa.png", "/images/uber.png", "/images/paypal.png", "/images/uber-eats.png", "/images/amazon.png"];

export default function Brands(props: BrandsProps) {
  const { className, ...rest } = props;
  return (
    <div className={twMerge(`flex flex-col items-center justify-center gap-10 min-h-[50vw] relative`, className)} {...rest}>
      {/* <div className="hidden md:block absolute inset-0 top-[40%]">
        <Image
          src={images[0]}
          alt="brand"
          className="absolute rounded-xl left-[5%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw", minWidth: "40px" }}
        />
        <Image
          src={images[1]}
          alt="brand"
          className="absolute rounded-xl top-[33%] left-[10%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw", minWidth: "40px" }}
        />
        <Image
          src={images[2]}
          alt="brand"
          className="absolute rounded-xl top-[66%] left-[20%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw", minWidth: "40px" }}
        />
        <Image
          src={images[3]}
          alt="brand"
          className="absolute rounded-xl top-[66%] right-[20%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw", minWidth: "40px" }}
        />
        <Image
          src={images[4]}
          alt="brand"
          className="absolute rounded-xl right-[5%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw", minWidth: "40px" }}
        />
        <Image
          src={images[5]}
          alt="brand"
          className="absolute rounded-xl top-[33%] right-[10%] z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5vw", minWidth: "40px" }}
        />
      </div> */}
      <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-black text-center">Surround yourself with great company</h1>
      <p className="relative z-20 text-base sm:text-xl md:text-2xl lg:text-4xl text-black sm:max-w-[70vw] text-center">
        We are trusted by the best. All the brands that keep customers happy. We create win-win-win scenarios.
      </p>
      {/* <CTA/> */}
      <div className="grid gap-4 place-items-center md:w-4/5 md:mx-auto w-full" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr" }}>
        {images.map((image, index) => {
          return (
            <Image key={index} alt="brand" src={image} className="rounded-xl" width={0} height={0} sizes="100vw" style={{ width: "5vw", minWidth: "40px" }} />
          );
        })}
      </div>
    </div>
  );
}
