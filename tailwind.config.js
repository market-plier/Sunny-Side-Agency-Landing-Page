module.exports = {
 mode: 'jit',
  purge: [
      './*.html'
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'barlow': ["Barlow", 'sans-serif'],
      'fraunces': ["Fraunces", 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
