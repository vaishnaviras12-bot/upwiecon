/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f9',
          100: '#d7e1f0',
          200: '#aec3e1',
          300: '#7f9ecc',
          400: '#4f76ae',
          500: '#325790',
          600: '#234172',
          700: '#1a3159',
          800: '#0f1f3d',
          900: '#0a1629',
          950: '#060d1a',
        },
        accent: {
          50: '#fdf3f2',
          100: '#fbe2e0',
          200: '#f6bcb6',
          300: '#ef8f85',
          400: '#e35f52',
          500: '#c8402f',
          600: '#a72f21',
          700: '#84251a',
          800: '#631c14',
          900: '#42130d',
        },
        gold: {
          400: '#e8c368',
          500: '#d1a63f',
          600: '#b0872a',
        },
      },
      fontFamily: {
        display: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -6px rgba(15, 31, 61, 0.12)',
        card: '0 2px 12px -2px rgba(15, 31, 61, 0.10)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
