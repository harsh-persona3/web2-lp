"use client";
import { HTMLAttributes} from "react";
import Image from "next/image";

interface BackedByProps extends HTMLAttributes<HTMLDivElement> {}

const partners = [
    'cadenza',
    'hashedEmergent',
    'ACE&Company',
    'untamedVentures',
    'dash',
    'iseed',
];

function BackedByV1(props: BackedByProps) {
  const { ...rest } = props;

  return (
    <div {...rest} className={`flex flex-col items-center gap-10 md:gap-14 w-full px-10 py-10 md:py-20`}>
      <h1 className="text-4xl md:text-5xl font-bold">Backed By</h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:w-4/5">
        {
            partners.map((partner, index) => {
                return (
                    <div className="flex flex-row h-[80px] md:h-[100px]" key={index}>
                        <img src={`/images/${partner}.png`} key={index} className="h-full" />
                    </div>
                );
            })
        }
      </div>
    </div>
  );
}

export default function BackedBy(props: BackedByProps) {
  const { ...rest } = props;

  return (
    <div {...rest} className={`flex flex-col items-center gap-8 md:gap-12 w-full px-10 py-0 md:py-10`}>
      <h1 className=" text-4xl sm:text-5xl min-[720px]:text-6xl min-[1000px]:text-7xl 2xl:text-8xl font-bold">Backed By</h1>
      <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-2">
        {
            partners.map((partner, index) => {
                return (
                    <div className="flex flex-row h-[90px] 2xl:h-[120px]" key={index}>
                      <Image
                          className=""
                          src={`/images/${partner}.png`}
                          width={0}
                          height={0}
                          style={{ width: "100%" }}
                          sizes="100vw"
                          alt="reward"
                      />
                    </div>
                );
            })
        }
      </div>
    </div>
  );
}
