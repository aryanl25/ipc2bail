/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      placeholderColor: {
        custom: "#4b5563",
      },
      backgroundColor: {
        "blue-46": "rgba(0, 180, 216, 0.46)",
      },
    },
  },
  plugins: [],
};
