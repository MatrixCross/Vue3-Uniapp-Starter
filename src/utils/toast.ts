type ToastOptions = Partial<{
  // 显示的文本
  message: string
  // 主题类型，不填默认为default
  type: string
  // toast的持续时间，单位ms，不填默认为2000
  duration: number
  // 是否显示显示type对应的图标，为false不显示图标
  icon: string
  // toast出现的位置，默认center，可选top / bottom
  position: string
  // toast结束后执行的回调方法
  complete: () => void
  // 跳转的参数
  params: object
}>

export function showUviewToast(options: ToastOptions) {
  getApp().globalData?.uToast.show(options)
}
