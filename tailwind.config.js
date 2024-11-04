/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            "accentGreen": "#009975",
            "btnColor": "#1F7964"
         }
      },
   },
   plugins: [],
};

