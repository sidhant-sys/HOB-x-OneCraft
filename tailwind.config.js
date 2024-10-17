/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
        sherif: ['DM Serif Display', 'serif']
      },
      space: {
        '108px': '108px'
      }
    },
    colors: {
      primary100: '#edfcf4',
      primary200: '#d3f8e1',
      primary300: '#d3f8e1',
      primary400: '#75e0ac',
      primary500: '#3dca8a',
      primary600: '#1aaf70',
      primary700: '#0d8e5a',
      primary800: '#0b714a',
      primary900: '#0b5a3c',
      primary1000: '#0a4a33',
      primary1100: '#052f21',
      secondary100: '#fbf9f1',
      secondary200: '#f6f2de',
      secondary300: '#ebe1bd',
      secondary400: '#decb93',
      secondary500: '#d3b471',
      secondary600: '#c69949',
      secondary700: '#b8843e',
      secondary800: '#996935',
      secondary900: '#7b5431',
      secondary1000: '#64472a',
      secondary1100: '#352315',
      neutral100: '#f6f6f6',
      neutral200: '#e7e7e7',
      neutral300: '#d1d1d1',
      neutral400: '#b0b0b0',
      neutral500: '#888888',
      neutral600: '#6d6d6d',
      neutral700: '#5d5d5d',
      neutral800: '#4f4f4f',
      neutral900: '#454545',
      neutral1000: '#3d3d3d',
      neutral1100: '#000000',
      transparent: 'transparent'
    }
  },
  plugins: []
};
