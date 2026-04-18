export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#516447",
        "primary-dim": "#45573c",
        surface: "#fafaf3",
        "surface-container-low": "#f3f4eb",
        "surface-container-lowest": "#ffffff",
        "surface-container-highest": "#dfe5d5",
        "on-surface": "#2e342a",
        "on-surface-variant": "#5b6155",
      },
      fontFamily: {
        headline: ["Noto Serif"],
        body: ["Manrope"],
      },
    },
  },
  plugins: [],
};