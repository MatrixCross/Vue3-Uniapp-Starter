/* eslint-disable */
// @ts-nocheck
// 如果需要使用uniapp提供的easycom功能，
// 需要在这里声明下类型，用于提供类型提示
// todo: 后面实现一个插件来自动生成
export {}

/* prettier-ignore */
declare module 'vue' {
  export interface GlobalComponents {
    Hello: typeof import('./../components/hello/hello.vue')['default']
    Unocss: typeof import('./../components/unocss/unocss.vue')['default']
  }
}
