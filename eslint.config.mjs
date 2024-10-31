import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    vue: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
    },
    rules: {
      'no-console': 'off',
    },
  },
)
