import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'appear': {
          'from': {
            'transform': 'translateY(-20px)',
            'opacity': '0'
          },
          'to': {
            'transform': 'translateY(0px)',
            'opacity': '1'
          }
        }
      },
      animation: {
        'animate-appear': 'appear 4s forward'
      }
    },
  },
  plugins: [],
};
export default config;
