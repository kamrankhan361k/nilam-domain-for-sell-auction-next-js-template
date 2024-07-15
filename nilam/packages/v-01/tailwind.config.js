module.exports = {

  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
      },
    },
    fontFamily: {
      poppins: ['Poppins'],
      nunito: ['Nunito'],
    },
    extend: {
      
      colors: {
        'emerald': {
          DEFAULT: '#44DC46', /// Change your color  theme here
          '50': '#FFFFFF',
          '100': '#F0FCF0',
          '200': '#C5F4C6',
          '300': '#9AEC9B',
          '400': '#6FE471',
          '500': '#44DC46',
          '600': '#25C827',
          '700': '#1D9D1F',
          '800': '#157216',
          '900': '#0D470E'
        },
        'mine-shaft': {
          DEFAULT: '#222222',
          '50': '#959595',
          '100': '#888888',
          '200': '#6F6F6F',
          '300': '#555555',
          '400': '#3C3C3C',
          '500': '#222222',
          '600': '#090909',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
