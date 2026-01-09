import antfu from '@antfu/eslint-config'
import { importX } from 'eslint-plugin-import-x'

export default antfu({
  unocss: true,
  typescript: true,
  formatters: true,
  vue: true,
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
  },
  plugins: {
    'import-x': importX,
  },
  rules: {
    'no-console': 'off',
    // 配置 import-x/order 规则
    'import-x/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        ],
      },
    ],
  },
})
