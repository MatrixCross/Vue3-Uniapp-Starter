<script setup lang="ts">
import type { ContentProps } from './content-props'

defineProps<ContentProps>()
defineEmits<{
  add: [void]
  asyncAdd: [void]
}>()
const count = defineModel<number>({ default: 0 })

// isEven
const isEven = computed(() => count.value % 2 === 0)
// or 从 getters 中获取
// const { isEven } = storeToRefs(store)
// or 从 getters 中获取
// const isEven = computed(() => store.isEven)
</script>

<template>
  <view>
    <view class="title-h2">
      {{ msg }}
    </view>
    <text class="title-h3">
      {{ isEven ? 'Even' : 'Odd' }}
    </text>
    <text>{{ count }}</text>
    <view>
      <button @click="$emit('add')">
        Sync Add
      </button>
      <button @click="$emit('asyncAdd')">
        Async Add
      </button>
    </view>
  </view>
</template>

<style></style>
