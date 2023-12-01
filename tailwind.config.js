/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
       transparent: 'transparent',
       current: 'currentColor',
      'bg-primary': '#22272e',
      'bg-secondary': '#354247',
      'bg-tertiary': '#373e47',
      'text-primary': '#ADBAC7',
      'text-secondary': '#636E7B'
    },
  },
  plugins: [],
}