/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',       // A nice blue
        secondary: '#6574cd',     // A complementary purple
        accent: '#ffed4a',        // A vibrant yellow
        neutral: '#f7fafc',       // Light background
        textPrimary: '#2d3748',    // Dark text
        textSecondary: '#718096',  // Gray text
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'], // A modern, readable font
      },
      boxShadow: {
        'lg-glow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 3px rgba(52, 144, 220, 0.3)', // Subtle glow effect
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-10px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(10px)', opacity: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out forwards',
        'slide-out': 'slide-out 0.3s ease-in forwards',
        'fade-in': 'fade-in 0.3s ease-in-out',
        'fade-out': 'fade-out 0.3s ease-in-out',
        'pulse-accent': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // A more subtle pulse
      },
    },
  },
  plugins: [],
};