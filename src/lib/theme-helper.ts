// Function to convert a hex string to an RGB string
export function hexToRGB(hex: string): string {
  // Remove the "#" character if present
  hex = hex.replace(/^#/, "");

  // Parse the hex values for R, G, and B components
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Return the RGB string
  return `${r} ${g} ${b}`;
}

// Function to convert a hex string to an HSL string
export function hexToHSL(hex: string): string {
  // Convert hex to RGB first
  const rgb = hexToRGB(hex);

  // Parse the RGB values
  const [r, g, b] = rgb.split(" ").map(Number);

  // Normalize the RGB values to the range [0, 1]
  const normR = r / 255;
  const normG = g / 255;
  const normB = b / 255;

  // Calculate H, S, and L
  const cMax = Math.max(normR, normG, normB);
  const cMin = Math.min(normR, normG, normB);
  const delta = cMax - cMin;

  let h = 0;
  let s = 0;
  let l = (cMax + cMin) / 2;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    switch (cMax) {
      case normR:
        h = ((normG - normB) / delta) % 6;
        break;
      case normG:
        h = (normB - normR) / delta + 2;
        break;
      case normB:
        h = (normR - normG) / delta + 4;
        break;
    }
    h = Math.round(h * 60);
  }

  // Ensure h is non-negative
  if (h < 0) {
    h += 360;
  }

  // Format HSL string
  return `${h} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

export function hslToHex(hsl: string): string {
  // Split the HSL string into individual components
  const [h, s_, l_] = hsl.split(" ").map((component) => parseFloat(component));
  const s = s_ / 100;
  const l = l_ / 100;

  // Convert HSL to RGB
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  // Convert RGB to hex
  const hexR = Math.round((r + m) * 255)
    .toString(16)
    .padStart(2, "0");
  const hexG = Math.round((g + m) * 255)
    .toString(16)
    .padStart(2, "0");
  const hexB = Math.round((b + m) * 255)
    .toString(16)
    .padStart(2, "0");

  // Combine RGB components to get the hex color
  return `#${hexR}${hexG}${hexB}`;
}
