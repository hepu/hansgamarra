module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'

    // "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    require: 'readonly',
    process: 'readonly'
  },
  // "parser": "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react'
    // "@typescript-eslint"
  ],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'react/display-name': 'off',
    'react/prop-types': 'warn',
    'multiline-comment-style': ['warn', 'separate-lines'],
    'capitalized-comments': ['off', 'never']
  }
}
