const path = require('path');

module.exports = {
  extends: [
    '@astronomer/eslint-config-astro',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  plugins: ['prettier'],
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
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
};
