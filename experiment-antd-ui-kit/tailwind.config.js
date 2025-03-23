/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "heading-4": "var(--heading-4-font-family)",
        "text-base-normal": "var(--text-base-normal-font-family)",
        "text-base-strong": "var(--text-base-strong-font-family)",
        "text-LG-normal": "var(--text-LG-normal-font-family)",
        "text-LG-strong": "var(--text-LG-strong-font-family)",
        "text-SM-normal": "var(--text-SM-normal-font-family)",
      },
      boxShadow: {
        "box-shadow": "var(--box-shadow)",
        "box-shadow-secondary": "var(--box-shadow-secondary)",
        "box-shadow-tertiary": "var(--box-shadow-tertiary)",
        "component-button-defaultshadow":
          "var(--component-button-defaultshadow)",
        "component-button-primaryshadow":
          "var(--component-button-primaryshadow)",
      },
    },
  },
  plugins: [],
};
