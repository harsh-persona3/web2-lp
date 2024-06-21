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

export default function BackedBy(props: BackedByProps) {
  const { ...rest } = props;

  return (
    <div {...rest} className={`flex flex-col items-center gap-14 w-full p-10`}>
      <h1 className="text-5xl font-normal">Backed By</h1>
      <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-0 border-black border">
        {
            partners.map((partner, index) => {
                return (
                    <div className="flex flex-row h-[80px] border border-black" key={index}>
                        <img src={`/images/${partner}.png`} key={index} className="h-full" />
                    </div>
                );
            })
        }
      </div>
    </div>
  );
}
