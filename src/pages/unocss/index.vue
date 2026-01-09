<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: 'UnoCSS 示例',
  },
})

const flag = ref(true)

function switchFlag() {
  flag.value = !flag.value
}
</script>

<template>
  <view class="bg-#e2f3fe p-4">
    <view class="mb-2 text-lg text-c2">
      使用 class
    </view>
    <view class="mx-auto flex items-center rounded-xl bg-white p-5 shadow-md">
      <view>
        <view class="i-logos-unocss h-100 w-100 bg-cover" />
      </view>
      <view class="ml-5">
        <view class="text-xl text-c1">
          UnoCSS
        </view>
        <view class="text-c3">
          The instant on-demand Atomic CSS engine.
        </view>
      </view>
    </view>

    <view class="mb-2 mt-4 flex">
      <view class="mr-4 text-lg text-c2">
        切换 class
      </view>
      <view class="rounded bg-#3498db/20 px-2 py-1 text-#3498db" @click="switchFlag">
        点我切换
      </view>
    </view>

    <view class="mx-auto flex items-center rounded-xl p-5 shadow-md" :class="[flag ? 'bg-white' : 'bg-green']">
      <view>
        <view class="i-logos-unocss h-100 w-100 bg-cover" />
      </view>
      <view class="ml-5">
        <view class="text-xl">
          UnoCSS
        </view>
        <view class="text-c3">
          The instant on-demand Atomic CSS engine.
        </view>
      </view>
    </view>

    <view text="lg c2" m="b2 t4">
      使用 Attributify mode
    </view>
    <view mx-auto flex items-center rounded-xl bg-white p-5 shadow-md>
      <view>
        <view h-100 w-100 bg="cover" class="i-logos-unocss" />
      </view>
      <view ml-5>
        <view text="xl c1">
          UnoCSS
        </view>
        <view text-c3>
          The instant on-demand Atomic CSS engine.
        </view>
      </view>
    </view>

    <view text="lg c2" m="b2 t4">
      基础动画
    </view>
    <view my-2 flex items-center justify-center>
      <view animate="iteration-infinite swing" m-3 h-100 w-100 bg-cover class="i-logos-unocss" />

      <view m-3 h-100 w-100 bg-cover animate="pulse-bck" class="i-logos-unocss" />

      <view m-3 h-100 w-100 bg-cover animate="rubber-band iteration-infinite" class="i-logos-unocss" />
    </view>
  </view>
</template>
