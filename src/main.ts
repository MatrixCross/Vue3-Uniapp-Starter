import * as Pinia from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'
import uviewPlus from 'uview-plus'

import { createSSRApp } from 'vue'
import App from './App.vue'

import 'uno.css'

const store = Pinia.createPinia()
store.use(createUnistorage())

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(uviewPlus)
  return {
    app,
    // uni-app 官方文档示例 https://zh.uniapp.dcloud.io/tutorial/vue3-pinia.html#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86-pinia
    Pinia, // 此处必须将 Pinia 返回
  }
}
