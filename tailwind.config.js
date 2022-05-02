module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 , transform: "scale(0.8)" },
          "100%": { opacity: 100, transform: "scale(1)" },
        },
      },
      colors: {
        bluePigment: {
          100: "#d5d8e9",
          200: "#acb0d2",
          300: "#8289bc",
          400: "#5961a5",
          500: "#2f3a8f",
          600: "#262e72",
          700: "#1c2356",
          800: "#131739",
          900: "#090c1d"
        },
        salmon: {
          100: "#ffe5e2",
          200: "#ffcbc5",
          300: "#feb2a7",
          400: "#fe988a",
          500: "#fe7e6d",
          600: "#cb6557",
          700: "#984c41",
          800: "#66322c",
          900: "#331916"
        },
        mistyRose: {
          100: "#fffbfb",
          200: "#fff7f6",
          300: "#fef4f2",
          400: "#fef0ed",
          500: "#feece9",
          600: "#cbbdba",
          700: "#988e8c",
          800: "#665e5d",
          900: "#332f2f"
        },
      }
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [],
}