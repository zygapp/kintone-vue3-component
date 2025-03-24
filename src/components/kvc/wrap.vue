<script setup lang="ts">
import { KvcWrapProps } from '@/types/component-types'

defineProps<KvcWrapProps>()

const emits = defineEmits<{
  (e: 'submit', event: Event): void
}>()
</script>

<template>
  <component
    :is="isForm ? 'form' : 'div'"
    id="kvc-wrap"
    class="kvc-wrap"
    @submit.prevent="emits('submit', $event)"
  >
    <slot></slot>
  </component>
</template>
