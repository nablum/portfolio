"use client";

import { Box, Container, VStack } from "@chakra-ui/react";
import { MotionHeading } from "@/components/motion";
import { TypingText } from "@/components/ui/TypingText";
import { profile } from "@/data/profile";

const enter = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };

export function Hero() {
  return (
    <Box
      as="section"
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, sm: 6, lg: 8 }}
      pt={16}
    >
      <Container maxW="7xl" textAlign="center">
        <VStack spacing={6} align="center">
          <MotionHeading
            as="h1"
            {...enter}
            transition={{ duration: 0.8, ease: "easeOut" }}
            fontSize={{ base: "6xl", sm: "7xl", lg: "8xl" }}
            fontWeight="bold"
            color="white"
          >
            Hi, I&apos;m {profile.firstName}
          </MotionHeading>

          <MotionHeading
            as="p"
            {...enter}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
            fontWeight="light"
            bgGradient="linear(to-r, white, gray.300)"
            bgClip="text"
            color="transparent"
            minH={{ base: "1.5rem", sm: "2rem", lg: "2.5rem" }}
          >
            <TypingText text={profile.tagline} typingSpeed={100} pauseDuration={2000} cursorCharacter="█" />
          </MotionHeading>
        </VStack>
      </Container>
    </Box>
  );
}
