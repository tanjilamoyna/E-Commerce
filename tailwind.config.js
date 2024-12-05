/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#333333",
        secondary: "#666666",
        brand: "#edb73a",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
