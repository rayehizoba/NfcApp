const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#157955',
        secondary: '#323232',
        neutral: '#CFCFCF',
        placeholder: '#A5A5A5',
        accent: '#C49218',
        light: '#D9D9D9',
        lighter: '#F8F8F8',
        dark: '#171614',
        darker: '#121212',
        green: '#63A68E',
        gray: '#7C7C7C',
        danger: '#FB3030',
      },
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        // 😎 similar to `@apply`
        btn: 'px-4 py-3 rounded-md bg-primary text-white flex-row items-center justify-center',
        'btn-outline':
          'px-4 py-3 rounded-md border border-primary text-white flex-row items-center justify-center',
        'text-2xs': 'text-[10px]',
        input:
          'border border-neutral/80 dark:border-lighter/40 bg-neutral/50 dark:bg-lighter/10 rounded-md py-2 px-3 text-darker dark:text-lighter',
      });
    }),
  ],
};
