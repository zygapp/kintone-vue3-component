<script setup>
const emits = defineEmits(['submit'])
const props = defineProps({
  isForm: { type: Boolean, default: false }
})
</script>

<template>
  <component
    :is="isForm ? 'form' : 'div'"
    id="kvc-wrap"
    class="kvc-wrap"
    @submit.prevent="emits('submit', $event)"
  >
    <slot></slot>
  </component>
</template>