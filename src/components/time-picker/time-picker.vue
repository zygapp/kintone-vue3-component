<script setup>
import { computed, ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import KvcTextInput from '../text-input'
import UtilSelectList from '../utility/SelectList.vue'

const emits = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
  modelValue: { type: String, default: '' },
  readOnly: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
})

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emits('update:modelValue', value);
    emits('change', value);
  }
});

const validTimeFormat = ($event) => {
  const regex = /^\d{2}-\d{2}$/;
  if (!regex.test($event.target.value)) {
    emits('update:modelValue', '');
    emits('change', '');
  }
}

const generateTimes = computed(() => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const $minute = `${minute === 0 ? '00' : '30'}`
      times.push({
        label: `${hour}:${$minute}`,
        value: `${hour.toString().padStart(2, '0')}:${$minute}`,
      });
    }
  }
  return times;
})


const isFocused = ref(false)
const isVisible = ref(false)
const inputRef  = ref()
const timeRef   = ref()

const handleFocus = () => {
  isFocused.value = true
  isVisible.value = true
}
const handleBlur = () => {
  isFocused.value = false
}

onClickOutside(timeRef, event => {
  if (!isFocused.value) {
    isVisible.value = false
    isFocused.value = false
  }
});
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