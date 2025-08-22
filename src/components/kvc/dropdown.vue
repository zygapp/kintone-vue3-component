<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { onClickOutside } from '@vueuse/core'
import { KvcDropdownProps } from '@/types/component-types'
import UtilSelectList from './utility/SelectList.vue'

const props = withDefaults(defineProps<KvcDropdownProps>(), {
  items: () => ([]),
  width: 100,
  disabled: false,
  readOnly: false,
  nonstyled: false,
  itemLabel: 'label',
  itemValue: 'value',
  itemDisabled: 'disabled',
})

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

const isVisible = ref(false)
const buttonRef = ref<HTMLElement | null>(null)
const selectListRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)

// ドロップダウン全体の外側をクリックした時に閉じる
onClickOutside(dropdownRef, () => {
  isVisible.value = false
})

const isNumber = (value: unknown): boolean =>
  typeof value === 'number' || !isNaN(Number(value))

const $width = computed(() => {
  if (props.width) {
    return isNumber(props.width) ? `${props.width}px` : props.width
  } else {
    return 'fit-content'
  }
})

const getSelectedLabel = computed(() => {
  const valueKey = props.itemValue ?? 'value'
  const labelKey = props.itemLabel ?? 'label'

  const found = parsedItems.value.find((v) => typeof v === 'object' && v[valueKey] === props.modelValue)
  return found ? found[labelKey] : ''
})

const parsedItems = computed(() => {
  const $items = props.items.map((item) => {
    if (typeof item === 'object' && item !== null) {
      return JSON.parse(JSON.stringify(item))
    } else {
      return {
        [props.itemLabel]: item,
        [props.itemValue]: item,
      }
    }
  })

  console.log($items)
  return $items
})
</script>

<template>
  <p
    v-if="readOnly"
    class="kvc-field-value"
    :class="{ 'kvc-field-value-nonstyled': nonstyled }"
    :style="{ width: $width }"
    v-html="modelValue"
  ></p>

  <div v-else class="kvc-dropdown" ref="dropdownRef">
    <button
      ref="buttonRef"
      type="button"
      class="kvc-dropdown-button"
      :disabled="disabled"
      :style="{ width: $width }"
      @click="isVisible = !isVisible"
    >
      <span class="kvc-dropdown-label">{{ getSelectedLabel }}</span>
      <Icon icon="mdi-light:chevron-down" width="24" style="min-width: 24px;" />
    </button>

    <UtilSelectList
      v-if="!(readOnly || disabled)"
      v-show="isVisible"
      v-model="inputValue"
      ref="selectListRef"
      :items="parsedItems"
      :labelKey="itemLabel"
      :valueKey="itemValue"
      @change="isVisible = false"
    />
  </div>
</template>
