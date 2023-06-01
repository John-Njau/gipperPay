/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-10": "#f7f7f7",
        gray: "rgba(11, 0, 42, 0.05)",
        "primary-main": "#fa3c12",
        white: "#fcfcfc",
        "white-30": "#7b7b7b",
        "secondary-main": "#0b002a",
        "secondary-10": "#aeaab8",
        "white-50": "#313131",
        "primary-light": "#fed8d0",
        "secondary-20": "#858094",
        chocolate: "rgba(228, 118, 27, 0.1)",
        lightgoldenrodyellow: "#eef7d4",
        darkolivegreen: "#566b19",
        lavender: "#d9e1f2",
        "primary-10": "#fdbeb0",
        "primary-30": "#fc7d61",
        "white-20": "#a4a4a4",
        "secondary-50": "#090023",
      },
      fontFamily: {
        "px-body-text": "Jost",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "1rem",
      "9xl": "1.75rem",
      smi: "0.81rem",
      "2xs": "0.69rem",
      lgi: "1.19rem",
      "4xl": "1.44rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
