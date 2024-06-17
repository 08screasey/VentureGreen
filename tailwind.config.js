/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    prefix: 'tw-',
    theme: {
        colors: {
            'extra-light-green': '#E9EAE633',
            'light-green': '#637C5A',
            green: '#495C42',
            red: '#EB0027',
            cyan: '#009DDB',
            white: '#FFFFFF',
            black: '#000000',
            golden: '#FFCB6B',
            transparent: '#FFFFFF00',
            grey: '#ccc',
        },
        fontFamily: {
            lora: ['lora', 'serif'],
            code: ['source-code-pro', 'monospace'],
            'old-standard': ['old-standard', 'serif'],
            active: ['active', 'sans-serif'],
            bodini: ['ltc-bodoni-175', 'serif'],
        },
        extend: {
            animation: {
                flicker: 'flicker 1.1s linear infinite',
            },
            keyframes: {
                flicker: {
                    '0%, 49%': { opacity: 1 },
                    '50%, 100%': { opacity: 0 },
                },
            },
        },
    },
    plugins: [],
};
