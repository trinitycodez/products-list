import type { Config } from "tailwindcss";
import defaultScreens from "tailwindcss/defaultTheme";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "0px",
      xp: "375px",
      ...defaultScreens.screens,
    },
    extend: {
      colors: {
        app: {
          primary: "#2542A6",
          black: "#1D1D1D",
          white: "#FFFFFF",
          grey: "#B8C0CF",
          sub: "#F75767",
          "primary-light": "#5875DA",
          "body-dark": "#464646",
          "text-black": "#757575",
          "trans-brown": "#FFF2EC",
          "trans-white": "#8290AB",
          "trans-blue": "#7D879C",
          "border-color": "#E8E8E8",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        primary: "0px 4px 30px 0px #2542A6AA",
      }
    },
  },
  plugins: [],
};
export default config;
