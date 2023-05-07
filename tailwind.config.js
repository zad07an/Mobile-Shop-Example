/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#231F20",
        "primary-orange": "#E06714",
      },
    },
  },
  plugins: [],
};
