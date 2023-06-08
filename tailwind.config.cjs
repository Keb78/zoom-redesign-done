/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "san-serif"],
        "open-sans": ['"Open Sans"'],
        handwriting: ["Pacifico"],
      },
      colors: {
        "zoom-blue": "#0b5cff",
      },
    },
  },
  plugins: [],
};
