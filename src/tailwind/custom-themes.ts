import {
  amber,
  black,
  blue,
  cyan,
  emerald,
  fuchsia,
  gray,
  green,
  indigo,
  lime,
  neutral,
  orange,
  pink,
  purple,
  red,
  rose,
  sky,
  slate,
  stone,
  teal,
  violet,
  white,
  yellow,
  zinc,
} from "tailwindcss/colors";

import {
  ShadcnThemeColors,
  ShadcnThemeBase,
  ShadcnTheme,
  createShadcnTheme,
} from "./shadcn-themes";

import { hexToHSL } from "../lib/theme-helper";

const custom_base_1: ShadcnThemeBase = {
  ":root": {
    "--background": hexToHSL(sky[100]), // Light blue background
    "--foreground": hexToHSL(black),
    "--card": hexToHSL(blue[700]), // Darker blue for cards
    "--card-foreground": hexToHSL(white),
    "--popover": hexToHSL(cyan[400]), // Lighter cyan for popovers
    "--popover-foreground": hexToHSL(black),
    "--primary": hexToHSL(blue[500]), // Mid blue for primary elements
    "--primary-foreground": hexToHSL(white),
    "--secondary": hexToHSL(indigo[400]), // Indigo for secondary elements
    "--secondary-foreground": hexToHSL(white),
    "--muted": hexToHSL(gray[400]), // Light gray for muted elements
    "--muted-foreground": hexToHSL(black),
    "--accent": hexToHSL(teal[600]), // Teal for accent elements
    "--accent-foreground": hexToHSL(white),
    "--destructive": hexToHSL(red[500]), // Red for destructive elements
    "--destructive-foreground": hexToHSL(white),
    "--border": hexToHSL(gray[300]), // Light gray for borders
    "--input": hexToHSL(white), // White background for inputs
    "--ring": hexToHSL(blue[400]), // Blue for focus rings
  },
  ".dark": {
    "--background": hexToHSL(blue[800]), // Dark blue background
    "--foreground": hexToHSL(white),
    "--card": hexToHSL(blue[900]), // Even darker blue for cards
    "--card-foreground": hexToHSL(white),
    "--popover": hexToHSL(cyan[600]), // Cyan for popovers
    "--popover-foreground": hexToHSL(white),
    "--primary": hexToHSL(blue[600]), // Primary blue with slight adjustment
    "--primary-foreground": hexToHSL(white),
    "--secondary": hexToHSL(indigo[500]), // Darker indigo for secondary elements
    "--secondary-foreground": hexToHSL(white),
    "--muted": hexToHSL(gray[600]), // Mid gray for muted elements
    "--muted-foreground": hexToHSL(white),
    "--accent": hexToHSL(teal[700]), // Teal for accent elements
    "--accent-foreground": hexToHSL(white),
    "--destructive": hexToHSL(red[600]), // Red for destructive elements
    "--destructive-foreground": hexToHSL(white),
    "--border": hexToHSL(gray[500]), // Mid gray for borders
    "--input": hexToHSL(gray[100]), // Light gray background for inputs
    "--ring": hexToHSL(blue[500]), // Blue for focus rings
  },
};

const custom_base_2: ShadcnThemeBase = {
  ":root": {
    "--background": hexToHSL(emerald[100]), // Light green background
    "--foreground": hexToHSL(black),
    "--card": hexToHSL(green[700]), // Darker green for cards
    "--card-foreground": hexToHSL(white),
    "--popover": hexToHSL(lime[400]), // Lighter lime for popovers
    "--popover-foreground": hexToHSL(black),
    "--primary": hexToHSL(green[500]), // Mid green for primary elements
    "--primary-foreground": hexToHSL(white),
    "--secondary": hexToHSL(teal[400]), // Teal for secondary elements
    "--secondary-foreground": hexToHSL(black),
    "--muted": hexToHSL(gray[400]), // Light gray for muted elements
    "--muted-foreground": hexToHSL(black),
    "--accent": hexToHSL(cyan[600]), // Cyan for accent elements
    "--accent-foreground": hexToHSL(black),
    "--destructive": hexToHSL(red[500]), // Red for destructive elements
    "--destructive-foreground": hexToHSL(white),
    "--border": hexToHSL(gray[300]), // Light gray for borders
    "--input": hexToHSL(white), // White background for inputs
    "--ring": hexToHSL(green[400]), // Green for focus rings
  },
  ".dark": {
    "--background": hexToHSL(green[800]), // Dark green background
    "--foreground": hexToHSL(white),
    "--card": hexToHSL(green[900]), // Even darker green for cards
    "--card-foreground": hexToHSL(white),
    "--popover": hexToHSL(lime[600]), // Lime for popovers
    "--popover-foreground": hexToHSL(white),
    "--primary": hexToHSL(green[600]), // Primary green with slight adjustment
    "--primary-foreground": hexToHSL(white),
    "--secondary": hexToHSL(teal[500]), // Darker teal for secondary elements
    "--secondary-foreground": hexToHSL(white),
    "--muted": hexToHSL(gray[600]), // Mid gray for muted elements
    "--muted-foreground": hexToHSL(white),
    "--accent": hexToHSL(cyan[700]), // Cyan for accent elements
    "--accent-foreground": hexToHSL(white),
    "--destructive": hexToHSL(red[600]), // Red for destructive elements
    "--destructive-foreground": hexToHSL(white),
    "--border": hexToHSL(gray[500]), // Mid gray for borders
    "--input": hexToHSL(gray[100]), // Light gray background for inputs
    "--ring": hexToHSL(green[500]), // Green for focus rings
  },
};

export const custom_1_0: ShadcnTheme = createShadcnTheme(custom_base_1, "0rem");
export const custom_1_025: ShadcnTheme = createShadcnTheme(
  custom_base_1,
  "0.25rem"
);
export const custom_1_05: ShadcnTheme = createShadcnTheme(
  custom_base_1,
  "0.5rem"
);
export const custom_1_075: ShadcnTheme = createShadcnTheme(
  custom_base_1,
  "0.75rem"
);
export const custom_1_10: ShadcnTheme = createShadcnTheme(
  custom_base_1,
  "1rem"
);

export const custom_2_0: ShadcnTheme = createShadcnTheme(custom_base_2, "0rem");
export const custom_2_025: ShadcnTheme = createShadcnTheme(
  custom_base_2,
  "0.25rem"
);
export const custom_2_05: ShadcnTheme = createShadcnTheme(
  custom_base_2,
  "0.5rem"
);
export const custom_2_075: ShadcnTheme = createShadcnTheme(
  custom_base_2,
  "0.75rem"
);
export const custom_2_10: ShadcnTheme = createShadcnTheme(
  custom_base_2,
  "1rem"
);
