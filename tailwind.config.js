/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // serif: ['Playfair Display', 'serif'],
                mistral: ['Mistral', 'cursive'],
            },
        },
    },
    plugins: [],
}