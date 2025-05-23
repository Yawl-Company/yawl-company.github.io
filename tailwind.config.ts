module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#15BAD1',
          light: '#6AEEEE',
        },
        secondary: {
          DEFAULT: '#021539',
        },
        accent: {
          DEFAULT: '#FEFEFE',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%': { 
            transform: 'translateY(0) rotate(0deg)',
            animationTimingFunction: 'ease-in-out'
          },
          '25%': { 
            transform: 'translateY(-8px) rotate(1deg)',
            animationTimingFunction: 'ease-out'
          },
          '50%': { 
            transform: 'translateY(-12px) rotate(-1deg)',
            animationTimingFunction: 'ease-in'
          },
          '75%': { 
            transform: 'translateY(-8px) rotate(1deg)',
            animationTimingFunction: 'ease-out'
          },
          '100%': { 
            transform: 'translateY(0) rotate(0deg)',
            animationTimingFunction: 'ease-in-out'
          }
        },
      },
    },
  },
  plugins: [],
} 