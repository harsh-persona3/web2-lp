"use client";
import React, { useState, useEffect, HTMLAttributes, PropsWithChildren } from "react";
import Link from "next/link";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = (props) => {
  const { ...rest } = props;
  const [isSticky, setIsSticky] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // const handleScroll = () => {
  //   setIsSticky(window.scrollY > 20);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <div className="flex flex-col">
      <div
        {...rest}
        // className={`flex justify-between items-end px-10 py-5 z-[99999] w-full ${
        //   isSticky
        //     ? "sticky top-0 bg-white/10 backdrop-blur-md shadow-lg border-b border-white/10 rounded-b-sm"
        //     : "absolute top-0"
        // }`}
        className={`flex justify-between items-end absolute top-0 px-10 py-5 z-[99999] w-full`}
      >
        <img src="/images/persona.png" width={140} height={140} />
        <div className="items-center text-sm gap-8 hidden sm:flex">
          <Link href="/link1">
            <p className="cursor-pointer hover:bg-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-indigo-300 hover:text-transparent hover:bg-clip-text hover:scale-105 hover:font-semibold transition duration-300">
              ADVERTISERS
            </p>
          </Link>
          <Link href="/link2">
            <p className="cursor-pointer hover:bg-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-indigo-300 hover:text-transparent hover:bg-clip-text hover:scale-105 hover:font-semibold transition duration-300">
              PUBLISHERS
            </p>
          </Link>
          <button
            className="relative cursor-pointer px-4 py-2 text-sm text-[#6250C8] font-bold rounded-md border border-[#6F6477] border-solid transition-all duration-200 ease-in-out transform hover:shadow-md hover:shadow-purple-500 hover:translate-y-[0px] hover:bg-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-blue-400 hover:text-transparent hover:bg-clip-text"
            style={{ border: "1px solid #6F6477" }}
          >
            <p>GET STARTED</p>
          </button>
        </div>
        <HamburgerMenu onClick={toggleOverlay} />
      </div>

      {/* Overlay Component */}
      <Overlay isOpen={isOverlayOpen} onClose={toggleOverlay}>
        {/* You can put any content you want inside the overlay */}
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl">Overlay Content</p>
        </div>
      </Overlay>
    </div>
  );
};

const HamburgerMenu = ({ onClick }: { onClick: () => void }) => (
  <button className="sm:hidden flex flex-col justify-center items-center w-8 h-8" onClick={onClick}>
    <div className="w-full h-1 bg-gradient-to-b from-pink-500 to-violet-500 mb-1"></div>
    <div className="w-full h-1 bg-gradient-to-b from-pink-500 to-violet-500 mb-1"></div>
    <div className="w-full h-1 bg-gradient-to-b from-pink-500 to-violet-500"></div>
  </button>
);

interface OverlayProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, onClose, children }) => {
  const overlayStyle = isOpen
    ? "fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-50 transition-transform duration-300 ease-in-out transform translate-x-0 w-[100vw] h-[100vh]"
    : "fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-50 transition-transform duration-300 ease-in-out transform translate-x-full w-[100vw] h-[100vh]";

  const contentStyle = "absolute top-0 right-0 bottom-0 bg-white w-80 p-6 w-[100vw]";

  return (
    <div className={overlayStyle}>
      <div className={contentStyle}>
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Overlay Content */}
        {children}
      </div>
    </div>
  );
};

export default Header;
