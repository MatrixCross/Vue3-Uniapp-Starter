import * as Pinia from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'
import { createSSRApp } from 'vue'
// @ts-expect-error vk-uview-ui没有类型定义
import uView from 'vk-uview-ui'
import App from './App.vue'

// unocss
import 'uno.css'

const store = Pinia.createPinia()
store.use(createUnistorage())

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(uView)
  return {
    app,
    // uni-app 官方文档示例 https://zh.uniapp.dcloud.io/tutorial/vue3-pinia.html#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86-pinia
    Pinia, // 此处必须将 Pinia 返回
  }
}
