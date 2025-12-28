// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   safelist: [
//     {
//       pattern: /^(bg|text)-slate-(50|100|200|300|400|500|600|700|800|900)$/,
//     },
//     'antialiased',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Simple Dark Theme
        'dark': {
          'bg': '#0a0a0a',
          'bg-alt': '#141414',
          'bg-lighter': '#1a1a1a',
          'border': '#2a2a2a',
          'text': '#e5e5e5',
          'text-muted': '#a0a0a0',
          'text-dim': '#666666',
          'accent': '#3b82f6',
          'accent-hover': '#60a5fa',
        },
      },
    },
  },
  plugins: [],
};
