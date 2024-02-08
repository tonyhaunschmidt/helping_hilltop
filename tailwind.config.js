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
      colors: {
        logo_green: "#67bc45",
        logo_grey: "#3f4446",
        light_green: "#46bd9e",
        bg_green: "#e0f1d9",
      },
      fontFamily: {
        theme_main: "",
      },
    },
  },
  plugins: [],
};
