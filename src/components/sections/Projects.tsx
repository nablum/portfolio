"use client";

import { Box, Button, Flex, Heading, HStack, Icon, Link, SimpleGrid, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { MotionBox, fadeUp } from "@/components/motion";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects, type Project } from "@/data/projects";
import { useSectionInView } from "@/hooks/useSectionInView";

const PAGE_SIZE = 3;

const outlineButtonProps = {
  variant: "outline",
  borderColor: "whiteAlpha.300",
  color: "gray.200",
  _hover: { bg: "whiteAlpha.200" },
  size: "sm",
} as const;

export function Projects() {
  const { ref, isInView } = useSectionInView<HTMLDivElement>();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const canShowMore = visibleCount < projects.length;
  const canShowLess = !canShowMore && projects.length > PAGE_SIZE;

  return (
    <Section id="projects" ref={ref} py={20}>
      <SectionTitle {...fadeUp(isInView)} transition={{ duration: 0.6 }} mb={24}>
        Personal Projects
      </SectionTitle>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.slice(0, visibleCount).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </SimpleGrid>

      <Flex justify="center" mt={10}>
        {canShowMore && (
          <Button {...outlineButtonProps} onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
            Show more
          </Button>
        )}
        {canShowLess && (
          <Button {...outlineButtonProps} onClick={() => setVisibleCount(PAGE_SIZE)}>
            Show less
          </Button>
        )}
      </Flex>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { title, description, visibility, githubUrl, demoUrl, stack } = project;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: false }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      bg="whiteAlpha.100"
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius="xl"
      p={{ base: 6, md: 8 }}
      backdropFilter="blur(6px)"
      h="full"
    >
      <Flex direction="column" h="full">
        <Heading size="md" color="white" mb={2}>
          {title}
        </Heading>

        {visibility && (
          <Box
            as="span"
            display="inline-block"
            px={3}
            py={1}
            mb={4}
            bg="whiteAlpha.200"
            border="1px solid"
            borderColor="whiteAlpha.300"
            borderRadius="full"
            color="gray.200"
            fontSize="xx-small"
            fontWeight="medium"
            w="fit-content"
            alignSelf="flex-start"
          >
            {visibility}
          </Box>
        )}

        <Text color="gray.300" mb={6}>
          {description}
        </Text>

        <Box mt="auto">
          <HStack spacing={3} mb={4}>
            {githubUrl && (
              <Button
                as={Link}
                href={githubUrl}
                isExternal
                leftIcon={<Icon as={ExternalLink} />}
                bg="black"
                _hover={{ bg: "blackAlpha.800" }}
                color="white"
                fontWeight="medium"
                size="sm"
              >
                GitHub
              </Button>
            )}
            {demoUrl && (
              <Button
                as={Link}
                href={demoUrl}
                isExternal
                leftIcon={<Icon as={ExternalLink} />}
                {...outlineButtonProps}
                fontWeight="medium"
              >
                Demo
              </Button>
            )}
          </HStack>

          {stack.length > 0 && (
            <Wrap spacing={2}>
              {stack.map((tech) => (
                <WrapItem key={tech}>
                  <Box
                    px={2.5}
                    py={1}
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    borderRadius="full"
                    color="gray.300"
                    fontSize="xx-small"
                  >
                    {tech}
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          )}
        </Box>
      </Flex>
    </MotionBox>
  );
}
