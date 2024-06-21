"use client";
import { HTMLAttributes } from "react";

interface InfoCardProps extends HTMLAttributes<HTMLDivElement> {}

export default function InfoCard(props: InfoCardProps) {
  const { ...rest } = props;

  const config = {
    title: 'For publishers',
    info: 'Grow lifetime revenue at zero cost \n  through Persona’s checkout flywheel!!!',
    description: 'Subsidize your user’s checkout all sponsored by Persona’s \n advertising partners.'
  }

  return (
    <div {...rest} className={`flex flex-row-reverse justify-between items-center gap-20 px-10 py-10 w-full`}>
      <img src={getPublicAssetUrl('/logos/logo-word-dark-bg.png')} width={430} height={470} />
      <div className="flex flex-col gap-5 max-w-[600px]">
        <h1 className="text-4xl text-lime-200 font-bold">{config.title}</h1>
        <h1 className="text-4xl">{config.info}</h1>
        <p className="text-3xl text-white">{config.description}</p>
      </div>
    </div>
  );
}

export const getPublicAssetUrl = (assetPath: string) => {
    return `https://cdn.persona3.tech/assets${assetPath}`;
};
