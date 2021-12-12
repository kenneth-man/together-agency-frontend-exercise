//custom tailwind values
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: 'Space Grotesk'
      },
      colors: {
        blue: {
          50: '#dbf1fa',
          100: '#c2dff8',
          600: '#134ae9',
          900: '#1b263a'
        },
        gray: {  
          50: '#F9FBFB' 
        },
        'white-rgba-04': 'rgba(255, 255, 255, 0.4)',
        'white-rgba-03': 'rgba(255, 255, 255, 0.3)',
        'white-rgba-02': 'rgba(255, 255, 255, 0.2)',
      },
      maxWidth: {
        'xs': '21rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
  // ,
  // important: true
}
