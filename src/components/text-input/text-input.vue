<script setup>
import { computed } from 'vue';

const emits = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: { type: String, default: '' },
  nonstyled: { type: Boolean, default: false },
  readOnly: { type: Boolean, default: false },
  width: { type: String, default: '150px' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  min: { type: [String,Number], default: undefined },
  max: { type: [String,Number], default: undefined },
})

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
});
</script>

<template>
  <p
    v-if="readOnly"
    class="kvc-field-value"
    :class="{'kvc-field-value-nonstyled': nonstyled}"
  >{{ (inputValue || ' ').replace(/\r|\n/g, '') || ' ' }}</p>

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