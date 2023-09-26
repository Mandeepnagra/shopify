/** @type {import('tailwindcss').Config} */

export default  {
  content: [
      "./**/*.{js,json,liquid}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)"
      }
    },container: {
      screens: {
        xl: '1376px',
      },
    }
  },
  plugins: [],
}
