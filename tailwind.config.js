/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './index.php',
  ],
  theme: {
    filter: ['responsive'],
    container:{
      center:true,
    },
    screens: {
      'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          light: '#4f83cc',
          DEFAULT: '#1565c0',
          dark: '#003c8f',
        },
        secondary: {
          light: '#ff8a65',
          DEFAULT: '#ff5722',
          dark: '#e64a19',
        },
        neutral: {
          light: '#f5f5f5',
          DEFAULT: '#9e9e9e',
          dark: '#616161',
        },
        accent: {
          light: '#ff80ab',
          DEFAULT: '#ff4081',
          dark: '#f50057',
        },
      },
    },
  },
  plugins: [],
}

