import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "colors": {
        "blue": {
          50: "#F1F1F9",
          100: "#E4E3F2",
          200: "#C8C7E5",
          300: "#ADABD8",
          400: "#918FCC",
          500: "#7674BF",
          600: "#504DA8",
          700: "#3C3A7E",
          800: "#282754",
          900: "#14132A",
          950: "#0A0A15"
        },
        "purple": {
          50: "#FEFBFD",
          100: "#FCF3FA",
          200: "#FAEBF6",
          300: "#F6DFF0",
          400: "#F4D7ED",
          500: "#F1CCE8",
          600: "#DE87C8",
          700: "#CA3FA7",
          800: "#8C2673",
          900: "#441338",
          950: "#240A1D"
        }
      }
    },
  },
  plugins: [],
};
export default config;
