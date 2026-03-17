module.exports = {
    root: true,
    env: { node: true, browser: true, es2021: true },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                semi: true,
                singleQuote: true,
                trailingComma: 'es5',
                tabWidth: 4,
                printWidth: 100,
                bracketSpacing: true,
                arrowParens: 'avoid',
                endOfLine: 'lf',
            },
        ],

        // Style hygiene (good rules 👍)
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
        'no-trailing-spaces': 'error',
    },
};
