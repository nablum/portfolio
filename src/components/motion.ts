"use client";

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

/** Chakra components enhanced with framer-motion animation props. */
export const MotionBox = motion.create(Box);
export const MotionHeading = motion.create(Heading);
export const MotionText = motion.create(Text);
export const MotionButton = motion.create(Button);

/**
 * "Fade up" animation driven by an in-view flag: the element slides up into place
 * when visible and goes back to its hidden state when scrolled out of view.
 */
export function fadeUp(isVisible: boolean, offset = 30) {
  const hidden = { opacity: 0, y: offset };
  return {
    initial: hidden,
    animate: isVisible ? { opacity: 1, y: 0 } : hidden,
  };
}
