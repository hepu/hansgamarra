module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'import/prefer-default-export': 0,
    'max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTrailingComments: true,
      },
    ],
    'react/jsx-filename-extension': 1,
    'react/jsx-props-no-spreading': 0,
    'prettier/prettier': 'error',
  },
};
