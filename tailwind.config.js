/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#00205B",
      },
      fontFamily: {
        mainFont: ['"Plus Jakarta Sans"', "sans-serif"],
        titleFont: ["Anton", "sans-serif"],
      },
      aspectRatio: {
        '2.4': '2.4 / 1', 
      },
    },
  },
  plugins: [],
};
