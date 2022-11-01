/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundColor: {
      'facebook': '#EFF2F5',
      'white': '#ffffff',
      'facebook-blue': 'rgb(26,115,227)',
      'signup-button': '#42B729'
    },
    borderColor: {
      inputBorder: '#DCDFE2'
    },
    outlineColor: {
      inputOutline: 'rgb(26,115,227)'
    },
    borderWidth: {
      'border-1': '1px'
    },
    extend: {
      spacing :{
        'space': '6.5rem',
        '4.5/12': '38%',
        '3.5/12': '26%',
        '11.5/12': '95%'
      },
      colors: {
        'footer-gray': '#737373',
        'footer-gray-inactive': '#8A8D91'
      }
    }
  },
  plugins: [],
}
