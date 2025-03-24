<script setup lang="ts">
import { computed } from 'vue'
import { KvcRadioItem, KvcRadioProps } from '@/types/component-types'

const props = defineProps<KvcRadioProps>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number | boolean | object | null): void
  (e: 'change', value: string | number | boolean | object | null): void
}>()

const vModel = computed({
  get: () => props.modelValue ?? '',
  set: (value: string | number | boolean | object | null) => {
    emits('update:modelValue', value)
    emits('change', value)
  }
})

const valueKey = props.itemValue ?? 'value'
const labelKey = props.itemLabel ?? 'label'

const iconColor = (item: any): string => {
  if (item?.disabled) {
    return '#d8d8d8'
  } else {
    return props.modelValue == (item?.[valueKey] ?? item) ? '#3498db' : '#d8d8d8'
  }
}

const getItemValue = (item: string | number | KvcRadioItem): string | number | boolean => {
  if (typeof item === 'object' && item !== null) {
    return item[valueKey] ?? item
  }
  return item
}

const getItemLabel = (item: string | number | KvcRadioItem): string | number => {
  if (typeof item === 'object' && item !== null) {
    return item[labelKey] ?? item
  }
  return item
}
</script>

<template>
  <p
    v-if="readOnly"
    class="kvc-field-value"
    :class="{ 'kvc-field-value-nonstyled': nonstyled }"
    v-html="modelValue"
  ></p>

  <div
    v-else
    class="kvc-radio-group"
    :class="{ 'kvc-radio-group-column': column }"
  >
    <label
      v-for="(item, i) of items"
      :key="i"
      class="kvc-radio-item"
    >
      <input
        type="radio"
        v-model="vModel"
        :disabled="typeof item === 'object' ? item.disabled : false"
        :value="getItemValue(item)"
      />

      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="10.5"
          cy="10.5"
          r="10"
          fill="white"
          stroke="#e3e7e8"
          stroke-width="1"
        />
        <circle
          v-if="vModel == getItemValue(item)"
          cx="10.5"
          cy="10.5"
          r="6.5"
          :fill="iconColor(item)"
        />
      </svg>

      <span>{{ getItemLabel(item) }}</span>
    </label>
  </div>
</template>