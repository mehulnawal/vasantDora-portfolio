/** @type {import('tailwindcss').Config} */
export default {
    // Add this line. It tells Tailwind to look for the "dark" class in the HTML tree.
    darkMode: 'selector',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}