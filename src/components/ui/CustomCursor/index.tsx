"use client";
import useMousePosition from "@/hooks/useMousePosition";
import styles from "./CustomCursor.module.css";

const Cursor = () => {
  const { x, y } = useMousePosition();
  return <div style={{ left: `${x}px`, top: `${y}px` }} className={`${styles.ring} lg:block hidden static z-[999999]`}></div>;
};

export default Cursor;
