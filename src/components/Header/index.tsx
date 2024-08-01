"use client";
import React, {
  useState,
  useEffect,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import Image from "next/image";
import SheetProvider from "../ui/Sheet";
import Link from "next/link";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = (props) => {
  const { ...rest } = props;
  const [scrollAtTop, setSrcollAtTop] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleScroll = (scrollYPosition: number) => {
    setSrcollAtTop(scrollYPosition > 5);
  };

  useEffect(() => {
    handleScroll(window.scrollY);
    window.addEventListener("scroll", () => handleScroll(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => handleScroll(window.scrollY));
    };
  }, []);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <div
      {...rest}
      className={`fixed top-0 flex justify-between items-center px-10 py-3 lg:px-[4%] lg:py-8 z-[99] w-full ${
        scrollAtTop
          ? "bg-white/50 backdrop-blur-md shadow-lg border-b border-white/10 rounded-md md:rounded-b-xl"
          : ""
      }`}
    >
      <div className="w-[120px] sm:w-[140px] 2xl:w-[198px]">
        <Image
          className=""
          src={"/images/persona.png"}
          width={0}
          height={0}
          style={{ width: "100%" }}
          sizes="100vw"
          alt="reward"
        />
      </div>
      <div className="items-center text-md 2xl:text-xl gap-8 hidden md:flex">
        <a href="#checkout-partners" className="">
          <p className="hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 hover:text-transparent hover:bg-clip-text hover:scale-105 hover:font-semibold transition duration-300 ease-out">
            CHECKOUT PARTNERS
          </p>
        </a>
        <a href="#advertisers" className="">
          <p className="hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 hover:text-transparent hover:bg-clip-text hover:scale-105 hover:font-semibold transition duration-300 ease-out">
            ADVERTISERS
          </p>
        </a>
        <SheetProvider.Trigger>
          {({ openSheet }) => {
            return (
              <button
                className="relative px-4 py-2 text-sm 2xl:text-xl text-[#6250C8] font-bold hover:scale-105 rounded-md border border-[#6F6477] border-solid transition-all duration-200 ease-in-out transform hover:shadow-md hover:shadow-purple-500 hover:translate-y-[0px] "
                onClick={openSheet}
              >
                GET IN TOUCH
              </button>
            );
          }}
        </SheetProvider.Trigger>
      </div>
      <HamburgerMenu onClick={toggleOverlay} />
      <OverlayMenu isOpen={isOverlayOpen} onClose={toggleOverlay} />
    </div>
  );
};

const HamburgerMenu = ({ onClick }: { onClick: () => void }) => (
  <button
    className="md:hidden flex flex-col justify-center items-center gap-[3px] rounded-md w-8 h-7 p-[6px] border border-[#6F6477]"
    onClick={onClick}
  >
    <div className="w-full h-[2px] bg-[#6250C8]"></div>
    <div className="w-full h-[2px] bg-[#6250C8]"></div>
    <div className="w-full h-[2px] bg-[#6250C8]"></div>
  </button>
);

interface OverlayMenuProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const OverlayMenu: React.FC<OverlayMenuProps> = ({ isOpen, onClose }) => {
  const overlayStyle = isOpen
    ? "fixed md:hidden top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-50 transition-transform duration-300 ease-in-out transform translate-x-0 w-[100vw] h-[100vh]"
    : "fixed md:hidden top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-50 transition-transform duration-300 ease-in-out transform translate-x-full w-[100vw] h-[100vh]";

  const contentStyle =
    "absolute top-0 right-0 bottom-0 bg-white p-20 w-[100vw] h-[100vh] bg-gradient-to-r from-pink-100/40 to-blue-100/40";

  return (
    <div className={overlayStyle}>
      <div className={contentStyle}>
        <button
          className="absolute top-4 left-4 flex items-center justify-center w-10 h-10"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.707 3.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 1-1.414 1.414l-5-5a3 3 0 0 1 0-4.242l5-5z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center my-auto text-md gap-8 md:hidden">
          <Image
            className=""
            src={"/images/persona.png"}
            width={120}
            height={120}
            sizes="100vw"
            alt="reward"
          />
          <a href="#checkout-partners" className="" onClick={onClose}>
            <p className="hover:bg-gradient-to-r text-center hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 hover:text-transparent hover:bg-clip-text hover:scale-105 hover:font-semibold transition duration-300">
              CHECKOUT PARTNERS
            </p>
          </a>
          <a href="#advertisers" className="" onClick={onClose}>
            <p className="hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 hover:text-transparent hover:bg-clip-text hover:scale-105 hover:font-semibold transition duration-300">
              ADVERTISERS
            </p>
          </a>
          <SheetProvider.Trigger>
            {({ openSheet }) => {
              return (
                <button
                  className="relative px-4 py-2 text-sm 2xl:text-xl text-[#6250C8] font-bold hover:scale-105 rounded-md border border-[#6F6477] border-solid transition-all duration-200 ease-in-out transform hover:shadow-md hover:shadow-purple-500 hover:translate-y-[0px] "
                  onClick={openSheet}
                >
                  GET IN TOUCH
                </button>
              );
            }}
          </SheetProvider.Trigger>
        </div>
      </div>
    </div>
  );
};

export default Header;
