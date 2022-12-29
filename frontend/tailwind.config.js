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
    outlineColor: {
      inputOutline: 'rgb(26,115,227)'
    },
    borderWidth: {
      'border-1': '1px',
      '0.5': '0.5px'
    },
    extend: {
      spacing :{
        'space': '6.5rem',
        '30': '120px',
        '34': '8.75em',
        '38': '9.5em',
        '42' : '168px',
        '104': '390px',
        '2.5': '.35rem',
        '4.5/12': '38%',
        '3.5/12': '26.5%',
        '3.7/12': '29%',
        '11.5/12': '95%'
      },
      colors: {
        'footer-gray': '#737373',
        'footer-gray-inactive': '#8A8D91',
        'black': '#000000',
        'hr-gray': '#DADDE1',
        'input-gray': '#F5F6F7',
        'label': 'rgb(96, 103, 112)'
      },
      backgroundColor: {
        'facebook': '#EFF2F5',
        'white': '#ffffff',
        'facebook-blue': 'rgb(26,115,227)',
        'signup-button': '#42B729',
        'black': '#000000'
      },
      borderColor: {
        inputBorder: '#DCDFE2',
        'input-gray': '#F5F6F7',
      },
      fontSize: {
        'xxs': '11px',
        '3.5xl': '32px'
      }
    }
  },
  plugins: [],
}
