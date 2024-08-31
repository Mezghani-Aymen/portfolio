/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Include all relevant file types
    "./src/components/**/*.{html,js,jsx,ts,tsx}",  // Include all relevant file types
  ],
  theme: {
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        grid: "grid 15s linear infinite",
      },
    },
  },
  plugins: [],
}
