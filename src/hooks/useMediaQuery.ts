"use client";

import { useState, useEffect } from "react";
import { screens } from "tailwindcss/defaultTheme";
import { useDebouncedCallback } from "use-debounce";

interface WindowSize {
  width: number;
  height: number;
}

interface Breakpoints {
  mobile: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
}

interface ResponsiveHookResult {
  windowSize: WindowSize;
  breakpoint: string;
}

export const breakpoints = {
  mobile: 0,
  sm: parseInt(screens.sm),
  md: parseInt(screens.md),
  lg: parseInt(screens.lg),
  xl: parseInt(screens.xl),
  "2xl": parseInt(screens["2xl"]),
};

function useMediaQuery(): ResponsiveHookResult {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });
  const [breakpoint, setBreakpoint] = useState<string>("none");
  const handleResize = useDebouncedCallback(() => {
    const width = window.innerWidth;
    let newBreakpoint: string = "mobile";

    for (const breakpointName in breakpoints) {
      if (width >= breakpoints[breakpointName as keyof Breakpoints]) {
        newBreakpoint = breakpointName;
      }
    }
    console.log(newBreakpoint);

    setWindowSize({
      width,
      height: window.innerHeight,
    });
    setBreakpoint(newBreakpoint);
  }, 100);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return { windowSize, breakpoint };
}

export default useMediaQuery;
