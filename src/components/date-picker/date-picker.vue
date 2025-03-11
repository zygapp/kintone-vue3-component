<script setup>
import { computed, ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import KvcTextInput from '../text-input'
import UtilDatePicker from '../utility/DatePicker.vue'

const emits = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
  modelValue: { type: String, default: '' },
  readOnly: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  nonstyled: { type: Boolean, default: false },
})

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emits('update:modelValue', value);
    emits('change', value);
  }
});

const validDateFormat = ($event) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test($event.target.value)) {
    emits('update:modelValue', '');
    emits('change', '');
  }
}

const isFocused = ref(false)
const isVisible = ref(false)
const inputRef    = ref()
const calendarRef = ref()

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

onClickOutside(calendarRef, event => {
  if (!isFocused.value) {
    isVisible.value = false
    isFocused.value = false
  }
});
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