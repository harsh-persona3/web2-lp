"use client";
import { createContext, Dispatch, MutableRefObject, PropsWithChildren, ReactElement, SetStateAction, useContext, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface SheetContext {
  isSheetOpen: boolean;
  setIsSheetOpen: Dispatch<SetStateAction<boolean>>;
  side: "right" | "bottom";
}

export const SheetContext = createContext<null | SheetContext>(null);

const SheetProvider = ({ children, side = "right" }: PropsWithChildren & { side: SheetContext["side"] }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return <SheetContext.Provider value={{ isSheetOpen, setIsSheetOpen, side }}>{children}</SheetContext.Provider>;
};

const SheetTrigger = ({ children }: { children: ({ openSheet }: { openSheet: () => void }) => ReactElement }) => {
  const context = useContext(SheetContext);
  if (context) {
    const { setIsSheetOpen } = context;

    const handleSheetOpen = () => {
      setIsSheetOpen(true);
    };

    return children({ openSheet: () => handleSheetOpen() });
  } else {
    throw new Error("SheetTrigger can only be used within a SheetProvider");
  }
};

const SheetContent = ({
  children,
  className,
}: {
  children: ({ ref, closeSheet }: { ref: MutableRefObject<any>; closeSheet?: () => void }) => ReactElement;
  className?: string;
}) => {
  const context = useContext(SheetContext);
  const modalRef = useRef();

  if (context) {
    const { isSheetOpen = false, setIsSheetOpen = () => {}, side } = context;
    return (
      <div
        className={`${
          isSheetOpen ? "fixed" : "hidden"
        } before:bg-black before:opacity-80 before:fixed before:top-0 before:bottom-0 before:left-0 before:right-0 z-[99] pointer-events-auto`}
        onClick={() => setIsSheetOpen(false)}
      >
        <div className={twMerge(side === "right" ? "animate-in slide-in-from-right-full" : "animate-in slide-in-from-bottom-full", "fixed z-[999]", className)}>
          {children({ ref: modalRef, closeSheet: () => setIsSheetOpen(false) })}
        </div>
      </div>
    );
  } else {
    throw new Error("SheetContent can only be used within a SheetProvider");
  }
};

SheetProvider.Trigger = SheetTrigger;
SheetProvider.Content = SheetContent;

export default SheetProvider;
