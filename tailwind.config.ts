import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Poppins', 'sans-serif'], 
      'body': ['"Bespoke Slab"', 'sans-serif'], 
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#7D5BA6',
        secondary: '#E6C229',
        neutral: '#FCFAFA',
        black: '#313638',
      },
    },
  },
  plugins: [],
};
export default config;
