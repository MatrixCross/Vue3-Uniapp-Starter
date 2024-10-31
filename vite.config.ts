import path from 'node:path'
import uni from '@dcloudio/vite-plugin-uni'
import { uniuseAutoImports } from '@uni-helper/uni-use'
import { VkUviewUiResolver } from '@wyatex/unplugin-gen-uniapp-components-dts/resolvers'
import genComponentDts from '@wyatex/unplugin-gen-uniapp-components-dts/vite'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
// unocss新版只提供esm打包，但是uniapp不支持
// 暂时用jiti兼容，等待nodejs v22之后应该能支持cjs和esm互相导入
import createJITI from 'jiti'

const jiti = createJITI(__filename)
const unocss = jiti('unocss/vite').default

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // https://github.com/antfu/unocss
    unocss(),
    autoImport({
      dts: './src/types/auto-imports.d.ts',
      imports: ['vue', 'pinia', '@vueuse/core', uniuseAutoImports()],
      dirs: ['./src/store', './src/hooks/**', './src/api'],
    }),
    genComponentDts({
      dtsPath: './src/types/components.d.ts',
      resolvers: [VkUviewUiResolver],
    }),
  ],
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
