<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '分包演示',
  },
})
</script>

<template>
  <view class="index-page">
    这是子包
  </view>
</template>

<style scoped>
.index-page {
  font-style: normal;
  text-align: center;
}
.h2 {
  color: green;
  font-size: 50rpx;
}
navigator {
  color: #1e80ff;
}
</style>
