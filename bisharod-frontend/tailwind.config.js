/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bisharod: {
          orange: '#FFA500',
          red: '#EF4444',
          'light-orange': '#FFB84D',
        }
      }
    },
  },
  plugins: [],
}

