/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'button': '#A1F3FF',
        'avatar': '#0BDEFB',
        'tag': '#03FFF0',
        'todo': '#0381DC',
        'doing': '#EEFF25',
        'completed': '#04FC3B',
        'bg': '#F0EFF2',
        'semi': '#999999',
        'cancel': '#FB0202'
      }
    },
  },
  plugins: [],
}