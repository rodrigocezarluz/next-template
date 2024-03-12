/** @type {import('tailwindcss').Config} */

import { customThemePreset } from "./src/tailwind/customTheme-preset";
// import { shadcnPreset } from "./src/tailwind/shadcn-preset";

module.exports = {
  presets: [customThemePreset],
  content: ["./src/**/*.{ts,tsx}"],
};
