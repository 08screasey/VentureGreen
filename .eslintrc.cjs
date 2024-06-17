module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'import'],
    rules: {
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
            },
        ],
        'import/no-duplicates': ['error', { 'prefer-inline': true }],
        'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
};
