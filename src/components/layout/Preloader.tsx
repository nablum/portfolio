"use client";

import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { MotionText } from "@/components/motion";

interface PreloaderProps {
  onComplete: () => void;
  /** Duration of the main (ease-out) progress phase, 0 → 98 %. */
  durationMs?: number;
  /** Duration of the final 98 → 100 % tween. */
  finalTweenMs?: number;
}

const FINAL_PHASE_START = 98;
const COMPLETE_DELAY_MS = 200;

/** Exponential ease-out, from 0 to 1. */
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/** Full-screen loading counter displayed before the page appears. */
export function Preloader({ onComplete, durationMs = 2200, finalTweenMs = 400 }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    let completeTimeout: ReturnType<typeof setTimeout> | undefined;

    const runFinalTween = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / finalTweenMs);
        setProgress(FINAL_PHASE_START + Math.round((100 - FINAL_PHASE_START) * t));
        if (t < 1) {
          frame = requestAnimationFrame(tick);
        } else {
          completeTimeout = setTimeout(onComplete, COMPLETE_DELAY_MS);
        }
      };
      frame = requestAnimationFrame(tick);
    };

    const start = performance.now();
    const tick = (now: number) => {
      const value = Math.round(100 * easeOutExpo(Math.min(1, (now - start) / durationMs)));
      if (value >= FINAL_PHASE_START) {
        setProgress(FINAL_PHASE_START);
        runFinalTween();
        return;
      }
      setProgress(Math.min(FINAL_PHASE_START - 1, value));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(completeTimeout);
    };
  }, [onComplete, durationMs, finalTweenMs]);

  return (
    <Box
      position="fixed"
      inset={0}
      bg="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={1000}
    >
      <MotionText
        fontSize={{ base: "6xl", sm: "7xl" }}
        fontWeight="bold"
        color="white"
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {progress}%
      </MotionText>
    </Box>
  );
}
