"use client";
import Link from "next/link";
import { HTMLAttributes, useEffect, useState } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export default function Header(props: HeaderProps) {
  const { ...rest } = props;
  const [isSticky, setIsSticky] = useState(false);

  
  const [menuOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    {!isSticky && <div className="w-full h-[20px] bg-black">

    </div>}
    <div>
      <div {...rest} className={`flex justify-between items-end px-10 ${isSticky?'py-4':'py-4'} z-[99999] w-full ${isSticky? '  sticky top-0 bg-white/10 backdrop-blur-md shadow-lg border-b border-white/10 rounded-b-sm': 'sticky top-[0px]'}`}>
        <img src={getPublicAssetUrl('/logos/logo-word-dark-bg.png')} width={140} height={140} />
        <div className="items-center text-sm gap-8 hidden sm:flex">
          <Link href="/link1">
            <p className="text-white/80 cursor-pointer hover:bg-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-indigo-300 hover:text-transparent hover:bg-clip-text hover:scale-105 hover:font-semibold transition duration-300">
              ADVERTISERS
            </p>
          </Link>
          <Link href="/link2">
            <p className="text-white/80 cursor-pointer hover:bg-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-indigo-300 hover:text-transparent hover:bg-clip-text hover:scale-105 hover:font-semibold transition duration-300">
              PUBLISHERS
            </p>
          </Link>
          <button className="relative cursor-pointer px-4 py-2 text-sm text-white font-bold rounded-md border border-purple-700 border-solid transition-all duration-200 ease-in-out transform hover:shadow-md hover:shadow-purple-500 hover:translate-y-[0px] hover:bg-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-blue-400 hover:text-transparent hover:bg-clip-text" style={{ border: '1px solid #6F6477' }}>
            <p>
              GET STARTED
            </p>
          </button>
        </div>
        <HamburgerMenu onClick={handleOpen} />
      </div>
    </div>
    </>
  );
}

const HamburgerMenu = ({onClick}:{onClick:any}) => (
  <button className="sm:hidden flex flex-col justify-center items-center w-8 h-8" onClick={onClick} >
    <div className="w-full h-1 bg-gradient-to-b from-pink-500 to-violet-500 mb-1"></div>
    <div className="w-full h-1 bg-gradient-to-b from-pink-500 to-violet-500 mb-1"></div>
    <div className="w-full h-1 bg-gradient-to-b from-pink-500 to-violet-500"></div>
  </button>
);

export const getPublicAssetUrl = (assetPath: string) => {
    return `https://cdn.persona3.tech/assets${assetPath}`;
};
