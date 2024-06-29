/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-red': "#f25f3a",
        "dark-blue": "#242d52",
        "dark-grayish-blue":"#9095a7",
        "very-dark-blue": "#1d1e25",
        "very-Pale-Red": "#ffefeb",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      textSize: {
        '4.5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}

