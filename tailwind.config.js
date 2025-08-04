/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turkish: {
          gold: '#a88236',
          red: '#9b1c2e',
          blue: '#102e4a',
          cream: '#f4f1ee',
        }
      },
      fontFamily: {
        'oriental': ['Cinzel', 'serif'],
        'arabic': ['Scheherazade New', 'serif'],
        'elegant': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'oriental-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23a88236\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}

