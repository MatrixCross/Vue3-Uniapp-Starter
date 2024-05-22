<template>
  <view class="index-page">
    <view class="w-100vw h-100vw i-local-feat"></view>
    <hello />
    <unocss />
    <text class="h2"> 查看其它页面示例↓ </text>
    <view pb-100rpx>
      <navigator v-for="(v, idx) in pages" :key="idx" :url="v.url">{{
        v.title
      }}</navigator>
    </view>
  </view>
</template>

<script setup lang="ts">
// @todo: unplugin-vue-components和easycom都不生效，待研究
import hello from '@/components/hello'
import unocss from '@/components/unocss'

const pages = reactive([
  {
    title: 'Pinia Demo',
    url: '/pages/pinia/index'
  },
  {
    title: 'Request Demo',
    url: '/pages/request/index'
  },
  {
    title: 'uView Demo',
    url: '/pages/uview/index'
  },
  {
    title: 'UnoCSS Demo',
    url: '/pages/unocss/index'
  }
])
</script>

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
