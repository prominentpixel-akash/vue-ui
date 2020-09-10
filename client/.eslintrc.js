module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // 'eslint:recommended',
    '@vue/typescript/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
    // parser: 'babel-eslint',
    // "ecmaFeatures": {
    //   "legacyDecorators": true
    // }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ],
  plugins: [
    'vue'
  ]
}
