/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // BARIS INI KRUSIAL: Ini memberitahu Tailwind untuk memindai semua file React di src/
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0A2542',
        'custom-darkblue': '#061729',
        'custom-gray-text': '#526A84',
        'custom-light-gray': '#F2F6FA',
        'custom-border': '#E8EBF2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}