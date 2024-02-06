import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  plugins: [
  ],
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      currentColor: "currentColor",

      green: {
        300: '#00B37E',
        500: '#00875F',
        700: '#015F43',
      },
      red: {
        500: '#F03847',
        700: '#7A1921',
      },
      gray: {
        100: '#E1E1E6',
        200: '#C4C4CC',
        300: '#8D8D99',
        400: '#7C7C8A',
        500: '#323238',
        600: '#29292E',
        700: '#202024',
        900: '#121214',
      },
      yellow: {
        500: '#FBA94C',
      }

    },
    extend: {},
  },
} satisfies Config;
