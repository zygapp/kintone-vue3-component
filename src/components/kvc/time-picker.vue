<script setup lang="ts">
import { computed, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { KvcTimePickerProps } from '@/types/component-types'

import KvcTextInput from './text-input.vue'
import UtilSelectList from './utility/SelectList.vue'

const props = defineProps<KvcTimePickerProps>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()

const inputValue = computed({
  get: () => props.modelValue ?? '',
  set: (value: string) => {
    emits('update:modelValue', value)
    emits('change', value)
  }
})

const validTimeFormat = ($event: Event) => {
  const target = $event.target as HTMLInputElement
  const regex = /^\d{2}:\d{2}$/
  if (!regex.test(target.value)) {
    emits('update:modelValue', '')
    emits('change', '')
  }
}

const generateTimes = computed(() => {
  const times: { label: string; value: string }[] = []
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const $minute = minute === 0 ? '00' : '30'
      times.push({
        label: `${hour}:${$minute}`,
        value: `${hour.toString().padStart(2, '0')}:${$minute}`
      })
    }
  }
  return times
})

const isFocused = ref(false)
const isVisible = ref(false)
const inputRef = ref<HTMLElement | null>(null)
const timeRef = ref<HTMLElement | null>(null)

const handleFocus = () => {
  isFocused.value = true
  isVisible.value = true
}
const handleBlur = () => {
  isFocused.value = false
}

onClickOutside(timeRef, () => {
  if (!isFocused.value) {
    isVisible.value = false
    isFocused.value = false
  }
})
</script>

<template>
  <div class="kvc-time-picker">
    <KvcTextInput
      :read-only="readOnly"
      :disabled="disabled"
      v-model="inputValue"
      ref="inputRef"
      :class="readOnly ? 'w-16 text-left' : 'max-w-20 text-center'"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="validTimeFormat"
    />
    <UtilSelectList
      v-if="!(readOnly || disabled)"
      v-show="isVisible"
      v-model="inputValue"
      ref="timeRef"
      :items="generateTimes"
      :max-height="183"
      @change="isVisible = false"
    />
  </div>
</template>
