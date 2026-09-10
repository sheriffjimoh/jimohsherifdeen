/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
      },
      colors: {
        cream: {
          50: '#fdfcfa',
          100: '#f9f6f1',
          200: '#f1ebe2',
          300: '#e5dccb',
          400: '#d0c3a8',
        },
        ink: {
          50: '#f6f5f3',
          100: '#e8e6e1',
          200: '#c9c6bd',
          300: '#a6a298',
          400: '#7c786e',
          500: '#5e5a51',
          600: '#47443d',
          700: '#33312b',
          800: '#222019',
          900: '#15140f',
          950: '#0a0907',
        },
        brand: {
          50: '#fff8ed',
          100: '#ffefc9',
          200: '#ffdf91',
          300: '#ffc757',
          400: '#ffab2e',
          500: '#f98a14',
          600: '#dd6510',
          700: '#b74812',
          800: '#943816',
          900: '#7a2f17',
        },
        sage: {
          400: '#7ca982',
          500: '#5b8765',
          600: '#436b4d',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-down': 'fadeDown 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'spin 25s linear infinite',
        blink: 'blink 1.2s step-end infinite',
        'float': 'float 7s ease-in-out infinite',
        'grow': 'grow 1.5s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        grow: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
};
