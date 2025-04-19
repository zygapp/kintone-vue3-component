<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { onClickOutside } from '@vueuse/core'
import { KvcDropdownProps } from '@/types/component-types'
import UtilSelectList from './utility/SelectList.vue'

const props = defineProps<KvcDropdownProps>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void
  (e: 'change', value: string | number | null): void
}>()

const inputValue = computed({
  get: () => props.modelValue ?? '',
  set: (value: string | number | null) => {
    emits('update:modelValue', value)
    emits('change', value)
  }
})

const isFocused = ref(false)
const isVisible = ref(false)
const buttonRef = ref<HTMLElement | null>(null)
const timeRef = ref<HTMLElement | null>(null)

onClickOutside(timeRef, () => {
  if (!isFocused.value) {
    isVisible.value = false
    isFocused.value = false
  }
})

const isNumber = (value: unknown): boolean =>
  typeof value === 'number' || !isNaN(Number(value))

const $width = computed(() => {
  console.log(props.width)
  if (props.width) {
    return isNumber(props.width) ? `${props.width}px` : props.width
  } else {
    return '100%'
  }
})

const getSelectedLabel = computed(() => {
  const valueKey = props.itemValue ?? 'value'
  const labelKey = props.itemLabel ?? 'label'

  const found = props.items.find((v) => typeof v === 'object' && v[valueKey] === props.modelValue)
  return found ? found[labelKey] : ''
})

</script>

<template>
  <p
    v-if="readOnly"
    class="kvc-field-value"
    :class="{ 'kvc-field-value-nonstyled': nonstyled }"
    v-html="modelValue"
  ></p>

  <div v-else class="kvc-dropdown">
    <button
      ref="buttonRef"
      type="button"
      class="kvc-dropdown-button"
      :disabled="disabled"
      @click="isVisible = true"
    >
      <span class="kvc-dropdown-label">{{ getSelectedLabel }}</span>
      <Icon icon="mdi-light:chevron-down" width="24" style="min-width: 24px;" />
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
