
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*'],
  theme: {
    extend: {
      borderWidth : {
        d: '1px' 
      },
      width:{
        d: '1px'
      },
      backgroundColor: {
        main: '#070708',
        button: '#1c1c21',
        hover: '#131316',
        arrow: '#4a2bed'
      },
      colors:{
        main: '#7a7a7a'
      },
      keyframes: {
        slide: {
          '0%': {transform: 'translateX(0%)' },
          '100%': {transform: 'translateX(-100%)' }
        }
      },
      animation: {
        slide: 'slide 30s linear 0s infinite normal',
      },
      screens:{
        tablet : {'max': '900px'},
        mobile: {'max' : '767px'}
      }
    },
  },
  plugins: [],
}

