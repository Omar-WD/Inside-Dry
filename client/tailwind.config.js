/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '380px',
        'xs': '530px',
        'sm': '720px',
        'md': '950px',
        'lg': '1150px',
        'xl': '1280px',
        '2xl': '1536px',
        'tall': {'raw': '(min-height: 800px)  and (max-width: 450px)'},
        'tall2': {'raw': '(min-height: 650px)  and (min-width:451px) and (max-width: 529px)'},
      },
      colors: {
        'my-blue': '#155EA6',
        'my-black': '#514d4a',
        'my-lightBlue': '#5898D9',
        'my-lighterBlue': '#91BDF6',
      },
      backgroundImage: {
        'sub1': "url('./13.webp')",
        'sub2': "url('./14.webp')",
        'sub3': "url('./15.webp')",
      },
    },
  },
  plugins: [],
}

