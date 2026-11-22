export const profile = {
  firstName: "Hugo",
  fullName: "Hugo Besnard",
  /** Short description used in the page metadata. */
  headline: "Embedded systems engineer.",
  tagline: "Embedded Software Developer. Hardware Designer. Audio Tech Enthusiast.",
  /** Start of professional career, used to compute the years of experience. */
  careerStart: "2021-09",
  about: (years: number) =>
    `Hi, I’m Hugo, an embedded systems engineer with ${years}+ years of experience building products from the circuit board to the firmware. I work across embedded software, electronic design and real-time signal processing, with a background in acoustics.`,
  contactIntro: "I'm always looking to learn and collaborate on new ideas. Let's connect!",
  /** Name displayed in the footer copyright notice. */
  copyrightHolder: "Hugo Besnard",
  social: {
    github: "https://github.com/nablum",
    linkedin: "https://www.linkedin.com/in/hugo-besnard/",
  },
  /** Formspree endpoint receiving the contact form submissions. */
  contactFormEndpoint: "https://formspree.io/f/mjkvnwqz",
} as const;
