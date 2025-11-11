<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useSortable } from '@vueuse/integrations/useSortable'
import { useDropZone } from '@vueuse/core'
import { KintoneRestAPIClient } from '@kintone/rest-api-client'
import { ref, onMounted, watch, computed } from 'vue'
import { KvcFileSelectProps, KvcFileData } from '@/types/component-types'

const props = defineProps<KvcFileSelectProps>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: KvcFileData[]): void
  (e: 'change', value: KvcFileData[]): void
}>()

const client = new KintoneRestAPIClient()

const fileSelectRef = ref<HTMLInputElement | null>(null)
const fileSelectValue = ref<FileList | null>(null)
const $files = ref<KvcFileData[]>(props.modelValue || [])
const sortWrapRef = ref<HTMLElement | null>(null)
const dropZoneRef = ref<HTMLElement | null>(null)
const sorting = ref(false)

watch(() => props.modelValue, (aft) => {
  $files.value = aft ? Array.from(aft) : []
})

onMounted(async () => {
  if ($files.value.length) {
    for await (const file of $files.value) {
      if (file.fileKey && !file.data) {
        file.data = await client.file.downloadFile({ fileKey: file.fileKey })
      }
    }
  }

  if (sortWrapRef.value) {
    useSortable(sortWrapRef, $files, {
      onStart: () => (sorting.value = true),
      onEnd: () => {
        sorting.value = false
        setTimeout(() => {
          emits('update:modelValue', $files.value)
          emits('change', $files.value)
        }, 0)
      }
    })
  }
})

const formatBytes = (bytes: number, decimals = 0): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const formattedNumber = (bytes / Math.pow(k, i)).toFixed(decimals)
  return `${Number(formattedNumber).toLocaleString()} ${sizes[i]}`
}

const arrayBufferToBase64 = (buffer: ArrayBuffer, mimeType?: string): string | undefined => {
  if (!buffer || !mimeType) return undefined
  const bytes = new Uint8Array(buffer)
  const binary = Array.from(bytes).map(b => String.fromCharCode(b)).join('')
  return `data:${mimeType};base64,${btoa(binary)}`
}

const onRemoveFile = (i: number) => {
  $files.value.splice(i, 1)
  emits('update:modelValue', $files.value)
  emits('change', $files.value)
}

const changeFile = async (files: FileList | null) => {
  if (!files) return
  const fileArray = Array.from(files)
  const changedFiles = fileArray.filter((f) => !(f as any).fileKey)
  const existingFiles = props.multiple
    ? [...$files.value, ...fileArray.filter((f) => (f as any).fileKey)]
    : []

  for await (const file of changedFiles) {
    let fileKey: string | null = null
    if (props.autoUpload) {
      const resp = await client.file.uploadFile({ file: { name: file.name, data: file } })
      fileKey = resp.fileKey
    }

    const data = await file.arrayBuffer()

    existingFiles.push({
      fileKey: fileKey ?? undefined,
      name: file.name,
      size: file.size,
      contentType: file.type,
      data
    })
  }

  emits('update:modelValue', existingFiles)
  emits('change', existingFiles)
  $files.value = existingFiles
  fileSelectValue.value = null
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop: (files: File[] | null) => {
    changeFile(files as unknown as FileList) // 明示キャスト（やや力技）
  },
  dataTypes: computed(() => props.accept?.split(',') ?? []), // ← 明示的にstring[] or []
  multiple: props.multiple,
  preventDefaultForUnhandled: false
})
</script>

<template>
  <div v-if="readOnly" class="kvc-file-value">
    <ul class="kvc-file-select-list">
      <li
        v-for="(file, f) of $files"
        :key="f"
        class="kvc-file-select-list-item-wrap"
      >
        <img
          v-if="file.data && (file.contentType || '').startsWith('image/')"
          class="kvc-file-select-file-image"
          :src="arrayBufferToBase64(file.data, file.contentType)"
        />
        <span v-else>
          <span class="kvc-file-select-file-name">{{ file.name }}</span>
          <span class="kvc-file-select-file-size">({{ formatBytes(file.size) }})</span>
        </span>
      </li>
    </ul>
  </div>

  <div v-else ref="dropZoneRef" class="kvc-file-select">
    <ul class="kvc-file-select-list" ref="sortWrapRef">
      <li
        v-for="(file, f) of $files"
        :key="f"
        class="kvc-file-select-list-item-wrap"
      >
        <div class="kvc-file-select-list-item">
          <button
            v-if="!disabled"
            type="button"
            class="kvc-file-select-delete-button"
            @click="onRemoveFile(f)"
          >
            <Icon icon="mdi:close" width="22" />
          </button>
          <span class="kvc-file-select-file-name">{{ file.name }}</span>
          <span class="kvc-file-select-file-size">{{ formatBytes(file.size) }}</span>
        </div>

        <img
          v-if="file.data && (file.contentType || '').startsWith('image/')"
          class="kvc-file-select-file-image"
          :src="arrayBufferToBase64(file.data, file.contentType)"
        />
      </li>
    </ul>

    <div class="kvc-file-select-group">
      <button
        type="button"
        :disabled="disabled"
        class="kvc-file-select-button"
        @click="fileSelectRef?.click()"
      >
        参照
      </button>
      <p class="kvc-file-select-text">(最大1 GB)</p>
    </div>

    <div
      v-if="!sorting && isOverDropZone"
      class="kvc-file-select-file-dropzone"
      @click="isOverDropZone = false"
    >
      ここにファイルをドロップします。
    </div>

    <input
      type="file"
      ref="fileSelectRef"
      :multiple="multiple"
      :accept="accept"
      @change="e => changeFile((e.target as HTMLInputElement)?.files ?? null)"
    />
  </div>
</template>
