module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#ECEAFF",
        backgroundSecondar: "#C1DEFF",
        backgroundTert: "#B5D8FF",
        primary: "#1377E1",
        secondary: "#404040"
      },
      fontFamily: {
        main: ['Poppins']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: "jit"
}
