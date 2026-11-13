"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./TypingText.module.css";

interface TypingTextProps {
  /** Sentence(s) to type, one after the other. */
  text: string | readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  /** Delay before deleting a fully typed sentence (ms). */
  pauseDuration?: number;
  /** When false, typing stops after the last sentence. */
  loop?: boolean;
  cursorCharacter?: string;
}

/** Typewriter effect: types each sentence, pauses, erases it and moves on to the next. */
export function TypingText({
  text,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  loop = true,
  cursorCharacter = "|",
}: TypingTextProps) {
  const sentences = useMemo(() => (typeof text === "string" ? [text] : text), [text]);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const sentence = sentences[sentenceIndex];
    const isLastSentence = sentenceIndex === sentences.length - 1;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!isDeleting) {
      if (displayed.length < sentence.length) {
        timeout = setTimeout(
          () => setDisplayed(sentence.slice(0, displayed.length + 1)),
          typingSpeed,
        );
      } else if (loop || !isLastSentence) {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else if (displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed((value) => value.slice(0, -1)), deletingSpeed);
    } else {
      setIsDeleting(false);
      setSentenceIndex((index) => (index + 1) % sentences.length);
    }

    return () => clearTimeout(timeout);
  }, [sentences, sentenceIndex, displayed, isDeleting, loop, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={styles.root}>
      <span className={styles.content}>{displayed}</span>
      <span className={styles.cursor} aria-hidden>
        {cursorCharacter}
      </span>
    </span>
  );
}
