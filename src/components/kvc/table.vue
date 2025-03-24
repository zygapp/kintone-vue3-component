<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { KvcTableProps, KvcTableColumn } from '@/types/component-types'

const props = defineProps<KvcTableProps>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: any[]): void
  (e: 'add', value: any[], index: number): void
  (e: 'delete', value: any[]): void
}>()

const isHideOperations = computed(() => props.readOnly || props.hideOperations)

const convertToDataAttributes = (item: Record<string, any>) => {
  return (props.rowData || []).reduce((obj: Record<string, any>, data) => {
    obj[`data-${data.key}`] = item[data.code]?.value || null
    return obj
  }, {})
}

const onClickAddRow = (index: number) => {
  const $rows = [...props.modelValue]

  if (index >= 0) {
    $rows.splice(index + 1, 0, {})
    emits('update:modelValue', $rows)
    emits('add', $rows, index)
  }
}

const onClickRemoveRow = (index: number) => {
  const $rows = [...props.modelValue]

  if (index >= 0) {
    $rows.splice(index, 1)
    emits('update:modelValue', $rows)
    emits('delete', $rows)
  }
}
</script>

<template>
  <table
    class="kvc-table"
    :class="{ 'kvc-table-readonly': readOnly }"
  >
    <thead>
      <tr>
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

    <tbody>
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
              @click="onClickAddRow(r)"
            >
              <Icon icon="mdi:plus" width="14" />
            </button>
            <button
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
