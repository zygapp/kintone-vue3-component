<script lang="ts" setup>
import { onMounted, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { KvcDialogProps } from '@/types/component-types'

const emits = defineEmits(['update:modelValue', 'cancel', 'confirm', 'close'])
const props = withDefaults(defineProps<KvcDialogProps>(), {
  modelValue: false,
  title: 'Title',
  showIcon: false,
  iconType: 'info',
  cancelText: 'Cancel',
  confirmText: 'OK',
  showCancel: true,
  showConfirm: true,
})

const toggleBodyOverflow = (visible: boolean) => {
  const body = document.querySelector('body')
  if (visible) {
    if (body) body.style.overflow = 'hidden'
  } else {
    if (body) body.style.overflow = 'auto'
  }
}

const getIconName = () => {
  switch (props.iconType) {
    case 'info': return 'ep:info-filled'
    case 'warning': return 'ep:warning-filled'
    case 'error': return 'ep:circle-close-filled'
    case 'success': return 'ep:circle-check-filled'
    case 'question': return 'ep:question-filled'
    default: return 'ep:info-filled'
  }
}

const getIconColor = () => {
  switch (props.iconType) {
    case 'info': return '#3498db'
    case 'warning': return '#f39c12'
    case 'error': return '#e74c3c'
    case 'success': return '#27ae60'
    default: return '#3498db'
  }
}

const handleCancel = () => {
  emits('cancel')
  emits('update:modelValue', false)
}

const handleConfirm = () => {
  emits('confirm')
  emits('update:modelValue', false)
}

const handleClose = () => {
  emits('update:modelValue', false)
}

onMounted(() => toggleBodyOverflow(props.modelValue))
watch(() => props.modelValue, (aft) => {
  toggleBodyOverflow(aft)
  if (!aft) emits('close')
})
</script>

<template>
  <div v-if="modelValue" class="kvc-dialog-wrapper">
    <div
      class="kvc-dialog"
      :style="width ? { width } : null"
    >
      <!-- ヘッダー -->
      <div class="kvc-dialog-header">
        <h2 class="kvc-dialog-title">{{ title }}</h2>
        <button
          type="button"
          class="kvc-dialog-close"
          @click="handleClose"
        >
          <Icon icon="mdi-light:plus" width="24" />
        </button>
      </div>

      <!-- コンテンツ -->
      <div class="kvc-dialog-content">
        <div v-if="showIcon" class="kvc-dialog-icon">
          <Icon
            :icon="getIconName()"
            width="24"
            :style="{ color: getIconColor() }"
          />
        </div>
        <div class="kvc-dialog-message">
          <slot>This is Content</slot>
        </div>
      </div>

      <!-- フッター（ボタン） -->
      <div class="kvc-dialog-footer">
        <KvcButton
          v-if="showCancel"
          color="normal"
          @click="handleCancel"
        >
          {{ cancelText }}
        </KvcButton>
        <KvcButton
          v-if="showConfirm"
          color="save"
          @click="handleConfirm"
        >{{ confirmText }}</KvcButton>
      </div>
    </div>
  </div>
</template>