module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: '#165C65',
        blue: '#29B0BC',
        blue2: '#6DB4BB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
