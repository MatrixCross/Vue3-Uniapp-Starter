<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: 'uni-app首页',
  },
})
const pages = reactive([
  {
    title: 'Pinia Demo',
    url: '/pages/pinia/index',
  },
  {
    title: 'Request Demo',
    url: '/pages/request/index',
  },
  {
    title: 'uView Demo',
    url: '/pages/uview/index',
  },
  {
    title: 'WotUi Demo',
    url: '/pages/wot/index',
  },
  {
    title: 'UnoCSS Demo',
    url: '/pages/unocss/index',
  },
  {
    title: '分包',
    url: '/package-a/page-a/index',
  },
])
</script>

<template>
  <view class="index-page">
    <view class="i-local-feat h-100vw w-full" />
    <hello />
    <unocss />
    <text class="h2">
      查看其它页面示例↓
    </text>
    <view pb-100rpx>
      <navigator v-for="(v, idx) in pages" :key="idx" :url="v.url">
        {{
          v.title
        }}
      </navigator>
    </view>
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
