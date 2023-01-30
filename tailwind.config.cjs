/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "280px",
      sm: "480px",
      smd: "550px",
      md: "768px",
      lg: "950px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "landing-texture":
          "linear-gradient(rgba(0, 0, 0,0.7) 40%,rgba(0, 0, 0, 0.7) 40%),url('/background.jpg')",
        "responsive-texture":
          "linear-gradient(rgba(0, 0, 0,0.4),rgba(0, 0, 0, 0.4)),url('/background.jpg')",
      },
      borderRadius: {
        btn: "0.2rem",
      },
      borderWidth: {
        "btn-sm": "0.1px",
      },
      borderColor: {
        "bd-opacity": "rgba(255,255,255,0.6)",
      },
      backgroundColor: {
        "red-new": "rgb(229,9,20)",
      },
    },
  },
  plugins: [],
};
