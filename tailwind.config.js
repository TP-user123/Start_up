/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: { colors: { ink: "#08090d", lavender: "#b9a5ff", muted: "#a09eaa" }, fontFamily: { sans: ["var(--font-body)"], display: ["var(--font-display)"] } } },
  plugins: []
};
