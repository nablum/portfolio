"use client";

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  FormControl,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { MotionBox, MotionButton, MotionHeading, fadeUp } from "@/components/motion";
import { Section } from "@/components/layout/Section";
import { profile } from "@/data/profile";
import { useSectionInView } from "@/hooks/useSectionInView";

type FormValues = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "success" | "error";

const EMPTY_FORM: FormValues = { name: "", email: "", message: "" };

const fieldStyles = {
  bg: "blackAlpha.400",
  borderColor: "whiteAlpha.300",
  color: "white",
  _placeholder: { color: "gray.400" },
  _focus: { borderColor: "brand.500" },
} as const;

async function sendMessage(values: FormValues) {
  const response = await fetch(profile.contactFormEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(values),
  });
  if (!response.ok) throw new Error(`Form submission failed (${response.status})`);
}

export function Contact() {
  const { ref, isInView } = useSectionInView<HTMLDivElement>();
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const isSending = status === "sending";

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    try {
      await sendMessage(values);
      setStatus("success");
      setValues(EMPTY_FORM);
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("error");
    }
  };

  return (
    <Section id="contact" ref={ref} py={20}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 10, lg: 16 }} alignItems="start">
        <GridItem>
          <VStack align="flex-start" spacing={6}>
            <Text fontSize="xs" color="gray.400" textTransform="uppercase" letterSpacing="wider" fontWeight="medium">
              Contact
            </Text>
            <MotionHeading
              {...fadeUp(isInView)}
              transition={{ duration: 0.6 }}
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color="white"
            >
              Get In Touch
            </MotionHeading>
            <Text color="gray.300" maxW="2xl">
              {profile.contactIntro}
            </Text>
          </VStack>
        </GridItem>

        <GridItem>
          <MotionBox {...fadeUp(isInView)} transition={{ duration: 0.6, delay: 0.15 }}>
            <Box
              bg="whiteAlpha.100"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              boxShadow="xl"
              backdropFilter="blur(6px)"
            >
              <form onSubmit={handleSubmit} acceptCharset="UTF-8">
                <VStack spacing={6}>
                  <FormControl>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      aria-label="Name"
                      value={values.name}
                      onChange={handleChange}
                      required
                      {...fieldStyles}
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      aria-label="Email"
                      value={values.email}
                      onChange={handleChange}
                      required
                      {...fieldStyles}
                    />
                  </FormControl>
                  <FormControl>
                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      aria-label="Message"
                      value={values.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      resize="none"
                      {...fieldStyles}
                    />
                  </FormControl>

                  {status === "success" && (
                    <StatusAlert
                      status="success"
                      title="Success!"
                      description="Your message has been sent successfully. I'll get back to you soon!"
                    />
                  )}
                  {status === "error" && (
                    <StatusAlert
                      status="error"
                      title="Error!"
                      description="Failed to send message. Please try again."
                    />
                  )}

                  <MotionButton
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    w="full"
                    bg="black"
                    _hover={{ bg: "blackAlpha.800" }}
                    color="white"
                    fontWeight="medium"
                    py={3}
                    isLoading={isSending}
                    loadingText="Sending..."
                  >
                    Send message
                  </MotionButton>
                </VStack>
              </form>
            </Box>
          </MotionBox>
        </GridItem>
      </Grid>
    </Section>
  );
}

function StatusAlert({ status, title, description }: { status: "success" | "error"; title: string; description: string }) {
  return (
    <Alert status={status} borderRadius="md">
      <AlertIcon />
      <Box>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Box>
    </Alert>
  );
}
