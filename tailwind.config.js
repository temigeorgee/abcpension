const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        secondary: "#F8FFF4",
        body: "#22c55ede",
        blak: "#000000",
        "blak-100": "#21312a",
      },
      backgroundImage: (theme) => ({
        "goal-pattern": "url('/svg/pattern.svg')",
        "value-pattern": "url('/svg/valueBg.svg')",
        "header-bg":
          "url('https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?cs=srgb&dl=pexels-pixabay-45842.jpg&fm=jpg&_gl=1*ytxz94*_ga*MTg1OTgzODQ3OS4xNjY1NTg2MzM1*_ga_8JE65Q40S6*MTY2NjgwODYzMi4yLjEuMTY2NjgwODY5Mi4wLjAuMA..')",
      }),
      animation: {
        joined: "joined 3s ease-in-out",
        joinedColor: "joinedColor 3s ease-in-out",
      },
      keyframes: {
        joined: {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(150px, -110px)" },
        },
        joinedColor: {
          "0%": { backgroundColor: colors.primary, color: colors.white },
          "100%": { backgroundColor: colors.white, color: colors.primary },
        },
      },
      gridTemplateColumns: {
        "why-layout": "repeat(4, minmax(0, 310px))",
      },
      lineHeight: {
        12: "3rem",
        "extra-loose": "3.5rem",
      },
      fontFamily: {
        playball: ["Playball", "cursive"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
