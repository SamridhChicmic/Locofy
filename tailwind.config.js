/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        d9d9d91: "#f5f5f5",
        grey: "#8b8b8b",
        d9d9d9: "#14a800",
        limegreen: "#2ec21a",
        black: "#181818",
        cornflowerblue: "#137bd5",
      },
      spacing: {},
      fontFamily: {
        "urw-geometric": "'URW Geometric'",
        "frank-ruhl-libre": "'Frank Ruhl Libre'",
      },
      borderRadius: {
        "3xs": "10px",
        "10xs": "3px",
        "8xs": "5px",
      },
    },
    fontSize: {
      lg: "18px",
      "3xl": "22px",
      xl: "20px",
      base: "16px",
      "7xl": "26px",
      "2xl": "21px",
      "17xl": "36px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
