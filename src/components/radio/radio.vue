<script setup>
import { computed } from 'vue'
const emits = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
  column    : { type: Boolean, default: false },
  readOnly  : { type: Boolean, default: false },
  nonstyled: { type: Boolean, default: false },
  itemLabel : { type: String, default: 'label' },
  itemValue : { type: String, default: 'value' },
  items     : { type: Array, default: () => ([]) },
  modelValue: { type: [Number,String,Boolean,Object], default: null },
})

const vModel = computed({
  get: () => props.modelValue,
  set: (value) => {
    emits('update:modelValue', value)
    emits('change', value)
  }
})

const iconColor = (item) => {
  if (item.disabled) {
    return '#d8d8d8'
  } else {
    if (props.modelValue == (item?.[props.itemValue] ?? item)) {
      return '#3498db'
    } else {
      return '#d8d8d8'
    }
  }
}
</script>

<template>
  <p
    v-if="readOnly"
    class="kvc-field-value"
    :class="{'kvc-field-value-nonstyled': nonstyled}"
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
        :value="item?.[itemValue] ?? item"
      >

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
        ></circle>
        <circle
          v-if="vModel == (item?.[itemValue] ?? item)"
          cx="10.5"
          cy="10.5"
          r="6.5"
          :fill="iconColor(item)"
        ></circle>
      </svg>

      <span>{{ item?.[itemLabel] ?? item }}</span>
    </label>
  </div>
</template>