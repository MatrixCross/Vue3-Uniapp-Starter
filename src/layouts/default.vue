<script setup lang="ts">
import type UToast from 'vk-uview-ui/components/u-toast/u-toast.vue'
import { onShow } from '@dcloudio/uni-app'

const uToast = ref<InstanceType<typeof UToast>>()

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
    <UToast ref="uToast" />
  </view>
</template>
