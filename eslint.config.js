// .eslintrc.js (traditional format)
module.exports = {
    extends: [
      'airbnb-base',
      'plugin:@typescript-eslint/recommended'
    ],
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
  };
  