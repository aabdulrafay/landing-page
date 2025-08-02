/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'caveat': ['Caveat', 'cursive'],
      },
      fontSize: {
        '5xl': '48px',
        '4xl': '40px',
      },
      lineHeight: {
        '14': '56px',
        '82': '82px',
      },
      spacing: {
        '56': '14rem',
        '40': '10rem',
        '24': '6rem',
      },
      transform: {
        'rotate-11.4': 'rotate(-11.4deg)',
        'rotate-0.44': 'rotate(-0.44deg)',
        'rotate-4.02': 'rotate(-4.02deg)',
        'rotate-2.99': 'rotate(2.99deg)',
        'rotate-5.01': 'rotate(5.01deg)',
      },
      translate: {
        '32.67': '32.67px',
        '20.28': '-20.28px',
        '18.2': '18.2px',
        '55.29': '-55.29px',
        '90.1': '90.1px',
        '216.87': '-216.87px',
        '200': '-200px',
        '760': '760px',
        '230': '230px',
      },
    },
  },
  plugins: [],
}

