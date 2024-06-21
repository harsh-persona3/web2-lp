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
      <h1 className="text-5xl font-bold">Backed By</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {
            partners.map((partner, index) => {
                return (
                    <div className="flex flex-row h-[80px]">
                        <img src={`/images/${partner}.png`} key={index} className="h-full" />
                    </div>
                );
            })
        }
      </div>
    </div>
  );
}
