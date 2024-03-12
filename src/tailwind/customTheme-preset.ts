import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import { customThemePlugin } from "./customTheme-plugin";
import customGradientPlugin from "./customGradient-plugin";

export const customThemePreset = {
  darkMode: ["class"],
  content: [],
  prefix: "",
  plugins: [animatePlugin, customThemePlugin, customGradientPlugin],
} satisfies Config;
