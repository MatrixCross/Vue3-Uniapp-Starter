import type { ComponentResolver } from '@uni-helper/vite-plugin-uni-components'
import path from 'node:path'
import uni from '@dcloudio/vite-plugin-uni'
import { uniuseAutoImports } from '@uni-helper/uni-use'
import components, { kebabCase } from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import layouts from '@uni-helper/vite-plugin-uni-layouts'
import manifest from '@uni-helper/vite-plugin-uni-manifest'
import pages from '@uni-helper/vite-plugin-uni-pages'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

function UViewResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^U[A-Z]/)) {
        const compName = kebabCase(name)
        return {
          name,
          from: `uview-plus/components/${compName}/${compName}.vue`,
        }
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const unocss = await import('unocss/vite').then(i => i.default)
  return {
    plugins: [
      manifest(),
      pages({
        // 忽略
        exclude: ['**/components/*.*'],
        // 子包
        subPackages: ['src/package-a'],
      }),
      layouts(),
      components({
        dts: './src/types/components.d.ts',
        resolvers: [WotResolver(), UViewResolver()],
      }),
      unocss({
        hmrTopLevelAwait: false,
      }),
      uni(),
      // https://github.com/antfu/unocss
      autoImport({
        dts: './src/types/auto-imports.d.ts',
        imports: ['vue', 'pinia', 'uni-app', uniuseAutoImports(), {
          'wot-design-uni': [
            ['useToast', 'useWdToast'],
          ],
        }],
        dirs: ['./src/store', './src/hooks/**', './src/api', './src/utils'],
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
  }
})
