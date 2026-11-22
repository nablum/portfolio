"use client";

import { Flex, Icon, Link, VStack } from "@chakra-ui/react";
import { Github, Linkedin, type LucideIcon } from "lucide-react";
import { MotionText } from "@/components/motion";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";
import { yearsSince } from "@/lib/experience";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
};

const socialLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "GitHub profile", href: profile.social.github, icon: Github },
  { label: "LinkedIn profile", href: profile.social.linkedin, icon: Linkedin },
];

export function About() {
  return (
    <Section id="about" pt={16} pb={0}>
      <VStack spacing={8} align="flex-start">
        <SectionTitle {...reveal} transition={{ duration: 0.8, ease: "easeOut" }}>
          About Me
        </SectionTitle>

        <MotionText
          {...reveal}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          fontSize={{ base: "md", sm: "lg", lg: "xl" }}
          color="gray.300"
          maxW="7xl"
        >
          {profile.about(yearsSince(profile.careerStart))}
        </MotionText>

        <Flex gap={6}>
          {socialLinks.map(({ label, href, icon }) => (
            <Link key={label} href={href} isExternal aria-label={label} display="flex">
              <Icon as={icon} boxSize={6} color="gray.400" _hover={{ color: "white" }} />
            </Link>
          ))}
        </Flex>
      </VStack>
    </Section>
  );
}
