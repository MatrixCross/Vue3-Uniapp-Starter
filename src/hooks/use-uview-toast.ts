import type UToast from 'vk-uview-ui/components/u-toast/u-toast.vue'

type IToast = Partial<{
  // 显示的文本
  title: string
  // 主题类型，不填默认为default
  type: string
  // toast的持续时间，单位ms，不填默认为2000
  duration: number
  // toast结束跳转的url，不填不跳转，优先级高于back参数
  url: string
  // 是否显示显示type对应的图标，为false不显示图标
  icon: boolean
  // toast出现的位置，默认center，可选top / bottom
  position: string
  // toast结束后执行的回调方法
  callback: () => void
  // toast结束后，跳转tab页面时需要配置为true
  isTab: boolean
  // toast结束后，是否返回上一页，优先级低于url参数
  back: boolean
}>

export function useUviewToast() {
  return {
    show: (options: IToast) => {
      getApp().globalData?.uToast.show(options)
    },
  }
}
