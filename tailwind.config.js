/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#f2f4ef',
        muted: '#9aa29b',
        line: '#2c3530',
        bg: '#101512',
        panel: '#171e1a',
        lime: '#c8ef69',
        green: '#1d6b52',
        coral: '#ff8b6a',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        rise: 'rise 0.4s ease-out forwards',
        pulseSlow: 'pulse 1.3s infinite',
        progress: 'progress 3.5s linear forwards',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      }
    },
  },
  plugins: [],
}
