<script setup lang="ts">
import { computed } from 'vue'
import { KvcCheckboxProps } from '@/types/component-types'

const props = defineProps<KvcCheckboxProps>()
const emits = defineEmits<{
  (e: 'update:modelValue', value: (string | number)[]): void
  (e: 'change', value: (string | number)[]): void
}>()

const vModel = computed({
  get: () => props.modelValue ?? '',
  set: (value: (string | number)[]) => {
    emits('update:modelValue', value)
    emits('change', value)
  }
})

const iconColor = (item: any): string => {
  const key = props.itemValue ?? 'value'
  const itemValue = typeof item === 'object' ? item[key] : item

  if (item.disabled) return '#e3e7e8'
  return props.modelValue.includes(itemValue) ? '#3498db' : '#e3e7e8'
}

const getItemLabel = (item: any): string => {
  const labelKey = props.itemLabel ?? 'label'
  return typeof item === 'object' ? item[labelKey] : item
}

const getItemValue = (item: any): string => {
  const labelKey = props.itemValue ?? 'value'
  return typeof item === 'object' ? item[labelKey] : item
}
</script>

<template>
  <p
    v-if="readOnly"
    class="kvc-field-value"
    :class="{'kvc-field-value-nonstyled': nonstyled}"
    v-html="modelValue.join(', ')"
  ></p>

  <div
    v-else
    class="kvc-checkbox-group"
    :class="{'kvc-checkbox-group-column': column}"
  >
    <label
      v-for="(item, i) of items"
      :key="i"
      class="kvc-checkbox-item"
    >
      <input
        type="checkbox"
        v-model="vModel"
        :disabled="typeof item === 'object' ? item.disabled : false"
        :value="getItemValue(item)"
      >
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="1" y="1" width="19" height="19" rx="1"
          fill="white" stroke-width="2"
          :stroke="iconColor(item)"
        />
        <path
          v-if="vModel.includes(getItemValue(item))"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
          :fill="iconColor(item)"
        />
      </svg>
      <span>{{ getItemLabel(item) }}</span>
    </label>
  </div>
</template>
