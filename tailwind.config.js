/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#ecedf3',
          100: '#bbbdd3',
          200: '#9599bb',
          300: '#7075a4',
          400: '#5b608f',
          500: '#4b5076',
          600: '#3c3f5d',
          700: '#343651',
          800: '#2c2e44',
          900: '#25273a',
        },
      }
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "mocha",
    }),
  ],
}

