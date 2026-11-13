"use client";

import type { ComponentProps } from "react";
import { MotionHeading } from "@/components/motion";

/** Large animated title shared by the content sections. */
export function SectionTitle(props: ComponentProps<typeof MotionHeading>) {
  return (
    <MotionHeading
      fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
      fontWeight="medium"
      textAlign="left"
      color="white"
      {...props}
    />
  );
}
