export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //   gridTemplateColumns: { card: "repeat(auto-fit, minmax(20em, 1fr))" },
      // },
      gridTemplateColumns: { card: "repeat(auto-fill, minmax(22rem, 1fr))" },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui"), "prettier-plugin-tailwindcss"],
};
