/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        "yellow-theme": "#FDC52C",
        "red-theme": "#DA3F3F",
        "orange-theme": "#F57356",
        "purblue-theme": "#181733",
        "darkblue-theme": "#0A0927",
        "gray-theme": "#616166",
        "light-gray-theme": "#ECECEC",
        "purple-theme": "#5C4474",
      },
    },
  },
  plugins: [],
};
