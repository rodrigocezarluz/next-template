/** @type {import('tailwindcss').Config} */

import { shadcnPreset } from "./tailwind/shadcn-preset";

module.exports = {
  presets: [shadcnPreset],
  content: ["./src/**/*.{ts,tsx}"],
};
