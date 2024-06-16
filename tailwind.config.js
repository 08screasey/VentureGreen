/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    prefix: 'tw-',
    theme: {
        colors: {
            'light-green': '#637C5A',
            green: '#495C42',
            red: '#EB0027',
            cyan: '#009DDB',
        },
        fontFamily: {
            lora: ['lora', 'serif'],
            lato: ['lato', 'sans-serif'],
            code: ['source-code-pro', 'monospace'],
        },
    },
    plugins: [],
};
