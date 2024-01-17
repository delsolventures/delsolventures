const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        delsol: {
          primary: "#0369a1", //blue700
          "primary-content": "#fafafa", //neutral50
          secondary: "#a3a3a3", //neutral500
          accent: "#ab00ff", //purple700
          neutral: "#0a0a0a", //neutral950
          "base-100": "#ea580c", //orange700
          info: "#00c0ff",
          success: "#47c900",
          warning: "#ff7d00",
          error: "#e13057",
        },
      },
      "aqua",
      "cupcake",
    ],
  },
};
