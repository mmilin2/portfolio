/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#667eea',
          dark: '#764ba2',
        },
        accent: '#f093fb',
        success: '#64ffda',
        dark: {
          DEFAULT: '#0a0e27',
          darker: '#050816',
          light: '#1a1d35',
        },
        text: {
          primary: '#e6f1ff',
          secondary: '#a8b2d1',
          muted: '#8892b0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'blink': 'blink 1s infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fall': 'fall linear infinite',
        'scroll': 'scroll 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fall: {
          'to': {
            top: '120%',
            opacity: '0',
          },
        },
        scroll: {
          '0%': {
            opacity: '1',
            top: '8px',
          },
          '100%': {
            opacity: '0',
            top: '24px',
          },
        },
      },
    },
  },
  plugins: [],
}
