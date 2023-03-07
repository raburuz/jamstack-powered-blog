const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./projects/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{
      "transparent-top": 'linear-gradient(#000000 5%, transparent 100%);',
      "transparent-bottom": 'linear-gradient(transparent 5%, #000000 100%);',
    },
    extend: {
      fontFamily:{
        monospace: ['var(--font-monospace)',  ...fontFamily.sans],
        familjen: ['var(--font-familjen)', ...fontFamily.sans]
      }
    },
  },
  
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D19F64",
          secondary: "#343232",
          accent: "#343232",
          neutral: "#343232",
          "base-100": "#000000",
          "base-200": "#0d0d0d",
          "base-300": "#1a1919",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
}