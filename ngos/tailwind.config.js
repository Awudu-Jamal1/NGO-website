/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      '2main':'#008000',
      'main':'#8cb369',
      'white':'#fff',
      'ghover':'#004b23',
      'text1':'#b7b7a4'



// wine=eb5b28
      //  'ghover':'#008000',
      // 'white':'#fff',
      // 'main':'#004b23',
      // 'text1':'rgb(38 38 38)'
      //#8cb369', '#02461f'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

