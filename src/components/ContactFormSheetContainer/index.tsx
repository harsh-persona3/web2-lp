"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import SheetProvider from "../ui/Sheet";
import useWindowSize from "@/hooks/useWindowSize";
import ContactForm from "../ContactForm";

export default function ContactFormSheetContainer(props: PropsWithChildren) {
  const { width } = useWindowSize();
  const [side, setSide] = useState<"right" | "bottom">("right");

  useEffect(() => {
    if (width >= 768) {
      setSide("right");
    } else {
      setSide("bottom");
    }
  }, [width]);

  return (
    <SheetProvider side={side}>
      {props.children}
      <SheetProvider.Content
        className={`${
          side === "right"
            ? "top-0 right-0 rounded-tl-2xl rounded-bl-2xl min-h-screen"
            : "left-0 bottom-0 right-0 rounded-tl-2xl rounded-tr-2xl max-h-[calc(100vh-20%)] overflow-auto"
        } bg-white  duration-500`}
      >
        {() => {
          return <ContactForm className="p-16 h-screen" />;
        }}
      </SheetProvider.Content>
    </SheetProvider>
  );
}
