<script setup lang="ts">
import { computed, onMounted, useSlots } from 'vue'
import { Icon } from '@iconify/vue'
import { KvcTableProps, KvcTableColumn } from '@/types/component-types'
import { VueDraggableNext } from 'vue-draggable-next'

const slots = useSlots()
const props = withDefaults(defineProps<KvcTableProps>(), {
  minRows: 1,
  draggable: false,
  animation: 150
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: any[]): void
  (e: 'add', value: any[], index: number): void
  (e: 'delete', value: any[]): void
}>()

const isHideOperations = computed(() => props.readOnly || props.hideOperations)

// カラムに基づく空行オブジェクトを生成
const createEmptyRow = () => {
  const emptyRow: Record<string, any> = {}

  for (const key in slots) {
    if (typeof slots[key] === 'function') {
      if (typeof key === 'string' && !key.startsWith('column-')) {
        emptyRow[key] = ''
      }
    }
  }

  return emptyRow
}

// 最小行数確保とデフォルト行表示
onMounted(() => {
  if (props.modelValue.length === 0 && props.minRows > 0) {
    const defaultRows = Array(props.minRows).fill(null).map(() => createEmptyRow())
    emits('update:modelValue', defaultRows)
  }
})

const convertToDataAttributes = (item: Record<string, any>) => {
  return (props.rowData || []).reduce((obj: Record<string, any>, data) => {
    obj[`data-${data.key}`] = item[data.code]?.value || null
    return obj
  }, {})
}

const onClickAddRow = (index: number) => {
  const $rows = [...props.modelValue]

  if (index >= 0) {
    // 最大行数チェック
    if (props.maxRows && $rows.length >= props.maxRows) {
      return
    }

    $rows.splice(index + 1, 0, createEmptyRow())
    emits('update:modelValue', $rows)
    emits('add', $rows, index)
  }
}

const onClickRemoveRow = (index: number) => {
  const $rows = [...props.modelValue]

  if (index >= 0) {
    // 最小行数チェック
    if ($rows.length <= props.minRows) {
      return
    }

    $rows.splice(index, 1)
    emits('update:modelValue', $rows)
    emits('delete', $rows)
  }
}

// 行追加ボタンの表示状態
const canAddRow = computed(() => {
  return !props.maxRows || props.modelValue.length < props.maxRows
})

// 行削除ボタンの表示状態
const canRemoveRow = computed(() => {
  return props.modelValue.length > props.minRows
})

const draggableRows = computed({
  get: () => props.modelValue,
  set: (value) => {
    emits('update:modelValue', value)
  }
})
</script>

<template>
  <table
    class="kvc-table"
    :class="{ 'kvc-table-readonly': readOnly }"
  >
    <thead>
      <tr>
        <th v-if="draggable && !isHideOperations" class="kvc-table-operation"></th>
        <th v-if="recordUrl"></th>
        <th
          v-for="(col, c) in columns as KvcTableColumn"
          :key="c"
          :style="col?.width ? { width: col?.width } : undefined"
        >
          <slot :name="`column-${col?.code || col}`">
            <span class="kvc-table-header-label">
              {{ col?.label ?? col }}
            </span>
          </slot>
        </th>
        <th v-if="!isHideOperations" class="kvc-table-operation"></th>
      </tr>
    </thead>

    <VueDraggableNext
      v-if="draggable"
      v-model="draggableRows"
      tag="tbody"
      handle=".kvc-table-drag-handle"
      :disabled="readOnly"
      :animation="animation"
    >
      <tr
        v-for="(row, r) in draggableRows"
        :key="'row-' + r"
        v-bind="convertToDataAttributes(row)"
      >
        <td v-if="draggable && !isHideOperations" class="kvc-table-operation">
          <div class="kvc-table-drag-handle" style="cursor: move;">
            <Icon icon="mdi:drag" width="14" />
          </div>
        </td>
        <td v-if="recordUrl">
          <a
            v-if="row.$id"
            :href="recordUrl + row.$id.value"
            class="kvc-link"
            target="_blank"
            rel="noopener noreferrer"
            :style="readOnly ? null : { display: 'inline-block', margin: '10px 0' }"
          >
            <Icon icon="tdesign:file-filled" width="16" />
          </a>
        </td>

        <td
          v-for="(col, c) in columns as KvcTableColumn"
          :key="'col-' + c"
          :data-code="col?.code || col"
          :style="col?.width ? { width: col?.width } : undefined"
        >
          <slot
            :name="col?.code || col"
            :index="r"
            :row="row"
            :width="col?.width"
            :column="col?.code || col"
            :value="row[col?.code || col]"
          ></slot>
        </td>

        <td v-if="!isHideOperations" class="kvc-table-operation">
          <div class="kvc-table-operation-buttons">
            <button
              type="button"
              class="kvc-table-btn-plus"
              :disabled="!canAddRow"
              @click="onClickAddRow(r)"
            >
              <Icon icon="mdi:plus" width="14" />
            </button>
            <button
              v-if="canRemoveRow"
              type="button"
              class="kvc-table-btn-minus"
              @click="onClickRemoveRow(r)"
            >
              <Icon icon="mdi:minus" width="14" />
            </button>
          </div>
        </td>
      </tr>
    </VueDraggableNext>
    <tbody v-else>
      <tr
        v-for="(row, r) in modelValue"
        :key="'row-' + r"
        v-bind="convertToDataAttributes(row)"
      >
        <td v-if="recordUrl">
          <a
            v-if="row.$id"
            :href="recordUrl + row.$id.value"
            class="kvc-link"
            target="_blank"
            rel="noopener noreferrer"
            :style="readOnly ? null : { display: 'inline-block', margin: '10px 0' }"
          >
            <Icon icon="tdesign:file-filled" width="16" />
          </a>
        </td>

        <td
          v-for="(col, c) in columns as KvcTableColumn"
          :key="'col-' + c"
          :data-code="col?.code || col"
          :style="col?.width ? { width: col?.width } : undefined"
        >
          <slot
            :name="col?.code || col"
            :index="r"
            :row="row"
            :width="col?.width"
            :column="col?.code || col"
            :value="row[col?.code || col]"
          ></slot>
        </td>

        <td v-if="!isHideOperations" class="kvc-table-operation">
          <div class="kvc-table-operation-buttons">
            <button
              type="button"
              class="kvc-table-btn-plus"
              :disabled="!canAddRow"
              @click="onClickAddRow(r)"
            >
              <Icon icon="mdi:plus" width="14" />
            </button>
            <button
              v-if="canRemoveRow"
              type="button"
              class="kvc-table-btn-minus"
              @click="onClickRemoveRow(r)"
            >
              <Icon icon="mdi:minus" width="14" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>