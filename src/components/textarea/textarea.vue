<script setup>
import { computed } from 'vue';

const emits = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: { type: String, default: '' },
  nonstyled: { type: Boolean, default: false },
  readOnly: { type: Boolean, default: false },
  width: { type: String, default: '150px' },
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
    v-html="(inputValue || ' ').replace(/\n/g, '<br>')"
  ></p>

  <textarea
    v-else
    class="kvc-field-text"
    v-model="inputValue"
  ></textarea>
</template>