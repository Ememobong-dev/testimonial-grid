import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moderateViolet: "hsl(263, 55%, 52%)",
        veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        veryDarkBlackishBlue: "hsl(219, 29%, 14%)",
        lightGray: "hsl(0, 0%, 81%)",
        lightGrayishBlue: "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        barLowReg : ["barlow-regular", "sans-serif"],
        barLowBold : ["barlow-bold", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
