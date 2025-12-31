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
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Theme-aware colors via CSS variables
        theme: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          border: 'var(--border-color)',
          text: {
            primary: 'var(--text-primary)',
            secondary: 'var(--text-secondary)',
            dim: 'var(--text-dim)',
          },
          accent: {
            DEFAULT: 'var(--accent)',
            hover: 'var(--accent-hover)',
          },
        },
      },
      boxShadow: {
        'theme-sm': 'var(--shadow-sm)',
        'theme-md': 'var(--shadow-md)',
        'theme-lg': 'var(--shadow-lg)',
      },
    },
  },
  plugins: [],
};
