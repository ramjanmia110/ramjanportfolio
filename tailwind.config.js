/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       maxWidth: {
        'Container': '1170px',
      },

       fontFamily: {
        'montser': ['"Montserrat"'],
      },

      colors: {
        'primary': '#FFFFFF',
        'secondary': '#00EEFF',
        'black': '#323946',
      }
    },

  animation: {
        'flip-in': 'flip-in 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'fade-in': 'fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'spin-slow': 'spin 8s linear infinite',
        'spin-fast': 'spin 4s linear infinite',
        'aurora': 'aurora 10s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        // --- New Animations ---
        'orbit-slow': 'orbit 20s linear infinite',
        'orbit-fast': 'orbit 12s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'shooting-star': 'shooting-star 15s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'flip-in': {
          '0%': { transform: 'rotateY(80deg)', opacity: '0' },
          '100%': { transform: 'rotateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'aurora': {
          '0%, 100%': { 'border-image-source': 'conic-gradient(from 0deg, #ff0080, #7928ca, #ff0080)' },
          '50%': { 'border-image-source': 'conic-gradient(from 180deg, #ff0080, #7928ca, #ff0080)' },
        },
        'glow-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 20px 5px rgba(236, 72, 153, 0.5)' },
          '50%': { 'box-shadow': '0 0 35px 10px rgba(236, 72, 153, 0.8)' },
        },
        // --- New Keyframes ---
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(190px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(190px) rotate(-360deg)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)', opacity: '0.7' },
          '50%': { transform: 'translateY(-20px)', opacity: '1' },
          '100%': { transform: 'translateY(0px)', opacity: '0.7' },
        },
        'shooting-star': {
            '0%': { transform: 'translateX(-100%) translateY(-100%)', opacity: '1' },
            '100%': { transform: 'translateX(200%) translateY(200%)', opacity: '0' },
        },
        shimmer: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
      },
      // Utility for animation delays
      animationDelay: {
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
        '1400': '1400ms',
        '1600': '1600ms',
      },
    
  
    
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {};
      const delays = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600];
      delays.forEach(delay => {
        newUtilities[`.animation-delay-${delay}`] = {
          animationDelay: `${delay}ms`,
        };
      });
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}