"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

/** Tracks whether a section is on screen (re-triggers every time it enters the viewport). */
export function useSectionInView<T extends Element = HTMLElement>() {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  return { ref, isInView };
}
