import { HTMLAttributes } from "react";
import styles from "./WinWinWin.module.css";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function WinWinWin(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div className={twMerge(`bg-black rounded-2xl`, className)}>
      <div className="px-10 py-5 md:py-10 bg-[#CBC0FF] rounded-2xl flex flex-col gap-10 items-center border 2xl:border-2 border-black translate-y-[-2px]">
        <h1
          className={`bg-[#FFFFFF] text-white font-extrabold inline-block text-transparent bg-clip-text text-3xl min-[480px]:text-4xl min-[600px]:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${styles.textStroke}`}
        >
          Win - Win - Win
        </h1>
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center w-full gap-6 font-agrandir text-base min-[480px]:text-lg md:text-xl lg:text-2xl xl:text-2xl">
          <div className="sm:w-[33%] flex flex-col items-center text-center justify-center gap-4 sm:gap-6">
            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
              <Image className="" src={"/images/win1.png"} width={0} height={0} style={{ width: "100%" }} sizes="100vw" alt="reward" />
            </div>
            <p>
              Publishers increase <br /> conversions
            </p>
          </div>
          <div className="sm:w-[33%] flex flex-col items-center text-center justify-center gap-4 sm:gap-6">
            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
              <Image className="" src={"/images/win2.png"} width={0} height={0} style={{ width: "100%" }} sizes="100vw" alt="reward" />
            </div>
            <p>
              Advertisers zero-risk <br />
              acquisition
            </p>
          </div>
          <div className="sm:w-[33%] flex flex-col items-center text-center justify-center gap-4 sm:gap-6">
            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
              <Image className="" src={"/images/win3.png"} width={0} height={0} style={{ width: "100%" }} sizes="100vw" alt="reward" />
            </div>
            <p>
              Users financial <br /> incentives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
