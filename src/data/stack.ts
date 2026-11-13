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
    title: "Backend",
    items: [
      { icon: "c++", label: "C++" },
      { icon: "juce", label: "JUCE" },
      { icon: "tensorflow", label: "Tensorflow" },
      { icon: "pytorch", label: "PyTorch" },
      { icon: "matlab", label: "MATLAB" },
      { icon: "python", label: "Python" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: "git", label: "Git" },
      { icon: "cmake", label: "CMake" },
      { icon: "docker", label: "Docker" },
      { icon: "github", label: "GitHub" },
      { icon: "bash", label: "Bash" },
      { icon: "claude", label: "Claude" },
      { icon: "altium", label: "Altium" },
      { icon: "openscad", label: "OpenSCAD" },
    ],
  },
  {
    title: "Platform",
    items: [
      { icon: "espressif", label: "Espressif" },
      { icon: "raspberrypi", label: "Raspberry Pi" },
      { icon: "arm", label: "ARM" },
      { icon: "arduino", label: "Arduino" },
      { icon: "daisyseed", label: "Daisy Seed" },
    ],
  },
];
