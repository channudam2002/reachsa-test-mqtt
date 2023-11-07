/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        'koh-Santepheap': ['Koh Santepheap', 'Arial, sans-serif']
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
