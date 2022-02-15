module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      cherry: ["Cherry Swash", "cursive"],
      sansita: ["Sansita Swashed", "cursive"],
      regularSansita: ["Sansita", "sans-serif"],
      ranga: ["Ranga", "cursive"],
      varela: ["Varela Round", "sans-serif"],
    },

    extend: {
      colors: {
        darkRed: "#9D0343",
        darkPink: "#F94892",
      },
    },
  },
  plugins: [],
};
