/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        bgPrimary: "rgb(var(--bgPrimary) /<alpha-value>)", // Example of adding custom colours according to requriement.
        bgSecondary: "rgb(var(--bgSecondary) /<alpha-value>)",
        hover: "rgb(var(--hover) /<alpha-value>)",
        textPrimary: "rgb(var(--textPrimary) /<alpha-value>)",
        textSecondary: "rgb(var(--textSecondary) /<alpha-value>)",
        buttonBg: "rgb(var(--buttonBg) /<alpha-value>)",
        buttonText: "rgb(var(--buttonText) /<alpha-value>)",
      },
      spacing: {
        128: "32rem", // Example of adding a custom spacing value
        256: "64rem",
      },
      fontFamily: {
        primary: ["var(--fontPrimary)"], // Font family acc to customizations
        secondary: ["var(--fontSecondary)"],
      },
    },
  },
  plugins: [],
};
