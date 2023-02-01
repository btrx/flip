/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-inter)', 'sans-serif'],
      },
      backroundImage: {
        'computer': "url('/bg.jpg')",
      },
      animation: {
        "slide-in-blurred-left": "slide-in-blurred-left 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"
      },
      keyframes: {
          "slide-in-blurred-left": {
              "0%": {
                  transform: "translateX(-1000px) scaleX(2.5) scaleY(.2)",
                  "transform-origin": "100% 50%",
                  filter: "blur(40px)",
                  opacity: "0"
              },
              to: {
                  transform: "translateX(0) scaleY(1) scaleX(1)",
                  "transform-origin": "50% 50%",
                  filter: "blur(0)",
                  opacity: "1"
              }
          }
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    }),
  ],
}
