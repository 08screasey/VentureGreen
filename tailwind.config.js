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
        },
        fontFamily: {
            lora: ['lora', 'serif'],
            code: ['source-code-pro', 'monospace'],
            'old-standard': ['old-standard', 'serif'],
        },
    },
    plugins: [],
};
