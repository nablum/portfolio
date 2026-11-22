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

const EERS = "EERS Global Technologies Inc.";
const EERS_URL = "https://eers.ca/";

export const experiences: Experience[] = [
  {
    title: "Embedded Systems Engineer",
    company: "Tecmotion",
    companyUrl: "https://tecmotion.fr/",
    location: "Lyon, France",
    period: "January 2026 - Present",
    stack: [
      "c++",
      "stm32",
      "zephyr",
      "espressif",
      "raspberrypi",
      "kicad",
      "solidworks",
      "python",
      "jenkins",
      "docker",
      "git",
    ],
    responsibilities: [
      "Electronics: schematic and PCB design.",
      "C/C++ firmware: STM32, ESP32, TI, Raspberry Pi.",
      "Real-time systems: Zephyr, FreeRTOS, Azure RTOS, Embedded Linux.",
      "Bootloaders and secure boot: MCUboot.",
      "Buses and protocols: CAN, Modbus, USB, SPI, I2C, I2S.",
      "DevOps: Jenkins CI/CD, Docker, SBOM.",
      "Internal tools: Python, PostgreSQL, Flask.",
    ],
  },
  {
    title: "Embedded Software Engineer",
    company: EERS,
    companyUrl: EERS_URL,
    location: "Montreal, Canada · Remote",
    period: "May 2024 - November 2025",
    stack: ["c++", "cmake", "raspberrypi", "python", "git"],
    responsibilities: [
      "C/C++ firmware development.",
      "RTOS and embedded Linux environments.",
      "Peripheral integration over I2S, SPI and I2C.",
      "Real-time DSP porting and optimization: LMS, ANC, AGC, denoising.",
      "CI/CD pipelines.",
    ],
  },
  {
    title: "Signal Processing Engineer",
    company: EERS,
    companyUrl: EERS_URL,
    location: "Montreal, Canada",
    period: "March 2023 - May 2024",
    stack: ["matlab", "python", "tensorflow"],
    responsibilities: [
      "Signal processing algorithms: LMS, ANC, denoising, beamforming, equalization, machine learning.",
      "Time-frequency analysis: FFT, spectrograms, transients, formants, envelope.",
      "Technical specifications and system architecture.",
      "Mechanical and electronic design reviews.",
      "Measurements, testing and standards-based qualification.",
      "Large-scale measurement campaigns with human subjects.",
    ],
  },
  {
    title: "Acoustic Engineer",
    company: EERS,
    companyUrl: EERS_URL,
    location: "Montreal, Canada",
    period: "February 2022 - March 2023",
    stack: ["matlab"],
    responsibilities: [
      "Acoustic simulations: component modeling, Thiele/Small parameters, bass reflex, ANC.",
      "Acoustic measurements: headphone characterization, transducer classification, audio spatialization.",
      "Audio demonstrators and audio test benches.",
      "Bioacoustic signal collection, analysis and classification.",
    ],
  },
  {
    title: "Electronics Engineer Intern",
    company: "Thales Alenia Space",
    companyUrl: "https://www.thalesaleniaspace.com/fr",
    location: "Toulouse, France",
    period: "February 2021 - July 2021",
    responsibilities: [
      "Space communication architectures.",
      "RF isolator study.",
      "High-power amplifier design.",
      "Measurement campaigns and performance reports.",
    ],
  },
];
