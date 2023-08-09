/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      backgroundImage: (theme) => ({
        "gradient-secondary": `linear-gradient( to left, ${theme(
          "colors.yellow"
        )}, ${theme("colors.orange")})`,
        "gradient-primary": `linear-gradient(to right, ${theme(
          "colors.orange"
        )}, ${theme("colors.pink")})`,

        "gradient-navbar": `linear-gradient(to right, ${theme(
          "colors.gray-light"
        )}, ${theme("colors.gray-dark")})`,
      }),
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
