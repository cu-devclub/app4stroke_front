module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    // we want to force semicolons
    semi: ["error", "always"],
    // we want to avoid useless spaces
    "no-multi-spaces": ["error"],
    "no-unused-vars": "off",
  },
};
