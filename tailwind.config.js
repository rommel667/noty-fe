/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
      "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
      extend: {},
  },
  darkMode: "class",
  plugins: [ require('flowbite/plugin')],
  
  }
