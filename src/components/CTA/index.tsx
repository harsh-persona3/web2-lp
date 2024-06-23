"use client";
import { ReactNode, useState } from "react";

interface CTAButtonProps {
  title: ReactNode;
  classname: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}

export default function CTAButton(props: CTAButtonProps) {
  const { title, classname, href, target, onClick } = props;
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handlePointerDown = () => {
    setIsButtonPressed(true);
  };

  const handlePointerUp = () => {
    setTimeout(() => setIsButtonPressed(false), 100);
  };

  return (
    <div className="bg-black rounded-md">
      <a
        href={href}
        target={target}
        onClick={onClick}
        className={`block border-[1px] border-black rounded-md px-4 py-2 transition-transform ${
          isButtonPressed ? "" : "transform translate-y-[-2px] translate-x-[-2px]"
        } ${classname}`}
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerUp}
      >
        <p>{title}</p>
      </a>
    </div>
  );
}
