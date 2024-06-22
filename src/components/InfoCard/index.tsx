"use client";
import { HTMLAttributes } from "react";

interface InfoCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  info: string;
  description: string;
  reverse: boolean;
  color: string;
  source: string;
}

export default function InfoCard(props: InfoCardProps) {
  const { title, info, description, reverse, color, source} = props;

  return (
    <div className={`flex ${reverse? 'flex-row-reverse':'flex-row'} flex-wrap${reverse? '':''} items-center justify-center gap-10 md:gap-20 py-10"`}>
      <div className="flex min-w-[300px] w-2/5 items-center justify-center lg:justify-start">
        <img src={`/images/${source}.png`} className="w-4/5" />
      </div>
      <div className="flex flex-col text-center lg:text-left items-center lg:items-start gap-5 max-w-[400px]">
        <div className="max-w-[fit-content] flex-none border border-black z-10">
          <div className={`max-w-[fit-content] py-2 px-4 ${color} bg-opacity-60 transition-transform transform translate-y-[6px] translate-x-[6px]`}>
            <p className="text-lg md:text-xl lg:text-2xl">{title}</p>
          </div>
        </div>
        <p className="text-2xl md:text-3xl lg:text-3xl font-bold leading-2">
          {info}
        </p>
        <p className="text-lg md:text-lg lg:text-xl leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
