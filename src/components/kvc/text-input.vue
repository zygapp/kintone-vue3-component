<script setup lang="ts">
import { computed } from 'vue'
import { KvcTextInputProps } from '@/types/component-types'

const props = defineProps<KvcTextInputProps>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const inputValue = computed({
  get: () => props.modelValue ?? '',
  set: (value: string) => emits('update:modelValue', value)
})

const isNumber = (value: unknown): boolean =>
  typeof value === 'number' || !isNaN(Number(value))

const $width = computed(() => {
  if (props.width) {
    return isNumber(props.width) ? `${props.width}px` : props.width
  } else {
    return '100%'
  }
})
</script>

<template>
  <p
    v-if="readOnly"
    class="kvc-field-value"
    :class="{ 'kvc-field-value-nonstyled': nonstyled }"
  >
    {{ (inputValue || ' ').replace(/\r|\n/g, '') || ' ' }}
  </p>

  <input
    v-else
    v-model="inputValue"
    class="kvc-field-text"
    :style="{ width: $width }"
    :placeholder="placeholder"
    :type="type"
    :min="min"
    :max="max"
  />
</template>
