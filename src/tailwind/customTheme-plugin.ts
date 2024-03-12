import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";
import {
  ShadcnThemeColors,
  ShadcnTheme,
  blue_075,
  gray_075,
  green_075,
  neutral_075,
  orange_075,
  red_075,
  rose_075,
  slate_075,
  stone_075,
  violet_075,
  yellow_075,
  zinc_075,
} from "./shadcn-themes";
import { custom_1_075, custom_2_075 } from "./custom-themes";

type CustomTheme = {
  [key: string]: ShadcnThemeColors;
};

const getTheme = (themeObj: ShadcnTheme, themeName: string) => {
  const customTheme: CustomTheme = {};

  customTheme[`[data-theme="${themeName}"]`] = themeObj[":root"];
  customTheme[`[data-theme="${themeName}.dark"]`] = themeObj[".dark"];

  return customTheme;
};

export const defaultTheme = "blue.dark";
export const themeList = [
  { displayName: "Blue", themeName: "blue", themeColors: blue_075 },
  { displayName: "Gray", themeName: "gray", themeColors: gray_075 },
  { displayName: "Green", themeName: "green", themeColors: green_075 },
  { displayName: "Neutral", themeName: "neutral", themeColors: neutral_075 },
  { displayName: "Orange", themeName: "orange", themeColors: orange_075 },
  { displayName: "Red", themeName: "red", themeColors: red_075 },
  { displayName: "Rose", themeName: "rose", themeColors: rose_075 },
  { displayName: "Slate", themeName: "slate", themeColors: slate_075 },
  { displayName: "Stone", themeName: "stone", themeColors: stone_075 },
  { displayName: "Violet", themeName: "violet", themeColors: violet_075 },
  { displayName: "Yellow", themeName: "yellow", themeColors: yellow_075 },
  { displayName: "Zinc", themeName: "zinc", themeColors: zinc_075 },
  { displayName: "Custom 1", themeName: "custom_1", themeColors: custom_1_075 },
  { displayName: "Custom 2", themeName: "custom_2", themeColors: custom_2_075 },
];

export const customThemePlugin = plugin(
  // CSS variable definitions
  function ({ addBase }) {
    addBase(
      themeList.reduce((acc, { themeName, themeColors }) => {
        return { ...acc, ...getTheme(themeColors, themeName) };
      }, blue_075)
    );

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    });
  },
  //   Partial Theme Config
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border) / <alpha-value>)",
          input: "hsl(var(--input) / <alpha-value>)",
          ring: "hsl(var(--ring) / <alpha-value>)",
          background: "hsl(var(--background) / <alpha-value>)",
          foreground: "hsl(var(--foreground) / <alpha-value>)",
          primary: {
            DEFAULT: "hsl(var(--primary) / <alpha-value>)",
            foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
            foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
            foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "hsl(var(--muted) / <alpha-value>)",
            foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "hsl(var(--accent) / <alpha-value>)",
            foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "hsl(var(--popover) / <alpha-value>)",
            foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          },
          card: {
            DEFAULT: "hsl(var(--card) / <alpha-value>)",
            foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        boxShadow: {
          aesthetic: "0 3px 10px rgb(0,0,0,0.2)",
          demure: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          sprightly: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
          intense: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
          champagne: "inset -12px -8px 40px #46464620",
          sleek: "rgba(13, 38, 76, 0.19) 0px 9px 20px",
          full_inner: "inset 0px 2px 25px 4px #00000024",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
        },
      },
    },
  }
);
