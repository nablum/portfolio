"use client";

import { Box, Grid, GridItem, HStack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { MotionBox, fadeUp } from "@/components/motion";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechIcon } from "@/components/ui/TechIcon";
import { stackGroups, type StackGroup as StackGroupData } from "@/data/stack";
import { useSectionInView } from "@/hooks/useSectionInView";

/** Entrance delay (s) of each group, in display order. */
const GROUP_DELAYS = [0.1, 0.3, 0.2];

export function Stack() {
  const { ref, isInView } = useSectionInView<HTMLDivElement>();

  return (
    <Section id="stack" ref={ref} py={20}>
      <MotionBox {...fadeUp(isInView, 60)} transition={{ duration: 0.8, ease: "easeOut" }}>
        <SectionTitle {...fadeUp(isInView)} transition={{ duration: 0.6 }} mb={16}>
          My Stack
        </SectionTitle>

        <VStack spacing={12} align="stretch">
          {stackGroups.map((group, index) => (
            <MotionBox
              key={group.title}
              {...fadeUp(isInView, 20)}
              transition={{ duration: 0.5, delay: GROUP_DELAYS[index] ?? 0 }}
            >
              <StackGroup group={group} />
            </MotionBox>
          ))}
        </VStack>
      </MotionBox>
    </Section>
  );
}

function StackGroup({ group }: { group: StackGroupData }) {
  return (
    <Grid templateColumns={{ base: "1fr", md: "220px 1fr" }} gap={6} w="full">
      <GridItem>
        <Text fontSize={{ base: "xl", md: "2xl" }} color="gray.300" fontWeight="medium">
          {group.title}
        </Text>
      </GridItem>

      <GridItem>
        <Wrap spacing={4}>
          {group.items.map((item) => (
            <WrapItem key={item.icon}>
              <MotionBox
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                px={3.5}
                py={2}
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="full"
                backdropFilter="blur(6px)"
                _hover={{ bg: "whiteAlpha.200", borderColor: "whiteAlpha.300" }}
              >
                <HStack spacing={2} align="center">
                  <Box boxSize="18px">
                    <TechIcon name={item.icon} />
                  </Box>
                  <Text color="gray.200" fontSize="sm">
                    {item.label}
                  </Text>
                </HStack>
              </MotionBox>
            </WrapItem>
          ))}
        </Wrap>
      </GridItem>
    </Grid>
  );
}
