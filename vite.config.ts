import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
import unocss from 'unocss/vite'
import unimport from 'unimport/unplugin'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // https://github.com/antfu/unocss
    unocss(),
    autoImport({
      dts: './src/types/auto-imports.d.ts',
      imports: ['vue', 'pinia', '@vueuse/core'],
      dirs: ['./src/store', './src/hooks/**', './src/api'],
      eslintrc: {
        enabled: true
      }
    }),
    components({
      dts: './src/types/components.d.ts',
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }]
    }),
    unimport.vite({
      dts: './src/types/unimport.d.ts',
      presets: ['vue', 'pinia', '@vueuse/core']
    })
  ],
  server: {
    // port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api/': {
        target:
          'https://service-rbji0bev-1256505457.cd.apigw.tencentcs.com/release',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
      },
      '/api-prod/': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api-prod/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components')
    }
  }
})
