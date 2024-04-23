import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024",
        xl: "1280px",
      },
      colors: {
        mks_blue: "#0F52BA",
        mks_white: "#FFFFFF",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
