<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { KvcItemBase, KvcMultiSelectProps } from '@/types/component-types'


const emits = defineEmits<{
  (e: 'update:modelValue', value: (string | number)[]): void
  (e: 'change', value: (string | number)[]): void
}>()

const props = withDefaults(defineProps<KvcMultiSelectProps>(), {
  modelValue: () => [],
  items: () => ([]),
  itemLabel: 'label',
  itemValue: 'value',
  nonstyled: false,
  disabled: false,
  readOnly: false,
  rows: 5,
})

const listWrapRef = ref<HTMLElement | null>(null)
const listRefs = new Map<string | number, HTMLElement>()

const $height = computed(() => `calc(12px + ${props.rows * 22}px + ${props.rows * 2}px)`)

const onSelectItem = (value: string | number) => {
  if (props.readOnly || props.disabled) return

  const currentValues = [...props.modelValue]
  const index = currentValues.indexOf(value)

  if (index > -1) {
    // 既に選択されている場合は削除
    currentValues.splice(index, 1)
  } else {
    // 選択されていない場合は追加
    currentValues.push(value)
  }

  emits('update:modelValue', currentValues)
  emits('change', currentValues)
}

const getItemValue = (item: KvcItemBase | string | number): string | number => {
  if (typeof item === 'object' && item !== null) {
    return item[props.itemValue] ?? item.value ?? item
  }
  return item
}

const getItemLabel = (item: KvcItemBase | string | number): string | number => {
  if (typeof item === 'object' && item !== null) {
    return item[props.itemLabel] ?? item.label ?? item
  }
  return item
}

const isItemSelected = (item: KvcItemBase | string | number): boolean => {
  const itemValue = getItemValue(item)
  return props.modelValue.includes(itemValue)
}

const parsedItems = computed(() => {
  const $items = props.items.map((item) => {
    let $item = item
    if (typeof item === 'object' && item !== null) {
      $item = JSON.parse(JSON.stringify(item))
    } else {
      $item = {
        [props.itemLabel]: item,
        [props.itemValue]: item,
      }
    }

    if (props.disabled) {
      $item.disabled = true
    }

    return $item
  })

  return $items
})
</script>

<template>
  <p
    v-if="readOnly"
    class="kvc-field-value"
    :class="{'kvc-field-value-nonstyled': nonstyled}"
    v-html="modelValue.join(', ')"
  ></p>

  <ul
    v-else
    ref="listWrapRef"
    class="kvc-multi-select-list"
    :style="{ maxHeight: $height }"
  >
    <li
      v-for="(item, i) in parsedItems"
      :key="i"
      :ref="el => listRefs.set(getItemValue(item), el as HTMLElement)"
      class="kvc-multi-select-item"
      :class="{
        'kvc-multi-select-item-selected': isItemSelected(item),
        'kvc-multi-select-item-disabled': item?.disabled === true,
      }"
      @click="item?.disabled === true ? null : onSelectItem(getItemValue(item))"
    >
      <Icon
        v-if="isItemSelected(item)"
        icon="mdi:check-bold"
        width="14"
        class="kvc-multi-select-item-icon"
      />
      <span class="kvc-multi-select-item-text">{{ getItemLabel(item) }}</span>
    </li>
  </ul>
</template>