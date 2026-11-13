"use client";

import { Box } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { MotionBox } from "@/components/motion";
import { AnimatedBackground, type BackgroundEffect } from "@/components/layout/AnimatedBackground";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Preloader } from "@/components/layout/Preloader";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";

export function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [background, setBackground] = useState<BackgroundEffect>("waves");

  const handleLoaded = useCallback(() => setIsLoaded(true), []);
  const toggleBackground = useCallback(
    () => setBackground((current) => (current === "waves" ? "birds" : "waves")),
    [],
  );

  return (
    <Box minH="100vh" bg="black" color="white" position="relative">
      {isLoaded ? (
        <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <AnimatedBackground effect={background} />
          <Box position="relative" zIndex={10}>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Stack />
            <Contact />
            <Footer onToggleBackground={toggleBackground} />
          </Box>
        </MotionBox>
      ) : (
        <Preloader onComplete={handleLoaded} durationMs={3000} finalTweenMs={600} />
      )}
    </Box>
  );
}
