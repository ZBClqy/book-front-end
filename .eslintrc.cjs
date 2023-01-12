module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    'vue'
  ],
  rules: {
    semi: [2, 'never'], // 禁止尾部使用分号“ ; ”
    'no-var': 'error', // 禁止使用 var
    indent: ['error', 2], // 缩进2格
    'no-mixed-spaces-and-tabs': 'error', // 不能空格与tab混用
    quotes: [2, 'single'] // 使用单引号
  }
}
