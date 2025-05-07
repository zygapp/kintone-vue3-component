<script lang="ts" setup>
import { watch, computed, onMounted } from 'vue'

interface KvcSpinner {
  modelValue: boolean;
  text: string;
}

const emits = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<KvcSpinner>(), {
  modelValue: false,
  text: '読み込み中...',
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
const htmlText = computed(() => (props.text || '').replace('\n', '<br>'))
</script>

<template>
  <div class="kvc-spinner-wrapper">
    <div class="kvc-spinner">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <g>
          <circle cx="12" cy="2.5" r="1.5" fill="#99ccff" opacity="0.14"/>
          <circle cx="16.75" cy="3.77" r="1.5" fill="#99ccff" opacity="0.29"/>
          <circle cx="20.23" cy="7.25" r="1.5" fill="#99ccff" opacity="0.43"/>
          <circle cx="21.5" cy="12" r="1.5" fill="#99ccff" opacity="0.57"/>
          <circle cx="20.23" cy="16.75" r="1.5" fill="#99ccff" opacity="0.71"/>
          <circle cx="16.75" cy="20.23" r="1.5" fill="#99ccff" opacity="0.86"/>
          <circle cx="12" cy="21.5" r="1.5" fill="#99ccff"/>
        </g>
      </svg>

      <span
        class="kvc-spinner-text"
        v-html="htmlText"
      ></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.kvc-spinner-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  display: block;
  width: 100vw;
  height: 100vh;
  background-color: #666666aa;
  z-index: 9999;
  overscroll-behavior: contain;

  .kvc-spinner {
    position: fixed;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    svg {
      display: block;
      margin: 0 auto;
      animation: spin 1s linear infinite;
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    }

    .kvc-spinner-text {
      margin: 10px 0;
      font-size: 14px;
      color: #333;
    }
  }
}
</style>