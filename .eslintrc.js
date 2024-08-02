// .eslintrc.cjs
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
    ],
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
  