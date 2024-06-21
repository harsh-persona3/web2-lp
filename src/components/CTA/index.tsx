"use client";
import { ReactNode, useState } from "react";

interface CTAButtonProps {
  title: ReactNode;
  classname: string;
}

export default function CTAButton(props: CTAButtonProps) {
  const { title, classname } = props;
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handlePointerDown = () => {
    setIsButtonPressed(true);
  };

  const handlePointerUp = () => {
    setIsButtonPressed(false);
  };

  return (
    <div className="bg-black rounded-md">
      <button
        className={`border-[1px] border-black rounded-md px-4 py-2 transition-transform ${
          isButtonPressed ? "" : "transform translate-y-[-2px] translate-x-[-2px]"
        } ${classname}`}
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerUp}
      >
        <p>{title}</p>
      </button>
    </div>
  );
}
