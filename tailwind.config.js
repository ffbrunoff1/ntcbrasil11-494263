/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5BB4E5', // Logo Blue
        secondary: '#1f2937', // Dark Slate for text
        accent: '#374151', // Gray for accents
        light: '#FFFFFF', // White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(91, 180, 229, 0.5)',
      },
    },
  },
  plugins: [],
};
