module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      blue: {
        100: "#dce9f2",
        200: "#b8d3e6",
        300: "#95bcd9",
        400: "#71a6cd",
        500: "#4e90c0",
        600: "#3e739a",
        700: "#2f5673",
        800: "#1f3a4d",
        900: "#101d26",
      },
      gray: {
          100: "#dedddd",
          200: "#bdbaba",
          300: "#9c9898",
          400: "#7b7575",
          500: "#5a5353",
          600: "#484242",
          700: "#363232",
          800: "#242121",
          900: "#121111"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
