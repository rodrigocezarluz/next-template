import { useMemo } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import { customThemePreset } from "@/tailwind/customTheme-preset";

export default function useTailwind() {
  const tailwind = useMemo(() => resolveConfig(customThemePreset), []);

  return tailwind;
}
