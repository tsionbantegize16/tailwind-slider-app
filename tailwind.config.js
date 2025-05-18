// Example tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c3e50', // Darker background
        secondary: '#34495e',
        accent: '#2ecc71',   // Green accent color from the image
        'accent-dark': '#27ae60',
        textPrimary: '#ffffff', // White text
        textSecondary: '#ecf0f1',
      },
      // Add animations if not already present
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'pulse-accent': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
      },
    },
  },
  plugins: [],
}