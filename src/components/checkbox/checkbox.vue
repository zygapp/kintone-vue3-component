<script setup>
import { computed, ref } from 'vue'
const emits = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
  column    : { type: Boolean, default: false },
  readOnly  : { type: Boolean, default: false },
  nonstyled: { type: Boolean, default: false },
  itemLabel : { type: String, default: 'label' },
  itemValue : { type: String, default: 'value' },
  items     : { type: Array, default: () => ([]) },
  modelValue: { type: Array, default: () => ([]) },
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
    return '#e3e7e8'
  } else {
    if (props.modelValue.includes(item[props.itemValue] ?? item)) {
      return '#3498db'
    } else {
      return '#e3e7e8'
    }
  }
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
        :value="item[itemValue] ?? item"
      >
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="19"
          height="19"
          rx="1"
          fill="white"
          stroke-width="2"
          :stroke="iconColor(item)"
        ></rect>
        <path
          v-if="vModel.includes(item[itemValue] ?? item)"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
          :fill="iconColor(item)"
        ></path>
      </svg>

      <span>{{ item[itemLabel] ?? item }}</span>
    </label>
  </div>
</template>