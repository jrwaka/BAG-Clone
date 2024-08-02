/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{js,ts,jsx,tsx,css}"],
  theme: {
<<<<<<< HEAD
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        marquee3: "marquee 25s linear infinite",
        marquee4: "marquee2 25s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee3: {
          "100%": { transform: "translateX(100%)" },
          "0%": { transform: "translateX(-100%)" },
        },
        marquee4: {
          "100%": { transform: "translateX(0%)" },
          "0%": { transform: "translateX(100%)" },
        },
      },
    },
=======
    extend: {},
>>>>>>> 6c2dc09 (change)
  },
  plugins: [],
};
