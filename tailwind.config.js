/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main_c: "rgb(210, 63, 87)", // main color for the project
        n_active_main_c: "#FCE9EC", // main color for not active (related to main)
        sec: "#AEB4BE", // secondary color for text
        off: "#7D879C", // color for offer text and in the sideCart and the filter
        pro_det_bg: "#F6F9FC", // bg color for product detail and products
        main_text: "#2B3445",
        login_font_c: "rgb(75, 86, 107)",
        q_r_h_f: "rgb(43, 52, 69)", // quick review product heading font
        q_r_c_f: "rgb(174, 180, 190)", // quick review category font
        btn_bg: "#E3E5E8", // bg color for buttons
        border_c_na: "#dae1e7", // color for border that not active
        products_c: "#757575", // color for products page
        stars_c: "#FAAF00", // color for filled stars
        // stars_c: "#FAAF00" , // color for filled stars
        border_c_b_b_a: "#EBABB5", // border color button before active used in checkout apply voucher and submit button on payment
      },
    },
  },
  plugins: [],
};
