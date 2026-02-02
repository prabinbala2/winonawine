import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // 👇 VERY IMPORTANT if you are using /src
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        winonaYellow: "#f5c84b",
        winonaRed: "#b10f1b",
        winonaBg: "#f6f5f2",
      },
      letterSpacing: {
        widest: "0.30em",
      },
    },
  },

  plugins: [],
};

export default config;
