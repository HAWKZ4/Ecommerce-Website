/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main_c: "rgb(210, 63, 87)", // main color for the project
        sec: "#AEB4BE", // secondary color for text
        off: "#7D879C", // color for offer text
        main_text: "#2B3445",
        login_font_c: "rgb(75, 86, 107)",
        q_r_h_f: "rgb(43, 52, 69)", // quick review product heading font
        q_r_c_f: "rgb(174, 180, 190)" // quick review category font

      },
    },
  },
  plugins: [],
};
