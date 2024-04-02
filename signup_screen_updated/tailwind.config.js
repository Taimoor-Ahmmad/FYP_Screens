/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Signup_Desktop': "url('/assets/Signup_Desktop.png')", 
        'Img':"url('/assets/Vector_image.png')",
      },
    },
  },
  plugins: [],
};
