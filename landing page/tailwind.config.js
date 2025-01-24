/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        "bg-color": "#3b3663", 
        "bg-color1": "#696687", 
      },
    },
  },
  plugins: [],
}

