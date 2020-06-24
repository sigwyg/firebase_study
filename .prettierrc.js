module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  overrides: [
    {
      files: ["*.html", "*.css", "*.scss"],
      options: {
        tabWidth: 4
      }
    }
  ]
};
