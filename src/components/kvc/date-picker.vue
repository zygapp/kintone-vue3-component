<script setup lang="ts">
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { KvcDatePickerProps } from '@/types/component-types'
import KvcTextInput from './text-input.vue'
import UtilDatePicker from './utility/DatePicker.vue'

const props = defineProps<KvcDatePickerProps>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()

const inputValue = computed({
  get: () => props.modelValue ?? '',
  set: (value: string) => {
    emits('update:modelValue', value)
    emits('change', value)
  },
})

const validDateFormat = ($event: Event) => {
  const target = $event.target as HTMLInputElement
  const regex = /^\d{4}-\d{2}-\d{2}$/
  if (!regex.test(target.value)) {
    emits('update:modelValue', '')
    emits('change', '')
  }
}

const isFocused = ref(false)
const isVisible = ref(false)
const inputRef = ref<HTMLElement | null>(null)
const calendarRef = ref<HTMLElement | null>(null)

const handleFocus = () => {
  isFocused.value = true
  isVisible.value = true
}
const handleBlur = () => {
  isFocused.value = false
}

const handleClose = () => {
  isVisible.value = false
  isFocused.value = false
}

onClickOutside(calendarRef, () => {
  if (!isFocused.value) {
    isVisible.value = false
    isFocused.value = false
  }
})
</script>

<template>
  <div class="kvc-date-picker">
    <KvcTextInput
      :read-only="readOnly"
      :disabled="disabled"
      :nonstyled="nonstyled"
      v-model="inputValue"
      ref="inputRef"
      class="text-center"
      :class="readOnly ? 'w-28' : 'max-w-28'"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="validDateFormat"
    />
    <UtilDatePicker
      v-model="inputValue"
      ref="calendarRef"
      v-if="!(readOnly || disabled)"
      v-show="isVisible"
      @close="handleClose"
    />
  </div>
</template>
