module.exports = {
  env: {
    jest: true,
  },
  extends: ['@react-native-community', 'prettier'],
  globals: {
    JSX: true,
    TS: true,
    TSX: true,
  },
  ignorePatterns: ['Pods/', 'acceptableUsePolicy.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'prefer-arrow'],
  root: true,
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-shadow': 'error',
    'arrow-body-style': ['off'],
    'jest/no-disabled-tests': 'off',
    'no-shadow': 'off',
    'no-var': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        classPropertiesAllowed: false,
        disallowPrototype: true,
        singleReturnOnly: false,
      },
    ],
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react-native/no-inline-styles': 'error',
    'react/self-closing-comp': 'error',

    'react-hooks/exhaustive-deps': 'warn',
  },
};
