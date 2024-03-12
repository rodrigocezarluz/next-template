import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import { shadcnPlugin } from "./shadcn-plugin";

export const shadcnPreset = {
  darkMode: ["class"],
  content: [],
  prefix: "",
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config;
