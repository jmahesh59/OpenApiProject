/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: 'class', // Enable dark mode
      colors: {
        darkMode: {
          backgroundColor: '#1a202c',
          textColor: '#ffffff',
          // Add more styles as needed
        },
      },
    },
  },
  plugins: [],
}

