/** @type {import("prettier").Config} */
export default {
  astroAllowShorthand: true,
  bracketSameLine: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
