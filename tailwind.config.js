/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FBFBFB",
        bgColor: "#E6E5EA",
        buttonColor: "#1E1D22"
      },
      backgroundImage: {
        header: "url('/assets/images/bg-header.jpg')",
      },
      fontFamily: {
        bebas: ["var(--font-bebas"],
        poppins: ["var(--font-poppins)"],
      },
      boxShadow: {
        black: "0px 0px 0px 2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
