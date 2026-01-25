/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                unc: {
                    primary: '#4B9CD3', // Carolina Blue
                    secondary: '#007FAE', // Link/Active Blue
                    navy: '#13294B', // Navy
                    black: '#151515',
                    white: '#FFFFFF',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
