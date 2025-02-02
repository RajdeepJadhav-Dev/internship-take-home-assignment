/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'main-blue': '#d1ecf7',
      'nav-bg':'#f3f8fc',
      'button':'#1f0150',
      'main-gradiant':'#ebfae9',
      'ai-button':'#cef5ee',
      'green-text':'#1d6d09',
      'red-text':'#be4413',
      'skin-color':'#ffe6ad',
      'discord-blue':'#596aea'
    },
  },
  animation:{
    "loop-scroll":"loop-scroll 20s linear infinite",
  },
  keyframes:{
    'loop-scroll':{
      '0%':{transform:'translateX(0)'},
      '100%':{transform:'translateX(-50%)'}
    }
  }
  },
  plugins: [],
}

