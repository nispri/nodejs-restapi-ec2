// eslint.config.js
const { defineConfig, FlatConfig } = require('eslint');

module.exports = defineConfig({
  // Specify all your rules and settings directly here
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    // Add or adjust rules as needed
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      // Override specific settings for different file types
    }
  ]
});
