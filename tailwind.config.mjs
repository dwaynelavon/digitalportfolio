/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        azure: {
          DEFAULT: "#62A3F2",
          50: "#E6F0FD",
          100: "#D3E5FB",
          200: "#ADCFF8",
          300: "#88B9F5",
          400: "#62A3F2",
          500: "#2E85EE",
          600: "#1169D2",
          700: "#0D4F9F",
          800: "#09356B",
          900: "#051B37",
          950: "#020E1D",
        },
        lavender: {
          DEFAULT: "#423255",
          50: "#DCD4E5",
          100: "#D1C7DE",
          200: "#BCADCF",
          300: "#A893C0",
          400: "#937AB1",
          500: "#7E60A1",
          600: "#6A5088",
          700: "#56416F",
          800: "#423255",
          900: "#271D32",
          950: "#191320",
        },
        neutral: {
          DEFAULT: "#1A1A1A",
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#424242",
          800: "#333333",
          900: "#1E1E1E",
          950: "#0D0D0D",
        },
      },
    },
  },
  plugins: [],
};
