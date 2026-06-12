import type { ToastOptions } from 'wot-design-uni/components/wd-toast/types'

export function showWdToast(options: ToastOptions) {
  getApp().globalData?.wdToast.showToast(options)
}
