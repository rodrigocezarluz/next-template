export type ShadcnThemeColors = {
  "--background": string;
  "--foreground": string;
  "--card": string;
  "--card-foreground": string;
  "--popover": string;
  "--popover-foreground": string;
  "--primary": string;
  "--primary-foreground": string;
  "--secondary": string;
  "--secondary-foreground": string;
  "--muted": string;
  "--muted-foreground": string;
  "--accent": string;
  "--accent-foreground": string;
  "--destructive": string;
  "--destructive-foreground": string;
  "--border": string;
  "--input": string;
  "--ring": string;
};

export type ShadcnThemeBase = {
  ":root": ShadcnThemeColors;
  ".dark": ShadcnThemeColors;
};

export type ShadcnTheme = {
  ":root": ShadcnThemeColors & {
    "--radius": string;
  };
  ".dark": ShadcnThemeColors & {
    "--radius": string;
  };
};

export const createShadcnTheme = (
  baseColors: ShadcnThemeBase,
  radius: string
): ShadcnTheme => {
  return {
    ":root": {
      ...baseColors[":root"],
      "--radius": radius,
    },
    ".dark": {
      ...baseColors[".dark"],
      "--radius": radius,
    },
  };
};

const zinc_base: ShadcnThemeBase = {
  ":root": {
    "--background": "0 0% 100%",
    "--foreground": "240 10% 3.9%",
    "--card": "0 0% 100%",
    "--card-foreground": "240 10% 3.9%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "240 10% 3.9%",
    "--primary": "240 5.9% 10%",
    "--primary-foreground": "0 0% 98%",
    "--secondary": "240 4.8% 95.9%",
    "--secondary-foreground": "240 5.9% 10%",
    "--muted": "240 4.8% 95.9%",
    "--muted-foreground": "240 3.8% 46.1%",
    "--accent": "240 4.8% 95.9%",
    "--accent-foreground": "240 5.9% 10%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "240 5.9% 90%",
    "--input": "240 5.9% 90%",
    "--ring": "240 5.9% 10%",
  },
  ".dark": {
    "--background": "240 10% 3.9%",
    "--foreground": "0 0% 98%",
    "--card": "240 10% 3.9%",
    "--card-foreground": "0 0% 98%",
    "--popover": "240 10% 3.9%",
    "--popover-foreground": "0 0% 98%",
    "--primary": "0 0% 98%",
    "--primary-foreground": "240 5.9% 10%",
    "--secondary": "240 3.7% 15.9%",
    "--secondary-foreground": "0 0% 98%",
    "--muted": "240 3.7% 15.9%",
    "--muted-foreground": "240 5% 64.9%",
    "--accent": "240 3.7% 15.9%",
    "--accent-foreground": "0 0% 98%",
    "--destructive": "0 62.8% 30.6%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "240 3.7% 15.9%",
    "--input": "240 3.7% 15.9%",
    "--ring": "240 4.9% 83.9%",
  },
};

const slate_base: ShadcnThemeBase = {
  ":root": {
    "--background": "0 0% 100%",
    "--foreground": "222.2 84% 4.9%",
    "--card": "0 0% 100%",
    "--card-foreground": "222.2 84% 4.9%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "222.2 84% 4.9%",
    "--primary": "222.2 47.4% 11.2%",
    "--primary-foreground": "210 40% 98%",
    "--secondary": "210 40% 96.1%",
    "--secondary-foreground": "222.2 47.4% 11.2%",
    "--muted": "210 40% 96.1%",
    "--muted-foreground": "215.4 16.3% 46.9%",
    "--accent": "210 40% 96.1%",
    "--accent-foreground": "222.2 47.4% 11.2%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "210 40% 98%",
    "--border": "214.3 31.8% 91.4%",
    "--input": "214.3 31.8% 91.4%",
    "--ring": "222.2 84% 4.9%",
  },
  ".dark": {
    "--background": "222.2 84% 4.9%",
    "--foreground": "210 40% 98%",
    "--card": "222.2 84% 4.9%",
    "--card-foreground": "210 40% 98%",
    "--popover": "222.2 84% 4.9%",
    "--popover-foreground": "210 40% 98%",
    "--primary": "210 40% 98%",
    "--primary-foreground": "222.2 47.4% 11.2%",
    "--secondary": "217.2 32.6% 17.5%",
    "--secondary-foreground": "210 40% 98%",
    "--muted": "217.2 32.6% 17.5%",
    "--muted-foreground": "215 20.2% 65.1%",
    "--accent": "217.2 32.6% 17.5%",
    "--accent-foreground": "210 40% 98%",
    "--destructive": "0 62.8% 30.6%",
    "--destructive-foreground": "210 40% 98%",
    "--border": "217.2 32.6% 17.5%",
    "--input": "217.2 32.6% 17.5%",
    "--ring": "212.7 26.8% 83.9",
  },
};

const stone_base: ShadcnThemeBase = {
  ":root": {
    "--background": "0 0% 100%",
    "--foreground": "20 14.3% 4.1%",
    "--card": "0 0% 100%",
    "--card-foreground": "20 14.3% 4.1%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "20 14.3% 4.1%",
    "--primary": "24 9.8% 10%",
    "--primary-foreground": "60 9.1% 97.8%",
    "--secondary": "60 4.8% 95.9%",
    "--secondary-foreground": "24 9.8% 10%",
    "--muted": "60 4.8% 95.9%",
    "--muted-foreground": "25 5.3% 44.7%",
    "--accent": "60 4.8% 95.9%",
    "--accent-foreground": "24 9.8% 10%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "60 9.1% 97.8%",
    "--border": "20 5.9% 90%",
    "--input": "20 5.9% 90%",
    "--ring": "20 14.3% 4.1%",
  },
  ".dark": {
    "--background": "20 14.3% 4.1%",
    "--foreground": "60 9.1% 97.8%",
    "--card": "20 14.3% 4.1%",
    "--card-foreground": "60 9.1% 97.8%",
    "--popover": "20 14.3% 4.1%",
    "--popover-foreground": "60 9.1% 97.8%",
    "--primary": "60 9.1% 97.8%",
    "--primary-foreground": "24 9.8% 10%",
    "--secondary": "12 6.5% 15.1%",
    "--secondary-foreground": "60 9.1% 97.8%",
    "--muted": "12 6.5% 15.1%",
    "--muted-foreground": "24 5.4% 63.9%",
    "--accent": "12 6.5% 15.1%",
    "--accent-foreground": "60 9.1% 97.8%",
    "--destructive": "0 62.8% 30.6%",
    "--destructive-foreground": "60 9.1% 97.8%",
    "--border": "12 6.5% 15.1%",
    "--input": "12 6.5% 15.1%",
    "--ring": "24 5.7% 82.9%",
  },
};

const gray_base: ShadcnThemeBase = {
  ":root": {
    "--background": "0 0% 100%",
    "--foreground": "224 71.4% 4.1%",
    "--card": "0 0% 100%",
    "--card-foreground": "224 71.4% 4.1%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "224 71.4% 4.1%",
    "--primary": "220.9 39.3% 11%",
    "--primary-foreground": "210 20% 98%",
    "--secondary": "220 14.3% 95.9%",
    "--secondary-foreground": "220.9 39.3% 11%",
    "--muted": "220 14.3% 95.9%",
    "--muted-foreground": "220 8.9% 46.1%",
    "--accent": "220 14.3% 95.9%",
    "--accent-foreground": "220.9 39.3% 11%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "210 20% 98%",
    "--border": "220 13% 91%",
    "--input": "220 13% 91%",
    "--ring": "224 71.4% 4.1%",
  },
  ".dark": {
    "--background": "224 71.4% 4.1%",
    "--foreground": "210 20% 98%",
    "--card": "224 71.4% 4.1%",
    "--card-foreground": "210 20% 98%",
    "--popover": "224 71.4% 4.1%",
    "--popover-foreground": "210 20% 98%",
    "--primary": "210 20% 98%",
    "--primary-foreground": "220.9 39.3% 11%",
    "--secondary": "215 27.9% 16.9%",
    "--secondary-foreground": "210 20% 98%",
    "--muted": "215 27.9% 16.9%",
    "--muted-foreground": "217.9 10.6% 64.9%",
    "--accent": "215 27.9% 16.9%",
    "--accent-foreground": "210 20% 98%",
    "--destructive": "0 62.8% 30.6%",
    "--destructive-foreground": "210 20% 98%",
    "--border": "215 27.9% 16.9%",
    "--input": "215 27.9% 16.9%",
    "--ring": "216 12.2% 83.9%",
  },
};

const neutral_base: ShadcnThemeBase = {
  ":root": {
    "--background": "0 0% 100%",
    "--foreground": "0 0% 3.9%",
    "--card": "0 0% 100%",
    "--card-foreground": "0 0% 3.9%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "0 0% 3.9%",
    "--primary": "0 0% 9%",
    "--primary-foreground": "0 0% 98%",
    "--secondary": "0 0% 96.1%",
    "--secondary-foreground": "0 0% 9%",
    "--muted": "0 0% 96.1%",
    "--muted-foreground": "0 0% 45.1%",
    "--accent": "0 0% 96.1%",
    "--accent-foreground": "0 0% 9%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "0 0% 89.8%",
    "--input": "0 0% 89.8%",
    "--ring": "0 0% 3.9%",
  },
  ".dark": {
    "--background": "0 0% 3.9%",
    "--foreground": "0 0% 98%",
    "--card": "0 0% 3.9%",
    "--card-foreground": "0 0% 98%",
    "--popover": "0 0% 3.9%",
    "--popover-foreground": "0 0% 98%",
    "--primary": "0 0% 98%",
    "--primary-foreground": "0 0% 9%",
    "--secondary": "0 0% 14.9%",
    "--secondary-foreground": "0 0% 98%",
    "--muted": "0 0% 14.9%",
    "--muted-foreground": "0 0% 63.9%",
    "--accent": "0 0% 14.9%",
    "--accent-foreground": "0 0% 98%",
    "--destructive": "0 62.8% 30.6%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "0 0% 14.9%",
    "--input": "0 0% 14.9%",
    "--ring": "0 0% 83.1%",
  },
};

const red_base: ShadcnThemeBase = {
  ":root": {
    "--background": "0 0% 100%",
    "--foreground": "0 0% 3.9%",
    "--card": "0 0% 100%",
    "--card-foreground": "0 0% 3.9%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "0 0% 3.9%",
    "--primary": "0 72.2% 50.6%",
    "--primary-foreground": "0 85.7% 97.3%",
    "--secondary": "0 0% 96.1%",
    "--secondary-foreground": "0 0% 9%",
    "--muted": "0 0% 96.1%",
    "--muted-foreground": "0 0% 45.1%",
    "--accent": "0 0% 96.1%",
    "--accent-foreground": "0 0% 9%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "0 0% 89.8%",
    "--input": "0 0% 89.8%",
    "--ring": "0 72.2% 50.6%",
  },
  ".dark": {
    "--background": "0 0% 3.9%",
    "--foreground": "0 0% 98%",
    "--card": "0 0% 3.9%",
    "--card-foreground": "0 0% 98%",
    "--popover": "0 0% 3.9%",
    "--popover-foreground": "0 0% 98%",
    "--primary": "0 72.2% 50.6%",
    "--primary-foreground": "0 85.7% 97.3%",
    "--secondary": "0 0% 14.9%",
    "--secondary-foreground": "0 0% 98%",
    "--muted": "0 0% 14.9%",
    "--muted-foreground": "0 0% 63.9%",
    "--accent": "0 0% 14.9%",
    "--accent-foreground": "0 0% 98%",
    "--destructive": "0 62.8% 30.6%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "0 0% 14.9%",
    "--input": "0 0% 14.9%",
    "--ring": "0 72.2% 50.6%",
  },
};

const rose_base: ShadcnThemeBase = {
  ":root": {
    "--background": "0 0% 100%",
    "--foreground": "240 10% 3.9%",
    "--card": "0 0% 100%",
    "--card-foreground": "240 10% 3.9%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "240 10% 3.9%",
    "--primary": "346.8 77.2% 49.8%",
    "--primary-foreground": "355.7 100% 97.3%",
    "--secondary": "240 4.8% 95.9%",
    "--secondary-foreground": "240 5.9% 10%",
    "--muted": "240 4.8% 95.9%",
    "--muted-foreground": "240 3.8% 46.1%",
    "--accent": "240 4.8% 95.9%",
    "--accent-foreground": "240 5.9% 10%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "240 5.9% 90%",
    "--input": "240 5.9% 90%",
    "--ring": "346.8 77.2% 49.8%",
  },
  ".dark": {
    "--background": "20 14.3% 4.1%",
    "--foreground": "0 0% 95%",
    "--card": "24 9.8% 10%",
    "--card-foreground": "0 0% 95%",
    "--popover": "0 0% 9%",
    "--popover-foreground": "0 0% 95%",
    "--primary": "346.8 77.2% 49.8%",
    "--primary-foreground": "355.7 100% 97.3%",
    "--secondary": "240 3.7% 15.9%",
    "--secondary-foreground": "0 0% 98%",
    "--muted": "0 0% 15%",
    "--muted-foreground": "240 5% 64.9%",
    "--accent": "12 6.5% 15.1%",
    "--accent-foreground": "0 0% 98%",
    "--destructive": "0 62.8% 30.6%",
    "--destructive-foreground": "0 85.7% 97.3%",
    "--border": "240 3.7% 15.9%",
    "--input": "240 3.7% 15.9%",
    "--ring": "346.8 77.2% 49.8%",
  },
};

const orange_base: ShadcnThemeBase = {
  ":root": {
    "--background": "0 0% 100%",
    "--foreground": "20 14.3% 4.1%",
    "--card": "0 0% 100%",
    "--card-foreground": "20 14.3% 4.1%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "20 14.3% 4.1%",
    "--primary": "24.6 95% 53.1%",
    "--primary-foreground": "60 9.1% 97.8%",
    "--secondary": "60 4.8% 95.9%",
    "--secondary-foreground": "24 9.8% 10%",
    "--muted": "60 4.8% 95.9%",
    "--muted-foreground": "25 5.3% 44.7%",
    "--accent": "60 4.8% 95.9%",
    "--accent-foreground": "24 9.8% 10%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "60 9.1% 97.8%",
    "--border": "20 5.9% 90%",
    "--input": "20 5.9% 90%",
    "--ring": "24.6 95% 53.1%",
  },
  ".dark": {
    "--background": "20 14.3% 4.1%",
    "--foreground": "60 9.1% 97.8%",
    "--card": "20 14.3% 4.1%",
    "--card-foreground": "60 9.1% 97.8%",
    "--popover": "20 14.3% 4.1%",
    "--popover-foreground": "60 9.1% 97.8%",
    "--primary": "20.5 90.2% 48.2%",
    "--primary-foreground": "60 9.1% 97.8%",
    "--secondary": "12 6.5% 15.1%",
    "--secondary-foreground": "60 9.1% 97.8%",
    "--muted": "12 6.5% 15.1%",
    "--muted-foreground": "24 5.4% 63.9%",
    "--accent": "12 6.5% 15.1%",
    "--accent-foreground": "60 9.1% 97.8%",
    "--destructive": "0 72.2% 50.6%",
    "--destructive-foreground": "60 9.1% 97.8%",
    "--border": "12 6.5% 15.1%",
    "--input": "12 6.5% 15.1%",
    "--ring": "20.5 90.2% 48.2%",
  },
};

const green_base: ShadcnThemeBase = {
  ":root": {
    "--background": "0 0% 100%",
    "--foreground": "240 10% 3.9%",
    "--card": "0 0% 100%",
    "--card-foreground": "240 10% 3.9%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "240 10% 3.9%",
    "--primary": "142.1 76.2% 36.3%",
    "--primary-foreground": "355.7 100% 97.3%",
    "--secondary": "240 4.8% 95.9%",
    "--secondary-foreground": "240 5.9% 10%",
    "--muted": "240 4.8% 95.9%",
    "--muted-foreground": "240 3.8% 46.1%",
    "--accent": "240 4.8% 95.9%",
    "--accent-foreground": "240 5.9% 10%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "240 5.9% 90%",
    "--input": "240 5.9% 90%",
    "--ring": "142.1 76.2% 36.3%",
  },
  ".dark": {
    "--background": "20 14.3% 4.1%",
    "--foreground": "0 0% 95%",
    "--card": "24 9.8% 10%",
    "--card-foreground": "0 0% 95%",
    "--popover": "0 0% 9%",
    "--popover-foreground": "0 0% 95%",
    "--primary": "142.1 70.6% 45.3%",
    "--primary-foreground": "144.9 80.4% 10%",
    "--secondary": "240 3.7% 15.9%",
    "--secondary-foreground": "0 0% 98%",
    "--muted": "0 0% 15%",
    "--muted-foreground": "240 5% 64.9%",
    "--accent": "12 6.5% 15.1%",
    "--accent-foreground": "0 0% 98%",
    "--destructive": "0 62.8% 30.6%",
    "--destructive-foreground": "0 85.7% 97.3%",
    "--border": "240 3.7% 15.9%",
    "--input": "240 3.7% 15.9%",
    "--ring": "142.4 71.8% 29.2%",
  },
};

const blue_base: ShadcnThemeBase = {
  ":root": {
    "--background": "0 0% 100%",
    "--foreground": "222.2 84% 4.9%",
    "--card": "0 0% 100%",
    "--card-foreground": "222.2 84% 4.9%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "222.2 84% 4.9%",
    "--primary": "221.2 83.2% 53.3%",
    "--primary-foreground": "210 40% 98%",
    "--secondary": "210 40% 96.1%",
    "--secondary-foreground": "222.2 47.4% 11.2%",
    "--muted": "210 40% 96.1%",
    "--muted-foreground": "215.4 16.3% 46.9%",
    "--accent": "210 40% 96.1%",
    "--accent-foreground": "222.2 47.4% 11.2%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "210 40% 98%",
    "--border": "214.3 31.8% 91.4%",
    "--input": "214.3 31.8% 91.4%",
    "--ring": "221.2 83.2% 53.3%",
  },
  ".dark": {
    "--background": "222.2 84% 4.9%",
    "--foreground": "210 40% 98%",
    "--card": "222.2 84% 4.9%",
    "--card-foreground": "210 40% 98%",
    "--popover": "222.2 84% 4.9%",
    "--popover-foreground": "210 40% 98%",
    "--primary": "217.2 91.2% 59.8%",
    "--primary-foreground": "222.2 47.4% 11.2%",
    "--secondary": "217.2 32.6% 17.5%",
    "--secondary-foreground": "210 40% 98%",
    "--muted": "217.2 32.6% 17.5%",
    "--muted-foreground": "215 20.2% 65.1%",
    "--accent": "217.2 32.6% 17.5%",
    "--accent-foreground": "210 40% 98%",
    "--destructive": "0 62.8% 30.6%",
    "--destructive-foreground": "210 40% 98%",
    "--border": "217.2 32.6% 17.5%",
    "--input": "217.2 32.6% 17.5%",
    "--ring": "224.3 76.3% 48%",
  },
};

const yellow_base: ShadcnThemeBase = {
  ":root": {
    "--background": "0 0% 100%",
    "--foreground": "20 14.3% 4.1%",
    "--card": "0 0% 100%",
    "--card-foreground": "20 14.3% 4.1%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "20 14.3% 4.1%",
    "--primary": "47.9 95.8% 53.1%",
    "--primary-foreground": "26 83.3% 14.1%",
    "--secondary": "60 4.8% 95.9%",
    "--secondary-foreground": "24 9.8% 10%",
    "--muted": "60 4.8% 95.9%",
    "--muted-foreground": "25 5.3% 44.7%",
    "--accent": "60 4.8% 95.9%",
    "--accent-foreground": "24 9.8% 10%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "60 9.1% 97.8%",
    "--border": "20 5.9% 90%",
    "--input": "20 5.9% 90%",
    "--ring": "20 14.3% 4.1%",
  },
  ".dark": {
    "--background": "20 14.3% 4.1%",
    "--foreground": "60 9.1% 97.8%",
    "--card": "20 14.3% 4.1%",
    "--card-foreground": "60 9.1% 97.8%",
    "--popover": "20 14.3% 4.1%",
    "--popover-foreground": "60 9.1% 97.8%",
    "--primary": "47.9 95.8% 53.1%",
    "--primary-foreground": "26 83.3% 14.1%",
    "--secondary": "12 6.5% 15.1%",
    "--secondary-foreground": "60 9.1% 97.8%",
    "--muted": "12 6.5% 15.1%",
    "--muted-foreground": "24 5.4% 63.9%",
    "--accent": "12 6.5% 15.1%",
    "--accent-foreground": "60 9.1% 97.8%",
    "--destructive": "0 62.8% 30.6%",
    "--destructive-foreground": "60 9.1% 97.8%",
    "--border": "12 6.5% 15.1%",
    "--input": "12 6.5% 15.1%",
    "--ring": "35.5 91.7% 32.9%",
  },
};

const violet_base: ShadcnThemeBase = {
  ":root": {
    "--background": "0 0% 100%",
    "--foreground": "224 71.4% 4.1%",
    "--card": "0 0% 100%",
    "--card-foreground": "224 71.4% 4.1%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "224 71.4% 4.1%",
    "--primary": "262.1 83.3% 57.8%",
    "--primary-foreground": "210 20% 98%",
    "--secondary": "220 14.3% 95.9%",
    "--secondary-foreground": "220.9 39.3% 11%",
    "--muted": "220 14.3% 95.9%",
    "--muted-foreground": "220 8.9% 46.1%",
    "--accent": "220 14.3% 95.9%",
    "--accent-foreground": "220.9 39.3% 11%",
    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "210 20% 98%",
    "--border": "220 13% 91%",
    "--input": "220 13% 91%",
    "--ring": "262.1 83.3% 57.8%",
  },
  ".dark": {
    "--background": "224 71.4% 4.1%",
    "--foreground": "210 20% 98%",
    "--card": "224 71.4% 4.1%",
    "--card-foreground": "210 20% 98%",
    "--popover": "224 71.4% 4.1%",
    "--popover-foreground": "210 20% 98%",
    "--primary": "263.4 70% 50.4%",
    "--primary-foreground": "210 20% 98%",
    "--secondary": "215 27.9% 16.9%",
    "--secondary-foreground": "210 20% 98%",
    "--muted": "215 27.9% 16.9%",
    "--muted-foreground": "217.9 10.6% 64.9%",
    "--accent": "215 27.9% 16.9%",
    "--accent-foreground": "210 20% 98%",
    "--destructive": "0 62.8% 30.6%",
    "--destructive-foreground": "210 20% 98%",
    "--border": "215 27.9% 16.9%",
    "--input": "215 27.9% 16.9%",
    "--ring": "263.4 70% 50.4%",
  },
};

export const zinc_0 = createShadcnTheme(zinc_base, "0rem");
export const zinc_025 = createShadcnTheme(zinc_base, "0.25rem");
export const zinc_05 = createShadcnTheme(zinc_base, "0.5rem");
export const zinc_075 = createShadcnTheme(zinc_base, "0.75rem");
export const zinc_10 = createShadcnTheme(zinc_base, "1rem");

export const slate_0 = createShadcnTheme(slate_base, "0rem");
export const slate_025 = createShadcnTheme(slate_base, "0.25rem");
export const slate_05 = createShadcnTheme(slate_base, "0.5rem");
export const slate_075 = createShadcnTheme(slate_base, "0.75rem");
export const slate_10 = createShadcnTheme(slate_base, "1rem");

export const stone_0 = createShadcnTheme(stone_base, "0rem");
export const stone_025 = createShadcnTheme(stone_base, "0.25rem");
export const stone_05 = createShadcnTheme(stone_base, "0.5rem");
export const stone_075 = createShadcnTheme(stone_base, "0.75rem");
export const stone_10 = createShadcnTheme(stone_base, "1rem");

export const gray_0 = createShadcnTheme(gray_base, "0rem");
export const gray_025 = createShadcnTheme(gray_base, "0.25rem");
export const gray_05 = createShadcnTheme(gray_base, "0.5rem");
export const gray_075 = createShadcnTheme(gray_base, "0.75rem");
export const gray_10 = createShadcnTheme(gray_base, "1rem");

export const neutral_0 = createShadcnTheme(neutral_base, "0rem");
export const neutral_025 = createShadcnTheme(neutral_base, "0.25rem");
export const neutral_05 = createShadcnTheme(neutral_base, "0.5rem");
export const neutral_075 = createShadcnTheme(neutral_base, "0.75rem");
export const neutral_10 = createShadcnTheme(neutral_base, "1rem");

export const red_0 = createShadcnTheme(red_base, "0rem");
export const red_025 = createShadcnTheme(red_base, "0.25rem");
export const red_05 = createShadcnTheme(red_base, "0.5rem");
export const red_075 = createShadcnTheme(red_base, "0.75rem");
export const red_10 = createShadcnTheme(red_base, "1rem");

export const rose_0 = createShadcnTheme(rose_base, "0rem");
export const rose_025 = createShadcnTheme(rose_base, "0.25rem");
export const rose_05 = createShadcnTheme(rose_base, "0.5rem");
export const rose_075 = createShadcnTheme(rose_base, "0.75rem");
export const rose_10 = createShadcnTheme(rose_base, "1rem");

export const orange_0 = createShadcnTheme(orange_base, "0rem");
export const orange_025 = createShadcnTheme(orange_base, "0.25rem");
export const orange_05 = createShadcnTheme(orange_base, "0.5rem");
export const orange_075 = createShadcnTheme(orange_base, "0.75rem");
export const orange_10 = createShadcnTheme(orange_base, "1rem");

export const green_0 = createShadcnTheme(green_base, "0rem");
export const green_025 = createShadcnTheme(green_base, "0.25rem");
export const green_05 = createShadcnTheme(green_base, "0.5rem");
export const green_075 = createShadcnTheme(green_base, "0.75rem");
export const green_10 = createShadcnTheme(green_base, "1rem");

export const blue_0 = createShadcnTheme(blue_base, "0rem");
export const blue_025 = createShadcnTheme(blue_base, "0.25rem");
export const blue_05 = createShadcnTheme(blue_base, "0.5rem");
export const blue_075 = createShadcnTheme(blue_base, "0.75rem");
export const blue_10 = createShadcnTheme(blue_base, "1rem");

export const yellow_0 = createShadcnTheme(yellow_base, "0rem");
export const yellow_025 = createShadcnTheme(yellow_base, "0.25rem");
export const yellow_05 = createShadcnTheme(yellow_base, "0.5rem");
export const yellow_075 = createShadcnTheme(yellow_base, "0.75rem");
export const yellow_10 = createShadcnTheme(yellow_base, "1rem");

export const violet_0 = createShadcnTheme(violet_base, "0rem");
export const violet_025 = createShadcnTheme(violet_base, "0.25rem");
export const violet_05 = createShadcnTheme(violet_base, "0.5rem");
export const violet_075 = createShadcnTheme(violet_base, "0.75rem");
export const violet_10 = createShadcnTheme(violet_base, "1rem");
