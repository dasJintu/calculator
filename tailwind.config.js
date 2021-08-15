module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        "key-red": "hsl(25, 98%, 40%)",
        "key-red-shadow": "hsl(25, 99%, 27%)",
        "key-blue": "hsl(185, 42%, 37%)",
        "key-blue-shadow": "hsl(185, 58%, 25%)",
        "key-white": "hsl(45, 7%, 89%)",
        "key-white-shadow": "hsl(35, 11%, 61%)",
        "light-keypad-bg": "hsl(0, 5%, 81%)",
        "dark-keypad-bg": "hsl(223, 31%, 20%)",
        "screen-bg": "hsl(0, 0%, 93%)",
        "dark-screen-bg": "hsl(224, 36%, 15%)",
        "light-background": "hsl(0, 0%, 90%)",
        "dark-background": "hsl(222, 26%, 31%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
