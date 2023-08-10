module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        crossFade: {
          '0%': {opacity: 1},
          '5%': {opacity: 0.7},
          '10%': {opacity: 1},
          '100%': {opacity: 1},
        }
      },
      animation: {
        crossfade: "crossfade 1s ease-in-out 0.5s"
      }
    },
  },
  plugins: [],
}
