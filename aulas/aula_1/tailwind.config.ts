import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  plugins: [
    plugin(({ addComponents }) => {
      addComponents([
        {
          ".container": {
            paddingLeft: "1.875rem",
            paddingRight: "1.875rem",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            maxWidth: "1280px",
          },
        },
        {
          "@media (min-width: 1440px) ": {
            ".container": {
              paddingLeft: "10rem",
              paddingRight: "10rem",
            },
          },
        },
      ]);
    }),
  ],
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      current: "currentColor",

      green: {
        300: "#00B37E",
        500: "#00875F",
      },

      gray: {
        200: "#E1E1E6",
        300: "#C4C4CC",
        400: "#8D8D99",
        500: "#7C7C8A",
        800: "#323238",
        900: "#202024",
        950: "#121214",
      },
      red: {
        500: "#F75A68",
      },
    },
  },
} satisfies Config;
