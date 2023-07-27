/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sec: "#AEB4BE", // secondary color for text
        off: "#7D879C", // color for offer text
        main_text: "#2B3445"
      },
    },
  },
  plugins: [],
};
