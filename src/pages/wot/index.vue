<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: 'WotUi 示例组件',
  },
})
const toast = useWdToast()
function showToast(type: 'show' | 'success' | 'info' | 'warning' | 'error' = 'show') {
  toast[type]?.('这是一个提示')
}
</script>

<template>
  <view>
    <wd-button @click="showToast">
      默认按钮
    </wd-button>
    <wd-button type="primary" @click="showToast('show')">
      主要按钮
    </wd-button>
    <wd-button type="success" @click="showToast('success')">
      成功按钮
    </wd-button>
    <wd-button type="info" @click="showToast('info')">
      信息按钮
    </wd-button>
    <wd-button type="warning" @click="showToast('warning')">
      警告按钮
    </wd-button>
    <wd-button type="error" @click="showToast('error')">
      危险按钮
    </wd-button>
    <wd-button size="large" @click="showToast">
      江湖
    </wd-button>
    <wd-button size="medium">
      夜雨
    </wd-button>
    <wd-button size="small">
      十年灯
    </wd-button>
  </view>
</template>
