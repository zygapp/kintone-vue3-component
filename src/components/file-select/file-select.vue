<script setup>
import { Icon } from "@iconify/vue";
import { useSortable } from '@vueuse/integrations/useSortable'
import { useDropZone } from '@vueuse/core'
import { KintoneRestAPIClient } from '@kintone/rest-api-client'
import { onMounted, ref, watch } from 'vue'
const emits = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
  modelValue: { type: Array, default: () => ([]) },
  disabled: { type: Boolean, default: false },
  readOnly: { type: Boolean, default: false },
  multiple: { type: Boolean, default: false },
  accept: { type: String, default: undefined },
  autoUpload: { type: Boolean, default: true },
})
const client = new KintoneRestAPIClient()

const fileSelectRef = ref()
const fileSelectValue = ref(null)
const $files = ref(props.modelValue || [])
const sortWrapRef = ref()
const dropZoneRef = ref()
const sorting = ref()

watch(() => props.modelValue, aft => $files.value = aft ? Array.from(aft) : null)

onMounted(async () => {
  if ($files.length) {
    for await (const file of $files.value) {
      if (file.fileKey && !file.data) {
        file.data = await client.file.downloadFile({ fileKey: file.fileKey })
      }
    }
  }


  if (sortWrapRef.value) {
    useSortable(sortWrapRef, $files, {
      onStart: () => sorting.value = true,
      onEnd: () => {
        sorting.value = false
        setTimeout(() => {
          emits('update:modelValue', $files.value)
          emits('change', $files.value)
        },0)
      }
    })
  }
})

const formatBytes = (bytes, decimals = 0) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const formattedNumber = (bytes / Math.pow(k, i)).toFixed(decimals);

  return `${Number(formattedNumber).toLocaleString()} ${sizes[i]}`;
}

const arrayBufferToBase64 = (buffer, mimeType) => {
  if (buffer && mimeType) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    const base64String = btoa(binary);
    return `data:${mimeType};base64,${base64String}`;
  } else {
    return false
  }
}


const onRemoveFile = (i) => {
  $files.value.splice(i, 1)

  emits('update:modelValue', $files.value)
  emits('change', $files.value)
}

const changeFile = async (files) => {
  files = Array.from(files)
  if (files && Array.isArray(files)) {
    const changedFiles = files.filter(v => !v.fileKey)
    const updatedFiles = props.multiple ? [...$files.value, ...files.filter(v => v.fileKey)] : []

    for await (const file of changedFiles) {
      let fileKey = null
      if (props.autoUpload) {
        await client.file.uploadFile({
          file: {
            name: file.name,
            data: file,
          }
        }).then(resp => fileKey = resp.fileKey)
      }

      updatedFiles.push({
        fileKey: fileKey,
        name: file.name,
        size: file.size,
        data: await file.arrayBuffer(),
        contentType: file.type,
      })
    }

    emits('update:modelValue', updatedFiles)
    emits('change', updatedFiles)
    $files.value = updatedFiles
    fileSelectValue.value = null
  }
}


const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop: changeFile,
  dataTypes: props.accept ? props.accept.split(',') : props.accept,
  multiple: props.multiple,
  preventDefaultForUnhandled: false,
})

</script>

<template>
  <div
    v-if="readOnly"
    class="kvc-file-value"
  >
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

  <div
    v-else
    ref="dropZoneRef"
    class="kvc-file-select"
  >
    <ul
      class="kvc-file-select-list"
      ref="sortWrapRef"
    >
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
            <icon icon="mdi:close" width="22" />
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

    <div
      class="kvc-file-select-group"
    >
      <button
        type="button"
        :disabled="disabled"
        class="kvc-file-select-button"
        @click="fileSelectRef.click()"
      >参照</button>
      <p class="kvc-file-select-text">(最大1 GB)</p>
    </div>

    <div
      v-if="!sorting && isOverDropZone"
      class="kvc-file-select-file-dropzone"
      @click="isOverDropZone = false"
    >ここにファイルをドロップします。</div>

    <input
      type="file"
      ref="fileSelectRef"
      :multiple="multiple"
      :accept="accept"
      @change="changeFile($event.target.files)"
    />
  </div>
</template>