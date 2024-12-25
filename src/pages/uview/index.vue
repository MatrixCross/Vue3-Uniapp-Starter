<script setup lang="ts">
import { useUviewToast } from '@/hooks/use-uview-toast'

const { show } = useUviewToast()
function showToast(type: string) {
  show({
    type,
    title: '这是一个提示',
  })
  // getApp().globalData?.uToast.show({
  //   type,
  //   title: '这是一个提示',
  // })
}
</script>

<template>
  <view>
    <u-button @click="showToast">
      默认按钮
    </u-button>
    <u-button type="primary" @click="showToast('primary')">
      主要按钮
    </u-button>
    <u-button type="success" @click="showToast('success')">
      成功按钮
    </u-button>
    <u-button type="info" @click="showToast('info')">
      信息按钮
    </u-button>
    <u-button type="warning" @click="showToast('warning')">
      警告按钮
    </u-button>
    <u-button type="error" @click="showToast('error')">
      危险按钮
    </u-button>
    <u-button size="default" @click="showToast">
      江湖
    </u-button>
    <u-button size="medium">
      夜雨
    </u-button>
    <u-button size="mini">
      十年灯
    </u-button>
  </view>
</template>
