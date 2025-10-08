/** @type {import('tailwindcss').Config} */
import tailwindAnimate from "tailwindcss-animate"

export default {
    darkMode: ["class"],
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            borderRadius: {
                lg: "var(--radius)",
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
            },
        },
    },
    plugins: [tailwindAnimate],
}