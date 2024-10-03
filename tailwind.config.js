/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./public/index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body-image': "url('/public/assets/bg1.jpeg')"
      },
      fontFamily: {
        'dancing':["Dancing Script", "cursive"],
        'mathalin' :["Lobster", "sans-serif"]
      }
    },
  },
  plugins: [],
}

