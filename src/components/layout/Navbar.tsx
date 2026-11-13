"use client";

import { Box, Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MotionBox } from "@/components/motion";
import { navItems } from "@/data/navigation";

const SCROLL_THRESHOLD_PX = 10;

function scrollToSection(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
}

/** Floating pill navigation; turns into a blurred glass bar once the page is scrolled. */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={50} display="flex" justifyContent="center" pt={4}>
      <MotionBox
        as="nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        bg={isScrolled ? "rgba(0, 0, 0, 0.1)" : "transparent"}
        backdropFilter={isScrolled ? "blur(12px)" : "none"}
        border={isScrolled ? "1px solid" : "none"}
        borderColor={isScrolled ? "rgba(255, 255, 255, 0.1)" : "transparent"}
        borderRadius="full"
        px={8}
        py={3}
        style={{ transition: "all 0.3s ease" }}
      >
        <Flex gap={8}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              color="white"
              _hover={{ color: "white" }}
              fontWeight="medium"
              fontSize="sm"
              onClick={() => scrollToSection(item.href)}
            >
              {item.name}
            </Button>
          ))}
        </Flex>
      </MotionBox>
    </Box>
  );
}
