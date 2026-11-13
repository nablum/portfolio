"use client";

import { Box, Container, Text } from "@chakra-ui/react";
import { profile } from "@/data/profile";

interface FooterProps {
  /** Easter egg: clicking the © symbol switches the animated background. */
  onToggleBackground: () => void;
}

export function Footer({ onToggleBackground }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <Box as="footer" py={8} px={{ base: 4, sm: 6, lg: 8 }}>
      <Container maxW="6xl">
        <Text textAlign="center" color="gray.400" fontFamily="mono" fontSize="sm">
          <Text
            as="span"
            cursor="pointer"
            userSelect="none"
            transition="all 0.2s ease"
            _hover={{ color: "gray.300", textShadow: "0 0 8px rgba(255, 255, 255, 0.3)" }}
            _active={{ transform: "scale(0.95)" }}
            onClick={onToggleBackground}
          >
            ©
          </Text>{" "}
          {year} {profile.copyrightHolder}
        </Text>
      </Container>
    </Box>
  );
}
