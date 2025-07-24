<script setup lang="ts">
import { KvcButtonProps } from '@/types/component-types'
withDefaults(defineProps<KvcButtonProps>(), {
  small: false
})
</script>

<template>
  <button
    type="button"
    class="kvc-button"
    :class="{
      'kvc-button-sm': small,
      'kvc-button-normal': color === 'normal',
      'kvc-button-success': color === 'success',
      'kvc-button-save': color === 'save',
      'kvc-button-error': color === 'error',
    }"
  >
    <slot></slot>
  </button>
</template>