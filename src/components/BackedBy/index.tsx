"use client";
import { HTMLAttributes} from "react";

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
    <div {...rest} className={`flex flex-col items-center gap-10 md:gap-14 w-full px-10 py-20`}>
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
    <div {...rest} className={`flex flex-col items-center gap-8 md:gap-12 w-full px-10 py-20`}>
      <h1 className="text-4xl md:text-5xl font-bold">Backed By</h1>
      <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-2">
        {
            partners.map((partner, index) => {
                return (
                    <div className="flex flex-row h-[90px]" key={index}>
                        <img src={`/images/${partner}.png`} key={index} className="h-full" />
                    </div>
                );
            })
        }
      </div>
    </div>
  );
}
