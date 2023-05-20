/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  variants: {
    extend: {
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
      transitionDuration: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
};
