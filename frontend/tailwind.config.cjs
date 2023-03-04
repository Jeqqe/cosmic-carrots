/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "scale-up-center": "scale-up-center 1s infinite",
        // "fade": "fade in once",
        "fade": "fade 1s ease-out",
      },
      keyframes: {
        "scale-up-center": {
          "0%": {
            transform: "scale(1)",
            "transform-origin": "center center",
          },
          "50%": {
            transform: "scale(1.5)",
            "transform-origin": "center center",
          },
          "100%": {
            transform: "scale(1)",
            "transform-origin": "center center",
          },
        },
        "fade": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
