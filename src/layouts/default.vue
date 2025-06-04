<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'

import UpToast from 'uview-plus/components/u-toast/u-toast.vue'
import WdToast from 'wot-design-uni/components/wd-toast/wd-toast.vue'

const uToast = ref<InstanceType<typeof UpToast>>()
const wotToast = ref<InstanceType<typeof WdToast>>()

onMounted(() => {
  getApp().globalData!.uToast = uToast.value
  getApp().globalData!.wdToast = wotToast.value
})
onShow(() => {
  getApp().globalData!.uToast = uToast.value
  getApp().globalData!.wdToast = wotToast.value
})
</script>

<template>
  <view class="default-layout p-32rpx">
    <slot />
    <view class="mx-auto mt-5 text-center text-sm opacity-25">
      [Default Layout]
    </view>
    <UpToast ref="uToast" />
    <WdToast ref="wotToast" />
  </view>
</template>
