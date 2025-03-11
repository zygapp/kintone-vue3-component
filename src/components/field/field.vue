<script setup>
import { useSlots, computed } from 'vue'
const slots = useSlots()
const props = defineProps({
  required: { type: Boolean, default: false },
  width: { type: [String, Number], default: 'auto' },
  errorMessage: { type: String, default: '' },
  successMessage: { type: String, default: '' },
})

const $width = computed(() => props.width + (isNumber(props.width) ? 'px' : ''))
const isNumber = (value) => typeof props.width === 'number' || !isNaN(props.width)
</script>

<template>
  <div :style="{ maxWidth: $width }" class="kvc-field">
    <label class="kvc-field-label">
      <slot name="label"></slot>
      <span v-if="required" class="kvc-field-required"></span>
    </label>

    <div class="kvc-field-input">
      <div
        v-if="slots.prefix && slots.prefix()"
        class="kvc-field-prefix"
      >
        <slot name="prefix"></slot>
      </div>
      <slot></slot>
      <div
        v-if="slots.suffix && slots.suffix()"
        class="kvc-field-suffix"
      >
        <slot name="suffix"></slot>
      </div>
    </div>

    <div
      v-if="errorMessage || successMessage"
      :class="{
        'kvc-field-message-error': errorMessage,
        'kvc-field-message-success': successMessage,
      }"
    >{{ errorMessage || successMessage }}</div>
  </div>
</template>