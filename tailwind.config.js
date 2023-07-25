/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
const colors = {
  green: {
    DEFAULT: "#149467",
    10: "#E7F6EF",
    20: "#C3E9D8",
    30: "#9CDBC0",
    40: "#72CCA7",
    50: "#4FC193",
    60: "#23B681",
    70: "#1CA776",
    80: "#149467", // Default
    90: "#11825A",
    100: "#075633",
  },
  yellow: {
    DEFAULT: "#FFC007",
    10: "#FFF8E2",
    20: "#FFEBB6",
    30: "#FEE39A",
    40: "#FEDB7B",
    50: "#FED360",
    60: "#FECC4A",
    70: "#FEC539",
    80: "#FFC007", // Default
    90: "#FFAC17",
    100: "#E99601",
  },
  red: {
    DEFAULT: "#D13135",
    10: "#FFEBEE",
    20: "#FECED3",
    30: "#EE9B9C",
    40: "#E37475",
    50: "#ED5554",
    60: "#F2453D",
    70: "#E33B3B",
    80: "#D13135", // Default
    90: "#C42A2E",
    100: "#AE1B1C",
  },
  blue: {
    DEFAULT: "#2278CF",
    10: "#E4F2FD",
    20: "#BCDFFA",
    30: "#92CBF7",
    40: "#68B6F4",
    50: "#48A7F2",
    60: "#2C98F0",
    70: "#288AE2",
    80: "#2278CF", // Default
    90: "#1D68BD",
    100: "#134A9E",
  },
  gray: {
    DEFAULT: "#212121",
    10: "#FAFAFA",
    20: "#F5F5F5",
    30: "#EEEEEE",
    40: "#E0E0E0",
    50: "#BDBDBD",
    60: "#9E9E9E",
    70: "#757575",
    80: "#424242",
    90: "#212121", // Default
    100: "#1A1A1A",
  },
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      muted: colors.gray[60],
      placeholder: colors.gray[70],

      // Gokomodo Color Scheme
      green: colors.green,
      yellow: colors.yellow,
      red: colors.red,
      blue: colors.blue,
      gray: colors.gray,

      // Color Alias
      primary: colors.green,
      warning: colors.yellow,
      danger: colors.red,
      info: colors.blue,
      neutral: colors.gray,
    },
  },
  plugins: [],
};
