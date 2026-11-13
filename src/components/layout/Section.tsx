import { Box, Container, type BoxProps, type ContainerProps } from "@chakra-ui/react";
import type { Ref } from "react";

interface SectionProps extends BoxProps {
  ref?: Ref<HTMLDivElement>;
  /** Max width of the inner container. */
  maxW?: ContainerProps["maxW"];
  containerProps?: ContainerProps;
}

/** Page section with the site's standard horizontal padding and a centered container. */
export function Section({ ref, maxW = "8xl", containerProps, children, ...boxProps }: SectionProps) {
  return (
    <Box as="section" ref={ref} px={{ base: 4, sm: 6, lg: 8 }} {...boxProps}>
      <Container maxW={maxW} {...containerProps}>
        {children}
      </Container>
    </Box>
  );
}
