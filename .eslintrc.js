module.exports = {
  root: true,
  plugins: ['react'],
  extends: ['react-app', 'airbnb', 'airbnb/hooks'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    'object-curly-newline': 0,
    'react/function-component-definition': 0,
    'react/jsx-wrap-multilines': 0,
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'max-len': ['error', { code: 120 }],
    'import/prefer-default-export': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
      },
    ],
  },
};
