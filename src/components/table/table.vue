<script setup>
import { Icon } from '@iconify/vue';
import { computed } from 'vue';

const emits = defineEmits(['update:modelValue', 'add', 'delete']);

const props = defineProps({
  readOnly: { type: Boolean, default: false },
  rowData: { type: Array, default: () => ([]) },
  columns: { type: Array, default: () => ([])},
  modelValue: { type: Array, default: () => ([])},
  hideOperations: { type: Boolean, default: false },
  recordUrl: { type: String, default: null },
});

const isHideOperations = computed(() => props.readOnly || props.hideOperations)

const convertToDataAttributes = (item) => {
  return props.rowData.reduce((obj, data) => {
    obj[`data-${data.key}`] = item[data.code]?.value || null
    return obj
  }, {})
}

const onClickAddRow = (index) => {
  const $rows = [...props.modelValue]

  if (index >= 0) {
    $rows.splice(index + 1, 0, {});
    emits('update:modelValue', $rows)
    emits('add', $rows, index)
  }
}

const onClickRemoveRow = (index) => {
  const $rows = [...props.modelValue]

  if (index >= 0) {
    // 指定インデックスの要素を削除
    $rows.splice(index, 1);
    emits('update:modelValue', $rows)
    emits('delete', $rows)
  }
}

</script>

<template>
  <table
    class="kvc-table"
    :class="{'kvc-table-readonly': readOnly}"
  >
    <thead>
      <tr>
        <th v-if="recordUrl"></th>
        <th
          v-for="(col, c) of columns"
          :key="c"
          :style="typeof col?.width === 'string' ? col.width : col.width+'px'"
        >
          <span class="kvc-table-header-label">{{ col?.label ?? col }}</span></th>
        <th
          v-if="!isHideOperations"
          class="kvc-table-operation"
        ></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, r) of modelValue"
        :key="'row-'+r"
        v-bind="convertToDataAttributes(row)"
      >
        <td v-if="recordUrl">
          <a
            v-if="row.$id"
            :href="recordUrl+row.$id.value"
            class="kvc-link"
            target="_blank"
            rel="noopener noreferrer"
            :style="readOnly ? null : {
              display: 'inline-block',
              margin: '10px 0',
            }"
          ><icon icon="tdesign:file-filled" width="16" /></a>
        </td>
        <td
          v-for="(col, c) of columns"
          :key="'col-'+c"
          :data-field="col?.field || col"
        >
          <slot
            :name="col?.field || col"
            :index="r"
            :row="row"
            :width="col?.width"
            :column="col?.field || col"
            :value="row[col?.field || col]"
          ></slot>
        </td>

        <td
          v-if="!isHideOperations"
          class="kvc-table-operation"
        >
          <div class="kvc-table-operation-buttons">
            <button
              type="button"
              class="kvc-table-btn-plus"
              @click="onClickAddRow(r)"
            >
              <icon icon="mdi:plus" width="14" />
            </button>
            <button
              type="button"
              class="kvc-table-btn-minus"
              @click="onClickRemoveRow(r)"
            >
              <icon icon="mdi:minus" width="14" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>