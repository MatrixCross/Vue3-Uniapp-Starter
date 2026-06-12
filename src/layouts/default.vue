<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'

import WdToast from 'wot-design-uni/components/wd-toast/wd-toast.vue'

const wotToast = ref<InstanceType<typeof WdToast>>()

onMounted(() => {
  getApp().globalData!.wdToast = wotToast.value
})
onShow(() => {
  getApp().globalData!.wdToast = wotToast.value
})
</script>

<template>
  <view class="default-layout p-32rpx">
    <slot />
    <view class="mx-auto mt-5 text-center text-sm opacity-25">
      [Default Layout]
    </view>
    <WdToast ref="wotToast" />
  </view>
</template>
