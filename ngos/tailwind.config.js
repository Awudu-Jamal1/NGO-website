/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'main3':'#008000',
      'main':'#8cb369',
      'white':'#fff',
      'ghover':'#004b23',
      'text1':'#b7b7a4',
      '2main':'#455d58',
      "main4":'#86b85e',
      "footer":"rgb(36, 35, 29)"



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
})

