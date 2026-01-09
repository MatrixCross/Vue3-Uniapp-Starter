<script setup lang="ts">
// 获取自定义的store
import DemoContent from './components/demo-content.vue'

definePage({
  style: {
    navigationBarTitleText: '状态管理工具（pinia）',
  },
})

const store = useCountStore()

// asyncAdd 方法
// const asyncAdd = () => store.$patch((v) => {
//   setTimeout(() => {
//     v.count++
//   }, 1000)
// })
// or actions
const asyncAdd = () => store.asyncIncrease()
</script>

<template>
  <view class="pinia-demo">
    <DemoContent v-model="store.count" msg="Pinia(Replace Vuex)" @add="store.count++" @async-add="asyncAdd" />
  </view>
</template>

<style lang="scss" scoped>
.pinia-demo {
  text-align: center;

  :deep(.title-h2) {
    color: red;
    font-size: 40rpx;
  }

  :deep(.title-h3) {
    font-weight: bold;
  }
}
</style>
