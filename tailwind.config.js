/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#135D66",
        secon: "#77B0AA",
        lighten: "#E3FEF7",
        darker: "#003C43",
      },
      backgroundColor: {
        darker: "#003C43",
        lighten: "#E3FEF7",
        primary: "#135D66",
      },
      borderColor: {
        'primary': '#003C43'
      }
    },
  },
  plugins: [require("daisyui")],
};
