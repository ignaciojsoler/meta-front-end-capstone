/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F4CE14',
        'secondary': '#495E57',
        }
      },
      fontFamily: {
        body: ["Karla", "sans-serif"],
        heading: ["Markazi Text", "sans-serif"],
    },
  },
  plugins: [],
}