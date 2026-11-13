export interface Project {
  title: string;
  description: string;
  /** Badge shown under the title, e.g. "Open Source". */
  visibility?: string;
  githubUrl?: string;
  demoUrl?: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    title: "inPhase",
    description: "Audio plugin for phase alignment developed in C++ with JUCE and CMake.",
    visibility: "Open Source",
    githubUrl: "https://github.com/nablum/inPhase",
    stack: ["C++", "JUCE", "CMake", "Python"],
  },
  {
    title: "pedal SHIELD MEGA",
    description:
      "A programmable guitar effects pedal based on Arduino MEGA, featuring OLED display, true-bypass footswitch, and DSP-ready input/output stages.",
    visibility: "Open Source",
    githubUrl: "https://github.com/nablum/pedalSHIELD-MEGA",
    stack: ["C++", "KiCad", "OpenSCAD"],
  },
  {
    title: "sonatino-idf",
    description: "ESP-IDF template for the Sonatino board. Alternative to Arduino or PlatformIO.",
    visibility: "Open Source",
    githubUrl: "https://github.com/nablum/sonatino-idf",
    stack: ["C", "C++", "CMake"],
  },
  {
    title: "myEQ",
    description: "A custom audio EQ plugin built with JUCE and CMake.",
    visibility: "Open Source",
    githubUrl: "https://github.com/nablum/myEQ",
    stack: ["C++", "JUCE", "CMake"],
  },
];
