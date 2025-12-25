/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /^(bg|text)-slate-(50|100|200|300|400|500|600|700|800|900)$/,
    },
    'antialiased',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

