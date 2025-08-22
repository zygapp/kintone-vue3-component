<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { KvcGroupProps } from '@/types/component-types'

const props = withDefaults(defineProps<KvcGroupProps>(), {
  label: 'グループ',
  open: true,
  collapsible: true,
  width: 400,
})

const isOpen = ref(props.open)

const isNumber = (value: unknown): boolean =>
  typeof value === 'number' || !isNaN(Number(value))

const $width = computed(() => {
  if (props.width) {
    return isNumber(props.width) ? `${props.width}px` : props.width
  } else {
    return '400px'
  }
})

const toggleOpen = () => {
  if (props.collapsible) {
    isOpen.value = !isOpen.value
  }
}

const iconRotation = computed(() => {
  return isOpen.value ? '0deg' : '-90deg'
})
</script>

<template>
  <div class="kvc-group" :class="{ 'kvc-group-closed': !isOpen }" :style="{ width: $width }">
    <div class="kvc-group-header">
      <button
        class="kvc-group-button"
        :class="{ 'kvc-group-button-clickable': collapsible }"
        @click="toggleOpen"
      >
        <Icon
          v-if="collapsible"
          icon="mdi-light:chevron-down"
          width="28"
          class="kvc-group-icon"
          :style="{ transform: `rotate(${iconRotation})` }"
        />
        <span class="kvc-group-label">{{ label }}</span>
      </button>
    </div>

    <div
      v-show="isOpen"
      class="kvc-group-content"
    >
      <slot></slot>
    </div>
  </div>
</template>