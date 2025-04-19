<script lang="ts" setup>
import { ref, provide, useSlots, computed, type VNode } from 'vue'
import { KvcTabProps, KvcTabPaneProps } from '@/types/component-types'

const emits = defineEmits<{(e: 'update:modelValue', value: string): void}>()

const props = defineProps<KvcTabProps>()

const activeTab = ref<string>(props.modelValue)

const setActiveTab = (name: string) => {
  activeTab.value = name
  emits('update:modelValue', name)
}

provide('activeTab', activeTab)
provide('setActiveTab', setActiveTab)

const slots = useSlots()

const tabPanes = computed<KvcTabPaneProps[]>(() => {
  const panes: KvcTabPaneProps[] = []
  const children = slots.default?.() || []

  children.forEach((vnode: VNode) => {
    const props = vnode.props as { label?: string; name?: string } | undefined
    if (props?.label && props?.name) {
      panes.push({
        label: props.label,
        name: props.name,
      })
    }
  })

  if (!activeTab.value && panes.length > 0) {
    activeTab.value = panes[0].name
  }

  return panes
})
</script>


<template>
  <div class="kvc-tab">
    <div class="kvc-tab-header">
      <button
        v-for="pane in tabPanes"
        :key="pane.name"
        type="button"
        class="kvc-tab-item"
        :class="{
          'is-active': activeTab === pane.name,
          'kvc-tab-item-small': small,
        }"
        @click="setActiveTab(pane.name)"
      >
        <span>{{ pane.label }}</span>
      </button>
    </div>

    <div
      class="kvc-tab-content"
      :class="{
        'kvc-tab-content-small': small,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>