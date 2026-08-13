/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js}'],
  theme: {
    extend: {
      colors: {
        ink: '#102027',
        graphite: '#26353b',
        linen: '#f6f2ea',
        paper: '#fffdf8',
        brass: '#c7902b',
        clay: '#b8573c',
        mist: '#e8edf0'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(16, 32, 39, 0.12)',
        lift: '0 18px 48px rgba(16, 32, 39, 0.16)'
      }
    }
  },
  plugins: []
};
