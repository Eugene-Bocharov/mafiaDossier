module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'google',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'indent': 'off',
    'no-tabs': 'off',
    'linebreak-style': ['error', 'windows'],
    'object-curly-spacing': ['error', 'always'],
  },
};
