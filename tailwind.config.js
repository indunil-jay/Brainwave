/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },

        dark: {
          1: "#0E0C15",
          2: "#15131D",
          3: "#252134",
          4: "#1B1B2E",
          5: "#2E2A41",
          6: "#3F3A52",
          7: "#43435C",
        },

        light: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#6C7275",
          6: "#474060",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },

      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },

      letterSpacing: {
        tagline: ".15em",
      },

      borderWidth: {
        DEFAULT: "0.0625rem",
      },

      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply xl:text-[3rem] xl:leading-[3.75rem] lg:text-[2.5rem] lg:leading-[3.5rem] md:text-[2rem] leading-[2.5rem] text-[1.75rem] font-normal":
            {},
        },

        ".h5": {
          "@apply text-2xl leading-normal": {},
        },

        ".h4": {
          "@apply  text-[2rem] leading-[3rem]": {},
        },

        ".p3": {
          "@apply text-base leading-6 font-light  text-light-3": {},
        },
        ".p2": {
          "@apply font-light text-sm leading-6 md:text-base": {},
        },
        ".p": {
          "@apply text-sm leading-[1.5rem] md:text-base md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-[2rem] font-normal":
            {},
        },
      });
      addUtilities({});
    }),
  ],
};
