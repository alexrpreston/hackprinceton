module.exports = {
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.yml',
      options: {
        singleQuote: false,
      },
    },
  ],
};
