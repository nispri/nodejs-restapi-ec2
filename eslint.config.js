// eslint.config.js
module.exports = {
    root: true,
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
    env: {
      browser: true,
      node: true,
      jest: true,
    },
    parser: '@typescript-eslint/parser', // If you use TypeScript
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
      },
    ],
  };
  