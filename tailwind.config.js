/** @type {import('tailwindcss').Config} */

export default  {
  content: [
      "./**/*.{js,json,liquid}",
  ],
  safelist: [
    'bg-auto',
    'bg-cover',
    'bg-contain',
    'bg-repeat',
    'bg-no-repeat',
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)"
      },
    }
  },
  plugins: [],
}
