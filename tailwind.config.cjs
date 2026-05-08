/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#121212",
        panel: "rgba(255,255,255,0.04)",
        panelStrong: "rgba(255,255,255,0.08)",
        muted: "#959595",
        dim: "#707070",
        brand: "#fd6f00",
      },
      fontFamily: {
        lato: ["Lato", "system-ui", "sans-serif"],
        logo: ["K2D", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
