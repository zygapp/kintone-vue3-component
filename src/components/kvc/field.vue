<script setup lang="ts">
import { useSlots, computed } from 'vue'
import type { VNode } from 'vue'
import { KvcFieldProps } from '@/types/component-types'

const props = defineProps<KvcFieldProps>()
const slots = useSlots() as {
  prefix?: (props?: any) => VNode[]
  suffix?: (props?: any) => VNode[]
}

const isNumber = (value: unknown): boolean =>
  typeof value === 'number' || !isNaN(Number(value))

const $width = computed(() => {
  if (props.width) {
    return isNumber(props.width) ? `${props.width}px` : props.width
  } else {
    return 'fit-content'
  }
})
</script>

<template>
  <div :style="{ width: $width }" class="kvc-field">
    <label class="kvc-field-label">
      <slot name="label"></slot>
      <span v-if="required" class="kvc-field-required"></span>
    </label>

    <div class="kvc-field-input">
      <div v-if="slots.prefix?.()" class="kvc-field-prefix">
        <slot name="prefix"></slot>
      </div>
      <slot></slot>
      <div v-if="slots.suffix?.()" class="kvc-field-suffix">
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
