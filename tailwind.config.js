const sm = '360px'
const md = '720px'
const lg = '1440px'

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      // Note, Work Sans must be quoted per the docs: https://tailwindcss.com/docs/font-family/#font-families
      body: ['"Work Sans"', 'sans-serif'],
    },
    screens: { sm, md, lg },
    extend: {
      width: { sm, md, lg },
      minWidth: (theme) => ({
        auto: 'auto',
        ...theme('spacing'),
      }),
      fontSize: {
        '6xl': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.1', letterSpacing: '0em' }],
        '3xl': ['1.875rem', { lineHeight: '1.5', letterSpacing: '0em' }],
        '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '0em' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'lg': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.04em' }],
        'base': ['1rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'sm': ['.875rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'xs': ['.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        /* normal = regular in Google fonts/Figma */
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      colors: {
        'matisse-red': {
          100: '#FF6356',
          200: '#E84234',
          300: '#C72A27',
          400: '#7B1F22',
        },
        copper: {
          100: '#FBD7B7',
          200: '#EABF9A',
          300: '#C9A17E',
          400: '#AB855E',
        },
        'scout-green': {
          100: '#A4A16E',
          200: '#788D5E',
          300: '#58623F',
          400: '#34483C',
        },
        'lichen-green': {
          100: '#BFF5DC',
          200: '#B1E9CF',
          300: '#88B6B3',
          400: '#478F8B',
        },
        'matisse-blue': {
          100: '#7697FF',
          200: '#5D77C7',
          300: '#435691',
          400: '#131C25',
        },
        'calico-orange': {
          100: '#FFC29F',
          200: '#E79669',
          300: '#DE7539',
          400: '#D85C16',
        },
        'gray-pink': {
          100: '#FFF4F3',
          200: '#CAB4B2',
          300: '#998381',
          400: '#302928',
        },
        'gray-yellow': {
          100: '#FFF9F0',
          200: '#D2C6B4',
          300: '#A49989',
          400: '#2C2925',
        },
        'gray-red': {
          100: '#FFFEFE',
          200: '#FFF5F3',
          300: '#DCBEBA',
          400: '#AE9390',
          500: '#846F6C',
          600: '#221D1D',
        },
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  variants: {},
  plugins: [],
}
