import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],


  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif'
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      currentColor: "currentColor",

      blue: {
        300: '#4EA8DE',
        600: '#1E6F9F',
      },
      violet: {
        300: '#8284FA',
        500: '#5E60CE',
      },
      gray: {
        100: '#F2F2F2',
        200: '#D9D9D9',
        300: '#808080',
        400: '#333333',
        500: '#262626',
        600: '#1A1A1A',
        700: '#0D0D0D'
      },
      danger: '#E25858'
    },
    backgroundImage: {
      hero:'linear-gradient(180deg, rgba(13,13,13,1) 21%, rgba(26,26,26,1) 20%)'
    },
    extend: {},
  },
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
            maxWidth: "1440px",
          },
        },
        {
          "@media (min-width: 768px) ": {
            ".container": {
              paddingLeft: "3rem",
              paddingRight: "3rem",
            },
          },
        },
        {
          "@media (min-width: 1280px) ": {
            ".container": {
              paddingLeft: "22rem",
              paddingRight: "22rem",
            },
          },
        },
      ]);
    }),
  ],
} satisfies Config;

