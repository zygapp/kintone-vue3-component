<script setup lang="ts">
import { useSlots, computed } from 'vue'
import { KvcFieldProps } from '@/types/component-types'

const props = defineProps<KvcFieldProps>()
const slots = useSlots()

const isNumber = (value: unknown): boolean =>
  typeof value === 'number' || !isNaN(Number(value))

const $width = computed(() =>
  isNumber(props.width) ? `${props.width}px` : props.width
)
</script>

<template>
  <div :style="{ maxWidth: $width }" class="kvc-field">
    <label class="kvc-field-label">
      <slot name="label"></slot>
      <span v-if="required" class="kvc-field-required"></span>
    </label>

    <div class="kvc-field-input">
      <div v-if="slots.prefix && slots.prefix()" class="kvc-field-prefix">
        <slot name="prefix"></slot>
      </div>
      <slot></slot>
      <div v-if="slots.suffix && slots.suffix()" class="kvc-field-suffix">
        <slot name="suffix"></slot>
      </div>
    </div>

    <div
      v-if="errorMessage || successMessage"
      :class="{
        'kvc-field-message-error': errorMessage,
        'kvc-field-message-success': successMessage,
      }"
    >
      {{ errorMessage || successMessage }}
    </div>
  </div>
</template>
