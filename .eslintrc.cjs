// .eslintrc.cjs
const reactRefresh = require('eslint-plugin-react-refresh');

module.exports = {
  root: true,
  ignorePatterns: ['dist/', 'node_modules/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: { browser: true, es2021: true, node: true },
  settings: { react: { version: 'detect' } },
  plugins: ['@typescript-eslint', 'react-hooks', 'react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // inyectamos las reglas de react-refresh “manualmente”
    ...reactRefresh.configs.recommended.rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
