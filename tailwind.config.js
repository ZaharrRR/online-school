/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus", "active", "odd", "even", "dark"],
      textColor: ["hover", "focus", "active", "odd", "even", "dark"],
      backgroundGradient: true,
    },
  },
  plugins: [],
};
