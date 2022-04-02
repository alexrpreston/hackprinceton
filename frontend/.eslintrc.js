const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    // 'airbnb',
    // 'airbnb-typescript',
    'prettier',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
  },
  rules: {
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'arrow-body-style': 1,
    'prettier/prettier': ['error'],
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
  },
};
