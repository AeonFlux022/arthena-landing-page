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
        primary: {
          light: '#7272a1',
          DEFAULT: '#666699', // web safe color
          dark: '#47476b',
        },
        secondary: {
          light: '#ffd65a',
          DEFAULT: '#ffcc33', // web safe color
          dark: '#ffc20c', 
        },
        neutral: '#FCFAFA',
        black: '#313638',
      },
    },
  },
  plugins: [],
};
export default config;
