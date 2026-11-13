import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const fontStack = "var(--font-inter), system-ui, sans-serif";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: fontStack,
    body: fontStack,
  },
  colors: {
    brand: {
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
    },
    gray: {
      300: "#d1d5db",
      400: "#9ca3af",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
  },
  styles: {
    global: {
      html: { fontFamily: fontStack },
      body: {
        bg: "black",
        color: "white",
        fontFamily: fontStack,
      },
    },
  },
});
