/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'veryDarkGray':'hsl(0,0%,17%)',
        'darkGray':'hsl(0, 0%, 59%)',
      },
      screen:{
      
        'sm':'375px',
        'md':'768px',
        'lg':'992px',
        'xl':'1200px',
        '2xl':'1600px',
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
