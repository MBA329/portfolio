/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: '#090a0c',
        paper: '#f4f1eb',
        acid: '#d8ff3e',
        coral: '#ff715b',
        muted: '#a4a7ae',
      },
    },
  },
  plugins: [],
}
