
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*{js,ts,jsx,tsx}', 
    './component/**/*{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: { fontFamily :{
      sans:["var(--font-sans)","sans-serif"],
      orbitron:["var(--font-orbitron)","sans-serif"],
    }},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

