"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MotionBox, fadeUp } from "@/components/motion";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechIcon } from "@/components/ui/TechIcon";
import { experiences, type Experience as ExperienceEntry } from "@/data/experience";
import { useSectionInView } from "@/hooks/useSectionInView";

export function Experience() {
  const { ref, isInView } = useSectionInView<HTMLDivElement>();

  return (
    <Section id="work" ref={ref} py={20}>
      <SectionTitle {...fadeUp(isInView)} transition={{ duration: 0.6 }} mb={8}>
        Experience
      </SectionTitle>

      <MotionBox {...fadeUp(isInView, 20)} transition={{ duration: 0.5 }}>
        <Accordion allowToggle defaultIndex={[0]}>
          {experiences.map((experience) => (
            <ExperienceItem key={`${experience.title}-${experience.period}`} experience={experience} />
          ))}
        </Accordion>
      </MotionBox>
    </Section>
  );
}

function ExperienceItem({ experience }: { experience: ExperienceEntry }) {
  const { title, company, companyUrl, location, period, responsibilities, stack } = experience;
  const companyLabel = (
    <Text color="gray.400" fontSize="sm" _hover={companyUrl ? { color: "gray.300" } : undefined}>
      {company}
    </Text>
  );

  return (
    <AccordionItem
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius="md"
      mb={4}
      bg="whiteAlpha.100"
      backdropFilter="blur(6px)"
    >
      <h2>
        <AccordionButton px={5} py={4} _expanded={{ bg: "whiteAlpha.200" }}>
          <Flex align="center" justify="space-between" w="full" gap={4}>
            <VStack align="start" spacing={0}>
              <Text color="white" fontWeight="medium">
                {title}
              </Text>
              <HStack spacing={2}>
                {companyUrl ? (
                  <Link href={companyUrl} isExternal>
                    {companyLabel}
                  </Link>
                ) : (
                  companyLabel
                )}
                <Text color="gray.400" fontSize="sm">
                  |
                </Text>
                <Text color="gray.400" fontSize="sm">
                  {location}
                </Text>
              </HStack>
            </VStack>

            <HStack spacing={4} color="gray.400" fontSize="sm">
              <Text>{period}</Text>
              <AccordionIcon />
            </HStack>
          </Flex>
        </AccordionButton>
      </h2>

      <AccordionPanel px={5} py={5}>
        <VStack align="start" spacing={4}>
          <VStack align="start" spacing={1}>
            <Text color="gray.200" fontWeight="semibold">
              Key role
            </Text>
            {responsibilities.map((item) => (
              <Text key={item} color="gray.300">
                • {item}
              </Text>
            ))}
          </VStack>

          {stack && (
            <VStack align="start" spacing={2}>
              <Text color="gray.400" fontWeight="medium" fontSize="sm">
                Tech Stack:
              </Text>
              <HStack spacing={2}>
                {stack.map((name) => (
                  <Box key={name} boxSize="20px">
                    <TechIcon name={name} />
                  </Box>
                ))}
              </HStack>
            </VStack>
          )}
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}
