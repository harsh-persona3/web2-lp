"use client";

import hotjar from "@hotjar/browser";
import { useEffect } from "react";

export default function Hotjar() {
  useEffect(() => {
    const siteId = Number(process.env.NEXT_PUBLIC_HOTJAR_SITE_ID);
    const hotjarVersion = Number(process.env.NEXT_PUBLIC_HOTJAR_VERSION);
    siteId && hotjarVersion && hotjar.init(siteId, hotjarVersion);
  }, []);
  return null;
}
