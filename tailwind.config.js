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
        "button-or": "#f51e45",
        "p-blue": "#01132d",
        "vs-blue": "#3749BB",
        "af-b": "#F2F4F8",
        cos: "#D51E0B",
        "sv-bu": "#3749bb0d",
        mn: "#666666",
        "dis-c": "#6E2594",
        "footer-background": "#081621",
        "f-border": "#ffffff1a",
        "last-a-tag": "#838383",
        "last-bg": "#212E38",
        "last-bg-hover": "#3749BB",
        "last-c-bg": "#081621",
        "last-c-bor": "#ffffff33",
        "last-c-bg-hover": "#3749BB",
        "next-text": "#ffffff80",
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
    transitionduration: {
      400: "400ms",
    },
    screens: {
      "1336m": "1336px",
      '1336': "1336px",
      '1400': "1400px",
      "13": "1318px"
    },
  },
  plugins: [],
};
