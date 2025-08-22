<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { KvcSelectListProps, SelectListItem } from '@/types/component-types'

const props = withDefaults(defineProps<KvcSelectListProps>(), {
  items: () => ([]),
  labelKey: 'label',
  valueKey: 'value',
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number): void
}>()

const listWrapRef = ref<HTMLElement | null>(null)
const listRefs = new Map<string | number, HTMLElement>()
const isHoveredValue = ref<string | number | null>(null)

const $height = computed(() =>
  typeof props.height === 'string' ? props.height : `${props.height}px`
)
const $maxHeight = computed(() =>
  typeof props.maxHeight === 'string' ? props.maxHeight : `${props.maxHeight}px`
)

const scrollToValue = (value: string | number | null) => {
  const targetElement = listRefs.get(value as string | number)
  if (listWrapRef.value && targetElement) {
    const containerHeight = listWrapRef.value.offsetHeight
    const targetOffset = targetElement.offsetTop
    const targetHeight = targetElement.offsetHeight
    const scrollPosition = targetOffset - containerHeight / 2 + targetHeight / 2
    listWrapRef.value.scrollTo({ top: scrollPosition })
    isHoveredValue.value = value
  }
}

onMounted(() => scrollToValue(props.modelValue))

const onSelectItem = (value: string | number) => {
  console.log('onSelectItem', value)
  emits('update:modelValue', value)
  emits('change', value)
}

const getItemValue = (item: SelectListItem | string | number): string | number => {
  if (typeof item === 'object' && item !== null) {
    return item[props.valueKey ?? 'value'] ?? item
  }
  return item
}

const getItemLabel = (item: SelectListItem | string | number): string | number => {
  if (typeof item === 'object' && item !== null) {
    return item[props.labelKey ?? 'label'] ?? item
  }
  return item
}
</script>

<template>
  <ul
    ref="listWrapRef"
    class="kvc-select-list"
    :style="{ height: $height, maxHeight: $maxHeight }"
  >
    <li
      v-for="(item, i) in items"
      :key="i"
      :ref="el => listRefs.set(getItemValue(item), el as HTMLElement)"
      class="kvc-select-list-item"
      :class="{
        'kvc-select-list-item-selected': getItemValue(item) === modelValue
      }"
      @click="onSelectItem(getItemValue(item))"
      @mouseover="isHoveredValue = getItemValue(item)"
      >
      <span class="kvc-select-list-item-icon-space">
        <Icon
          v-if="getItemValue(item) === modelValue"
          icon="mdi:check-bold"
          width="15"
        />
      </span>
      <span class="kvc-select-list-item-text">{{ getItemLabel(item) }}</span>
    </li>
  </ul>
</template>
