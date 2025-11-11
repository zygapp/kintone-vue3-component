<script lang="ts" setup>
import { ref, inject, computed, type Ref } from 'vue'
import { KvcTabPaneProps } from '@/types/component-types'

const props = defineProps<KvcTabPaneProps>()

const activeTab = inject<Ref<string>>('activeTab', ref(''))
const isActive = computed(() => activeTab?.value === props.name)
</script>

<template>
  <div v-if="isActive">
    <slot></slot>
  </div>
</template>