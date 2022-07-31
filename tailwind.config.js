/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },

      colors: {
        bms: {
          50: '#edf1fc',
          100: '#d1d6e2',
          200: '#b4bbca',
          300: '#97a0b4',
          400: '#79849e',
          500: '#606b85',
          600: '#4b5368',
          700: '#353b4b',
          800: '#2b3149',
          900: '#080c16',
        },
      }
    }
  },
  plugins: [],
}
