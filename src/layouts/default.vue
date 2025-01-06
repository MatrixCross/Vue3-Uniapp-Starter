<script setup lang="ts">
import UpToast from 'uview-plus/components/u-toast/u-toast.vue'

import { onShow } from '@dcloudio/uni-app'

const uToast = ref<InstanceType<typeof UpToast>>()

onMounted(() => {
  getApp().globalData!.uToast = uToast.value
})
onShow(() => {
  getApp().globalData!.uToast = uToast.value
})
</script>

<template>
  <view class="default-layout p-32rpx">
    <slot />
    <view class="mx-auto mt-5 text-center text-sm opacity-25">
      [Default Layout]
    </view>
    <UpToast ref="uToast" />
  </view>
</template>
