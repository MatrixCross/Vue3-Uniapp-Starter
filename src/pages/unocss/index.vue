<template>
  <view class="bg-#e2f3fe p-4">
    <view class="text-lg mb-2 text-c2">使用 class</view>
    <view class="p-5 bg-white rounded-xl shadow-md flex items-center mx-auto">
      <view>
        <view class="h-100 w-100 bg-cover i-logos-unocss" />
      </view>
      <view class="ml-5">
        <view class="text-xl text-c1">UnoCSS</view>
        <view class="text-c3">The instant on-demand Atomic CSS engine.</view>
      </view>
    </view>

    <view class="flex mb-2 mt-4">
      <view class="text-lg text-c2 mr-4">切换 class</view>
      <view
        class="bg-#3498db/20 text-#3498db rounded px-2 py-1"
        @click="switchFlag"
        >点我切换</view
      >
    </view>

    <view
      class="p-5 rounded-xl shadow-md flex items-center mx-auto"
      :class="[flag ? 'bg-white' : 'bg-green']"
    >
      <view>
        <view class="h-100 w-100 bg-cover i-logos-unocss" />
      </view>
      <view class="ml-5">
        <view class="text-xl">UnoCSS</view>
        <view class="text-c3">The instant on-demand Atomic CSS engine.</view>
      </view>
    </view>

    <view text="lg c2" m="b2 t4">使用 Attributify mode </view>
    <view rounded-xl shadow-md flex items-center mx-auto p-5 bg-white>
      <view>
        <view h-100 w-100 bg="cover" class="i-logos-unocss" />
      </view>
      <view ml-5>
        <view text="xl c1">UnoCSS</view>
        <view text-c3>The instant on-demand Atomic CSS engine.</view>
      </view>
    </view>

    <view text="lg c2" m="b2 t4">基础动画</view>
    <view flex justify-center items-center my-2>
      <view
        w-100
        h-100
        m-3
        animate="iteration-infinite swing"
        bg-cover
        class="i-logos-unocss"
      ></view>

      <view
        w-100
        h-100
        m-3
        bg-cover
        animate="pulse-bck"
        class="i-logos-unocss"
      ></view>

      <view
        w-100
        h-100
        m-3
        bg-cover
        animate="rubber-band iteration-infinite"
        class="i-logos-unocss"
      ></view>
    </view>
  </view>
</template>

<script setup lang="ts">
const flag = ref(true)

function switchFlag() {
  flag.value = !flag.value
}
</script>
