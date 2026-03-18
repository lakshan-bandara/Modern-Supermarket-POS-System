/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          light: 'rgba(255, 255, 255, 0.05)',
          medium: 'rgba(255, 255, 255, 0.08)',
          heavy: 'rgba(255, 255, 255, 0.12)',
        },
        accent: {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
          glow: 'rgba(59, 130, 246, 0.4)',
        }
      },
      backdropBlur: {
        'nano': '2px',
        'glass': '20px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
        'neon': '0 0 20px 0 rgba(59, 130, 246, 0.4)',
      }
    },
  },
  plugins: [],
}
