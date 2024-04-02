/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'Home_Desktop': "url('/assets/Home_Desktop.png')", // Update the path as needed
      "Btn":"url('/assets/rectangle.png')"
    },
  },
  plugins: [],
};
