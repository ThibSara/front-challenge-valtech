/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {colors: {
        'primary': '#FF5959',  
        'light-grey': '#F3F2EF',
        'medium-grey': '#D1D3CA',
        'dark-grey':'#171717',
      },
    spacing: {
        '20': '20px',
        '40': '40px',
        '60': '60px',
        '80': '80px',
        '120': '120px',
      },
    },
  },
  plugins: [],
}

