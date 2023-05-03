/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      mdlg: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1820px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },

    maxHeight: {
      contentBox: '38rem',
      contentBoxWideScreen: '74vh',
    },
    extend: {
      colors: {
        'youngones-green': '#10d1bb',
        'youngones-green-dark': '#0db19e',
        'bg-grey': '#F2F2F2',
      },
      boxShadow: {
        imageShadow: '30px 31px 0px 0px rgba(16,209,187,1)',
      },
    },
  },
  plugins: [],
}
