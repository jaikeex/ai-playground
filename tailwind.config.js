/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'kalam': ['Kalam', 'sans-serif']
      },
      backgroundImage: {
        'radial-gradient-circle-light': 'radial-gradient(circle, rgba(2, 0, 36, 0) 0, #fafafa 100%)',
        'radial-gradient-circle-dark': 'radial-gradient(circle, rgba(2, 0, 36, 0.95) 0, #101030 100%)',
        'grid': "url('/src/assets/grid.svg')"
      }
    }
  },
  plugins: []
};
