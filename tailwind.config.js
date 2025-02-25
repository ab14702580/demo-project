/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "header-color": "#081621",
        "black-modify": "#838383",
        "text-default": "#ef4a23",
        "input-text": "#666666",
      },
      animation: {
        infinite_color: "infinite_color 2s ease infinite",
        infinite_background_color:
          "infinite_background_color 10s ease alternate infinite",
      },
      keyframes: {
        infinite_color: {
          "0%": { opacity: "0", color: "white" },
          "50%": { opacity: "1", color: "#ef4a23" },
          "100%": { opacity: "0", color: "white" },
        },
        infinite_background_color: {
          "0%": { backgroundPosition: "-50% 50%" },
          "50%": { backgroundPosition: "-100% 50%" },
          "100%": { backgroundPosition: "-50% 50%" },
        },
      },
    },
  },
  plugins: [],
};
