module.exports = {
  extends: '@masonite/eslint-config-base',
  env: {
    browser: true,
    jquery: true,
  },
  rules: {
    'func-names': 0,
  },
  globals: {
    widen_media: 'readonly',
    jQuery: 'readonly',
  },
}
