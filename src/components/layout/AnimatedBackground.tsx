"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import type { VantaEffect, VantaOptions } from "vanta/dist/vanta.waves.min";

export type BackgroundEffect = "waves" | "birds";

const BACKGROUND_COLOR = 0x131518;

const commonOptions = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200,
  minWidth: 200,
  scale: 1,
  scaleMobile: 1,
};

/** Lazily loads the requested Vanta.js effect (and three.js) and its settings. */
async function loadEffect(effect: BackgroundEffect) {
  if (effect === "waves") {
    const { default: WAVES } = await import("vanta/dist/vanta.waves.min");
    return {
      create: WAVES,
      options: {
        ...commonOptions,
        color: BACKGROUND_COLOR,
        shininess: 35,
        waveHeight: 15,
        waveSpeed: 0.3,
        zoom: 0.75,
      },
    };
  }
  const { default: BIRDS } = await import("vanta/dist/vanta.birds.min");
  return {
    create: BIRDS,
    options: {
      ...commonOptions,
      backgroundColor: BACKGROUND_COLOR,
      color1: 0x202325,
      color2: 0x989fa4,
      colorMode: "lerp",
      quantity: 3,
    },
  };
}

/** Fixed full-screen WebGL background (Vanta.js). */
export function AnimatedBackground({ effect = "waves" }: { effect?: BackgroundEffect }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let instance: VantaEffect | undefined;
    let cancelled = false;

    (async () => {
      try {
        const [THREE, { create, options }] = await Promise.all([import("three"), loadEffect(effect)]);
        if (cancelled || !containerRef.current) return;
        instance = create({ el: containerRef.current, THREE, ...options } as VantaOptions);
      } catch (error) {
        console.error("Failed to load Vanta.js:", error);
      }
    })();

    return () => {
      cancelled = true;
      instance?.destroy();
    };
  }, [effect]);

  return (
    <Box
      ref={containerRef}
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex={0}
      pointerEvents="none"
    />
  );
}
