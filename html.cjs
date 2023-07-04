// npm i -D eslint eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-prettier eslint-plugin-promise eslint-plugin-unused-imports prettier

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['unused-imports', 'html'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        endOfLine: 'auto',
      },
    ],
  },
}
