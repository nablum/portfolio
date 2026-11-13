import type { TechIconName } from "./techIcons";

export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  responsibilities: string[];
  stack?: TechIconName[];
}

const EERS_URL = "https://eers.ca/";

export const experiences: Experience[] = [
  {
    title: "Audio Software Engineer",
    company: "EERS Global Technologies Inc.",
    companyUrl: EERS_URL,
    location: "Remote",
    period: "May 2024 - Present",
    stack: ["matlab", "python", "tensorflow", "c++", "juce", "cmake", "raspberrypi", "git"],
    responsibilities: [
      "Advanced DSP: ML models, adaptive filtering, ANC, denoising, echo cancellation, harmonic regeneration.",
      "Designed and developed audio components, algorithms, and plug-ins.",
      "Implemented real-time audio processing on embedded platforms.",
      "Built CI/CD pipelines with custom audio emulators.",
      "Performed V&V for audio industry standards.",
    ],
  },
  {
    title: "Audio System Engineer",
    company: "EERS Global Technologies Inc.",
    companyUrl: EERS_URL,
    location: "Montreal, Canada",
    period: "April 2023 - May 2024",
    responsibilities: [
      "Defined technical specifications and system architectures for audio products.",
      "Reviewed mechanical and electronic designs to ensure acoustic and signal performance.",
      "Conducted advanced signal analysis (FFT, spectrograms, transients, formants, envelopes).",
      "Developed DSP algorithms (LMS, ML models, ANC, Denoising, Beamforming).",
      "Led measurements, testing, and qualification in compliance with audio standards.",
      "Managed large-scale human-subject measurement campaigns.",
      "Delivered technical documentation and ensured clear communication across teams.",
      "Coordinated planning and reviews with clients and partners.",
    ],
  },
  {
    title: "Acoustic Engineer",
    company: "EERS Global Technologies Inc.",
    companyUrl: EERS_URL,
    location: "Montreal, Canada",
    period: "February 2022 - March 2023",
    responsibilities: [
      "Acoustic simulations (lumped-element models, Thiele/Small extraction, bass-reflex).",
      "Acoustic measurements: headphone/earpiece characterization, transducer classification, spatialisation, and audio certification.",
      "Built audio demonstrators for research and product development.",
      "Designed acoustic test benches for automated measurements.",
      "Captured, analysed, and classified bioacoustic signals for database.",
    ],
  },
  {
    title: "Hardware Designer",
    company: "Thales Alenia Space",
    companyUrl: "https://www.thalesaleniaspace.com/fr",
    location: "Toulouse, France",
    period: "January 2021 - September 2021",
    responsibilities: [
      "Studied space communication architectures.",
      "Modelled RF isolators for space applications.",
      "Contributed to high-power RF amplifier design and validation.",
      "Performed measurement campaigns on RF prototypes.",
      "Produced performance reports with results and recommendations.",
    ],
  },
];
