/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      letterSpacing: {
        extra_wide: '0.2em',
      },
      fontSize: {
        'big-xl': ['16rem', { lineHeight: '16.8rem' }],
      },
      borderRadius: {
        'big-xl': '12.5rem',
      },
      keyframes: {
        moveline: {
          '0%': {
            height: '0'
          },
          '100%': {
            height: '200%'
          }
        },
        slide: {
          from: { 
            transform: 'translateX(0)' 
          },
          to: { 
            transform: 'translateX(-100%)' 
          },
        },
      },
      animation: {
        'appear': 'moveline 6s linear forwards',
        'slide': 'slide 35s linear infinite',
        'slow-bounce': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}