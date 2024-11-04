/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            "accentGreen": "#009975",
            "darkGreen": "#1F7964"
         },
         fontSize: {
            "xsm": "0.6rem",
         }
      },
   },
   plugins: [],
};

