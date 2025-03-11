<script setup>
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { onClickOutside } from '@vueuse/core'
import UtilSelectList from '../utility/SelectList.vue'

const emits = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
  nonstyled : { type: Boolean, default: false },
  disabled  : { type: Boolean, default: false },
  readOnly  : { type: Boolean, default: false },
  items     : { type: Array, default: () => ([]) },
  itemLabel : { type: String, default: 'label' },
  itemValue : { type: String, default: 'value' },
  modelValue: { type: [String,Number], default: null },
})

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emits('update:modelValue', value);
    emits('change', value);
  }
});

const isFocused = ref(false)
const isVisible = ref(false)
const buttonRef = ref()
const timeRef   = ref()

onClickOutside(timeRef, event => {
  if (!isFocused.value) {
    isVisible.value = false
    isFocused.value = false
  }
});
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
    class="kvc-dropdown"
  >
    <button
      ref="buttonRef"
      type="button"
      class="kvc-dropdown-button"
      :disabled="disabled"
      @click="isVisible = true"
    >
      {{ items.find(v => v[itemValue] == inputValue)?.[itemLabel] }}
      <icon icon="mdi-light:chevron-down" width="24" />
    </button>

    <UtilSelectList
      v-if="!(readOnly || disabled)"
      v-show="isVisible"
      v-model="inputValue"
      ref="timeRef"
      :items="items"
      :labelKey="itemLabel"
      :valueKey="itemValue"
      @change="isVisible = false"
    />
  </div>
</template>