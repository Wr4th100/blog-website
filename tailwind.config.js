/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "ikaros": ['var(--ikaros-regular)'],
        "inter": ['var(--inter-variable)'],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
