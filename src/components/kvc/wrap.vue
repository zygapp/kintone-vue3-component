<script setup lang="ts">
import { KvcWrapProps } from '@/types/component-types'
import { useSpinner } from '../../composables/useSpinner'
import KvcSpinner from './spinner.vue'

defineProps<KvcWrapProps>()

const emits = defineEmits<{
  (e: 'submit', event: Event): void
}>()

const { spinnerState } = useSpinner()
</script>

<template>
  <component
    :is="isForm ? 'form' : 'div'"
    id="kvc-wrap"
    class="kvc-wrap"
    @submit.prevent="emits('submit', $event)"
  >
    <slot></slot>

    <!-- スピナーをKvcWrap内に埋め込み -->
    <KvcSpinner
      :modelValue="spinnerState.isVisible"
      :text="spinnerState.text"
    />
  </component>
</template>
