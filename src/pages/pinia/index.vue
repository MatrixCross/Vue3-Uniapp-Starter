<script setup lang="ts">
// @todo: uniapp暂时不支持vue3.4的一些语法糖，content组件的写法会导致报错

// 获取自定义的store
import DemoContent from './components/demo-content.vue'

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
    <DemoContent
      v-model="store.count"
      msg="Pinia(Replace Vuex)"
      @add="store.count++"
      @async-add="asyncAdd"
    />
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
