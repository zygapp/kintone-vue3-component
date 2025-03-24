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
    :placeholder="placeholder"
    :type="type"
    :min="min"
    :max="max"
  />
</template>
