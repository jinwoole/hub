/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-black': '#000000',
        'primary-gray': '#666666',
        'accent-blue': '#0066FF',
        'glass-white': 'rgba(255, 255, 255, 0.7)',
        'glass-border': 'rgba(255, 255, 255, 0.18)',
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'reveal': 'reveal 0.8s ease-out',
        'draw-line': 'drawLine 0.3s ease-out forwards',
        'subtle-scale': 'subtleScale 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        reveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        drawLine: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        subtleScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      letterSpacing: {
        'extra-wide': '0.1em',
        'super-wide': '0.2em',
      },
    }
  },
  plugins: []
};