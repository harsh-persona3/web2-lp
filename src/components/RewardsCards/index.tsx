import React, { HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const cardsConfig = [
  {
    imageSource: "/images/reward1.png",
    description: React.createElement(
      "p",
      { className: "text-[16px] sm:text-[19px] min-[780px]:text-[21px] 2xl:text-[24px] text-black/70" },
      React.createElement("span", { className: "font-bold" }, "Get your complete order for free"),
      " by registering with an insurance company"
    ),
  },
  {
    imageSource: "/images/reward2.png",
    description: React.createElement(
      "p",
      { className: "text-[16px] sm:text-[19px] min-[780px]:text-[21px] 2xl:text-[24px] text-black/70" },
      React.createElement("span", { className: "font-bold" }, "Get your delivery fee waived off"),
      " by registering for a gym membership"
    ),
  },
  {
    imageSource: "/images/reward3.png",
    description: React.createElement(
      "p",
      { className: "text-[16px] sm:text-[19px] min-[780px]:text-[21px] 2xl:text-[24px] text-black/70" },
      React.createElement("span", { className: "font-bold" }, "Get 30% discount on the order"),
      " by subscribing for an entertainment platform"
    ),
  },
];

export default function RewardsCards(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div className={twMerge(`flex flex-col gap-10 items-center`, className)} {...rest}>
      <div className="relative w-full flex justify-center items-center">
        <div className="absolute top-[-60%] left-[-5%] min-[500px]:left-[1%] w-[40px] min-[600px]:w-[50px] min-[800px]:w-[60px] min-[880px]:w-[70px] 2xl:w-[95px]">
          <Image className="" src={"/heart.svg"} width={0} height={0} style={{ width: "100%" }} sizes="100vw" alt="reward" />
        </div>
        <div className="absolute top-[0%] right-[-5%] min-[500px]:right-[1%] w-[40px] min-[600px]:w-[50px] min-[800px]:w-[60px] min-[880px]:w-[70px] 2xl:w-[95px]">
          <Image className="" src={"/gift.svg"} width={0} height={0} style={{ width: "100%" }} sizes="100vw" alt="reward" />
        </div>
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
          Risk-free rewards <br></br> users want to click
        </p>
      </div>

      <div className="grid gap-6 w-full" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr" }}>
        {cardsConfig.map((card, index) => {
          return <RewardCard {...card} key={index} />;
        })}
      </div>
    </div>
  );
}

interface RewardCardProps {
  description: ReactNode;
  imageSource: string;
}

function RewardCard(props: RewardCardProps) {
  const { description, imageSource } = props;

  return (
    <div className="w-full bg-black rounded-xl">
      <div className="flex flex-col gap-6 rounded-xl p-4 border border-black bg-white translate-y-[-2px] translate-x-[-2px] h-full">
        <div className="w-full aspect-video">
          <Image className="" src={imageSource} width={0} height={0} style={{ width: "100%" }} sizes="100vw" alt="reward" />
        </div>
        <div className="flex flex-col gap-6 flex-1">
          {description}
          <div className="max-w-fit rounded-md sm:rounded-xl px-6 py-[6px] border border-black bg-[#ADF0F2] font-bold min-[880px]:mt-auto">
            <p className="text-[12px] sm:text-[18px] min-[780px]:text-[21px] 2xl:text-[24px]">CLAIM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
