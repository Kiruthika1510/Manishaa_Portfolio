/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDF2F2',
          100: '#FBE3E3',
          200: '#F5B8BA',
          500: '#D71920',
          600: '#B5121B',
          700: '#8E0E15',
        },
        ink: {
          DEFAULT: '#252525',
          soft: '#555555',
        },
        mist: {
          DEFAULT: '#EEEEEE',
          50: '#FAFAFA',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(37, 37, 37, 0.04), 0 12px 32px -16px rgba(37, 37, 37, 0.18)',
        lift: '0 2px 4px rgba(37, 37, 37, 0.05), 0 24px 48px -20px rgba(181, 18, 27, 0.28)',
      },
    },
  },
  plugins: [],
};
