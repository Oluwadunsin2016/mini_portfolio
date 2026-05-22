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
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "modal-in": {
          "0%": { opacity: "0", transform: "scale(0.96) translateY(16px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms ease both",
        "fade-up-slow": "fade-up 900ms ease both",
        "fade-in": "fade-in 500ms ease both",
        float: "float 5s ease-in-out infinite",
        "modal-in": "modal-in 220ms ease both",
        "soft-pulse": "soft-pulse 3.5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
