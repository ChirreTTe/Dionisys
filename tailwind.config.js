/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      fontFamily:{
        "Lora-Regular.ttf": ["Lora-Regular", "sans-serif"],
        "Lora-Medium.ttf": ["Lora-Medium", "sans-serif"],
        "Lora-Bold.ttf": ["Lora-Bold", "sans-serif"]
      },
      colors: {
        primary: "#2F6BFF", /*Azul*/
        secondary: "#00BFA6", /*Verde marino */
        background: "#F8FAFC", /* Tipo beige fondo Screen */

        /**Colores fondo boton */
        danger: "#CF2817",
        warning: "#F59E0B",
        success: "#22C55E",

        cancel: "#E5E7EB",
        cancelText: "#475569",

        border: "#CBD5E1",
        text: "#475569",



        /**Colores de texto */
        textPrimary: "#333232",
        textSecundary: "",
        textTertiary: "",

        /* Colores input login */
        inputBorderColor: "#94A3B8",

        /* Colores de boton variant text-only */
        variantTextColor: "#CF2817",

        /**Colores de Modal */
        backgroundColorModal: "white",

        /**Color de Target */
        backgroundColorTarget: "#f4f6f8",
        targetBorderColor: "#1B3B69",


      },
    },
  },

  plugins: [],
};