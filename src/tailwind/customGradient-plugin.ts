import plugin from "tailwindcss/plugin";

const customGradientPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "bg-gradientradial": (value) => ({
          "background-image": `radial-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme("radialGradients") }
    );
    matchUtilities(
      {
        "bg-gradientconic": (value) => ({
          "background-image": `conic-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme("conicGradients") }
    );
  },
  {
    theme: {
      radialGradients: radialGradientPresets(),
      conicGradients: {
        t: "at top",
        tr: "at top right",
        r: "at right",
        br: "at bottom right",
        b: "at bottom",
        bl: "at bottom left",
        l: "at left",
        tl: "at top left",
      },
    },
  }
);

function radialGradientPresets() {
  const shapes = ["circle", "ellipse"];
  const pos = {
    c: "center",
    t: "top",
    b: "bottom",
    l: "left",
    r: "right",
    tl: "top left",
    tr: "top right",
    bl: "bottom left",
    br: "bottom right",
  };

  let result: {
    [key: string]: string;
  } = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}

export default customGradientPlugin;
