<script lang="ts" setup>
import { onMounted, watch } from 'vue'
interface KvcDialog {
  modelValue: boolean;
  width?: string | number;
}

const emits = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<KvcDialog>(), {
  modelValue: false
})

const toggleBodyOverflow = (visible: boolean) => {
  const body = document.querySelector('body')
  if (visible) {
    if (body) body.style.overflow = 'hidden'
  } else {
    if (body) body.style.overflow = 'auto'
  }
}

onMounted(() => toggleBodyOverflow(props.modelValue))
watch(() => props.modelValue, toggleBodyOverflow)
</script>

<template>
  <div v-if="modelValue" class="kvc-dialog-wrapper">
    <div
      class="kvc-dialog"
      :style="width ? { width } : null"
    >
      <div class="kvc-dialog-header">
        <slot name="header"></slot>

        <button
          type="button"
          class="kvc-dialog-close"
          @click="emits('update:modelValue', false)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            />
          </svg>
        </button>
      </div>
      <div class="kvc-dialog-content-wrapper">
        <slot name="body-header"></slot>
        <div class="kvc-dialog-content">
          <slot></slot>
        </div>
        <slot name="body-footer"></slot>
      </div>
      <div class="kvc-dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kvc-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  display: block;
  width: 100vw;
  height: 100vh;
  background-color: #00000099;
  z-index: 1000;
  overscroll-behavior: contain;

  .kvc-dialog {
    position: fixed;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    width: 500px;
    max-width: 100%;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > :not(:last-child) {
      border-top-width: 0px;
      border-bottom-width: 1px;
      border-right: 0;
      border-left: 0;
      border-color: #e3e7e8;
      border-style: solid;
    }

    .kvc-dialog-header {
      position: relative;
      padding: 0 72px 0 24px;
      height: 64px;
      background-color: #fff;
      font-size: 24px;
      line-height: 64px;

      button.kvc-dialog-close {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        padding: 0;
        border: 0;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        width: 36px;
        height: 36px;
        border-radius: 9999px;
        background-color: #f8f9fa;
        color: #8e8e8e;

        svg {
          display: block;
        }
      }
    }

    .kvc-dialog-footer {
      display: flex;
      width: 100%;
      padding: 24px;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
    }

    .kvc-dialog-content-wrapper {
      position: relative;
      max-height: calc(100vh - 64px - 97px);
      overflow-y: auto;
      background-color: #f7f9fa;

      .kvc-dialog-content {
        padding: 24px;
        display: block;
      }
    }
  }
}
</style>