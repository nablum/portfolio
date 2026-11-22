import type { TechIconName } from "./techIcons";

export interface StackItem {
  icon: TechIconName;
  label: string;
}

export interface StackGroup {
  title: string;
  items: StackItem[];
}

export const stackGroups: StackGroup[] = [
  {
    title: "Embedded",
    items: [
      { icon: "stm32", label: "STM32" },
      { icon: "espressif", label: "ESP32" },
      { icon: "arm", label: "ARM" },
      { icon: "zephyr", label: "Zephyr" },
      { icon: "raspberrypi", label: "Raspberry Pi" },
      { icon: "arduino", label: "Arduino" },
      { icon: "daisyseed", label: "Daisy Seed" },
    ],
  },
  {
    title: "Languages",
    items: [
      { icon: "c++", label: "C/C++" },
      { icon: "python", label: "Python" },
      { icon: "bash", label: "Bash" },
    ],
  },
  {
    title: "Hardware Design",
    items: [
      { icon: "kicad", label: "KiCad" },
      { icon: "altium", label: "Altium" },
      { icon: "solidworks", label: "SolidWorks" },
      { icon: "openscad", label: "OpenSCAD" },
    ],
  },
  {
    title: "Signal Processing",
    items: [
      { icon: "matlab", label: "MATLAB" },
      { icon: "juce", label: "JUCE" },
      { icon: "tensorflow", label: "TensorFlow" },
      { icon: "pytorch", label: "PyTorch" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { icon: "git", label: "Git" },
      { icon: "github", label: "GitHub" },
      { icon: "jenkins", label: "Jenkins" },
      { icon: "cmake", label: "CMake" },
      { icon: "docker", label: "Docker" },
      { icon: "claude", label: "Claude" },
    ],
  },
];
