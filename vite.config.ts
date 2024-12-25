import type { ComponentResolver } from '@uni-helper/vite-plugin-uni-components'
import path from 'node:path'
import uni from '@dcloudio/vite-plugin-uni'
import { uniuseAutoImports } from '@uni-helper/uni-use'
import components, { kebabCase } from '@uni-helper/vite-plugin-uni-components'
import layouts from '@uni-helper/vite-plugin-uni-layouts'
import manifest from '@uni-helper/vite-plugin-uni-manifest'
// unocss新版只提供esm打包，但是uniapp不支持
// 暂时用jiti兼容，等待nodejs v22之后应该能支持cjs和esm互相导入
import createJITI from 'jiti'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

const jiti = createJITI(__filename)
const unocss = jiti('unocss/vite').default

function UViewResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^U[A-Z]/)) {
        const compName = kebabCase(name)
        return {
          name,
          from: `vk-uview-ui/components/${compName}/${compName}.vue`,
        }
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    manifest(),
    layouts(),
    components({
      dts: './src/types/components.d.ts',
      resolvers: [
        UViewResolver(),
      ],
    }),
    uni(),
    // https://github.com/antfu/unocss
    unocss(),
    autoImport({
      dts: './src/types/auto-imports.d.ts',
      imports: ['vue', 'pinia', '@vueuse/core', uniuseAutoImports()],
      dirs: ['./src/store', './src/hooks/**', './src/api'],
    }),
  ],
  css: {
    // 配置`scss`和`less`全局变量
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/vars/_base.scss";',
      },
      less: {
        additionalData: '@import "@/styles/vars/_base.less";',
      },
    },
  },
  server: {
    // port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api/': {
        target:
          'https://service-rbji0bev-1256505457.cd.apigw.tencentcs.com/release',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/api/, ''),
      },
      '/api-prod/': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/api-prod/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
})
