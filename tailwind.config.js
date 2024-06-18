/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    prefix: 'tw-',
    theme: {
        colors: {
            'extra-light-green': '#8ea989',
            'light-green': '#637C5A',
            green: '#495C42',
            red: '#EB0027',
            'extra-light-cyan': '#89ddff',
            cyan: '#009DDB',
            white: '#FFFFFF',
            black: '#000000',
            golden: '#FFCB6B',
            transparent: '#FFFFFF00',
            grey: '#CCCCCC',
            'light-grey': '#EEEEEE',
            'extra-light-grey': '#FAFAFA',
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
                'pulse-green': 'pulse-green 8s infinite',
            },
            keyframes: {
                flicker: {
                    '0%, 49%': { opacity: 1 },
                    '50%, 100%': { opacity: 0 },
                },
                'pulse-green': {
                    '0%': {
                        transform: 'scale(0.95)',
                        'box-shadow': '0 0 0 0 rgba(142, 169, 137, 0.7)',
                    },
                    '16%': {
                        transform: 'scale(1)',
                        'box-shadow': '0 0 0 10px rgba(142, 169, 137, 0)',
                    },
                    '23%': {
                        transform: 'scale(0.95)',
                        'box-shadow': '0 0 0 0 rgba(142, 169, 137, 0)',
                    },
                    '100%': {
                        transform: 'scale(0.95)',
                        'box-shadow': '0 0 0 0 rgba(142, 169, 137, 0)',
                    },
                },
            },
            boxShadow: {
                'inner-dark': 'inset 0 2px 4px 3px rgba(0, 0, 0, 0.5)',
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
