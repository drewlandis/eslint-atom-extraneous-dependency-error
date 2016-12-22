module.exports = {
  parserOptions: {
      ecmaVersion: 6,
  },
  extends: 'airbnb',
  env: {
    node: true,
    commonjs: true,
    es6: true
  },
  rules: {
    strict: [0, 'global'] // required for node, configurable for browser, https://github.com/eslint/eslint/issues/2785#issuecomment-113254153
  }
};
