<script lang="ts" setup>
const phone = ref('12345678901')

function getCode() {
  userApi
    .getCode(phone.value)
    .then((v) => {
      uni.showToast({
        title: `${v.num}`,
        icon: 'success',
      })
    })
}
</script>

<template>
  <view class="axios-demo">
    <view class="title-h1">
      Request Page
    </view>
    <input v-model="phone" type="number">
    <button @click="getCode">
      获取验证码(GET)
    </button>
  </view>
</template>

<style scoped>
.axios-demo {
  text-align: center;
}
.title-h1 {
  font-size: 50rpx;
}
</style>
