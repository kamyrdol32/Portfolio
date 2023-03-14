/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.html',
        './src/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#0F172A',
                'secondary': '#1E293B',
                'accent': '#7477FF',
            }
        },
    },
    plugins: [],
}