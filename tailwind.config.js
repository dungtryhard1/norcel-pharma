/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#00205B",
        secondColor: "#BA0C2F",
      },
      fontFamily: {
        mainFont: ['"Plus Jakarta Sans"', "sans-serif"],
        titleFont: ["Anton", "sans-serif"],
      },
      height: {
        'calc-100vh-minus-267': 'calc(100vh - 267px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
