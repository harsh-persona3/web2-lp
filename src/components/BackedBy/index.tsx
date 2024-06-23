import { HTMLAttributes } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface BackedByProps extends HTMLAttributes<HTMLDivElement> {}

const partners = ["cadenza", "hashedEmergent", "ACE&Company", "untamedVentures", "dash", "iseed"];

// function BackedByV1(props: BackedByProps) {
//   const { ...rest } = props;

//   return (
//     <div {...rest} className={`flex flex-col items-center gap-10 md:gap-14 w-full px-10 py-10 md:py-20`}>
//       <h1 className="text-4xl md:text-5xl font-bold">Backed By</h1>
//       <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:w-4/5">
//         {partners.map((partner, index) => {
//           return (
//             <div className="flex flex-row h-[80px] md:h-[100px]" key={index}>
//               <img src={`/images/${partner}.png`} key={index} className="h-full" />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

export default function BackedBy(props: BackedByProps) {
  const { className, ...rest } = props;

  return (
    <div {...rest} className={twMerge(`flex flex-col items-center gap-4 sm:gap-8`, className)}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">Backed By</h1>
      <div className="grid gap-4 w-full" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr" }}>
        {partners.map((partner, index) => {
          return (
            <div className="flex place-content-center flex-row aspect-[200/93]" key={index}>
              <Image className="" src={`/images/${partner}.png`} width={0} height={0} style={{ width: "100%" }} sizes="100vw" alt="investors" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
