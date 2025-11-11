<script setup lang="ts">
import { computed } from 'vue'
import { KvcTextareaProps } from '@/types/component-types'

const props = defineProps<KvcTextareaProps>()

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
    v-html="(inputValue || ' ').replace(/\n/g, '<br>')"
  ></p>

  <textarea
    v-else
    class="kvc-field-text"
    v-model="inputValue"
  ></textarea>
</template>
