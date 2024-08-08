/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      animation: {
        loopSlide: "loopSlide 40s linear infinite",
        loopSlide2: "loopSlide2 40s linear infinite",
      },
      keyframes: {
        loopSlide: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        loopSlide2: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
