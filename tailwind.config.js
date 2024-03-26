/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./",
  ],
  theme: {
    extend: {
      backgroundImage: {
        visual_bg: "url('/public/img/visual_bg.jpg')",
      },
      colors: {
        logo_green: "#67bc45",
        logo_grey: "#3f4446",
        dark_green: "#488330",
        light_green: "#94D07C",
        bg_green: "#e0f1d9",
        text_gray: "#2f3335",
        bg_brown: "#faf8f2",
      },
      fontFamily: {
        theme_main: "'Rubik', sans-serif",
        theme_cursiv: "'Nanum Brush Script', cursive",
      },
    },
  },
  plugins: [],
};
