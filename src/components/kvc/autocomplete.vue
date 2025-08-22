<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { onClickOutside } from '@vueuse/core'
import { KvcAutocompleteProps } from '@/types/component-types'
import UtilSelectList from './utility/SelectList.vue'

const props = withDefaults(defineProps<KvcAutocompleteProps>(), {
  items: () => ([]),
  width: 150,
  disabled: false,
  readOnly: false,
  nonstyled: false,
  itemLabel: 'label',
  itemValue: 'value',
  itemDisabled: 'disabled',
  clearable: true,
  placeholder: '',
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void
  (e: 'change', value: string | number | null): void
  (e: 'input', value: string): void
}>()

const inputValue = computed({
  get: () => props.modelValue ?? '',
  set: (value: string | number | null) => {
    emits('update:modelValue', value)
    emits('change', value)
  }
})

const searchText = ref('')
const isVisible = ref(false)
const inputRef = ref<HTMLElement | null>(null)
const selectListRef = ref<HTMLElement | null>(null)
const autocompleteRef = ref<HTMLElement | null>(null)

// オートコンプリート全体の外側をクリックした時に閉じる
onClickOutside(autocompleteRef, () => {
  isVisible.value = false
})

const isNumber = (value: unknown): boolean =>
  typeof value === 'number' || !isNaN(Number(value))

const $width = computed(() => {
  if (props.width) {
    return isNumber(props.width) ? `${props.width}px` : props.width
  } else {
    return 'fit-content'
  }
})

// アイテムを統一形式に変換
const parsedItems = computed(() => {
  const $items = props.items.map((item) => {
    if (typeof item === 'object' && item !== null) {
      return JSON.parse(JSON.stringify(item))
    } else {
      return {
        [props.itemLabel]: item,
        [props.itemValue]: item,
      }
    }
  })
  return $items
})

// 選択されたアイテムのラベルを取得
const getSelectedLabel = computed(() => {
  const valueKey = props.itemValue ?? 'value'
  const labelKey = props.itemLabel ?? 'label'

  const found = parsedItems.value.find((v) => typeof v === 'object' && v[valueKey] === props.modelValue)
  return found ? found[labelKey] : props.modelValue || ''
})

// フィルタリングされたアイテム
const filteredItems = computed(() => {
  if (!searchText.value) {
    return parsedItems.value
  }

  const labelKey = props.itemLabel ?? 'label'
  const searchLower = searchText.value.toString().toLowerCase()

  return parsedItems.value.filter(item => {
    const label = item[labelKey]?.toString().toLowerCase() || ''
    return label.includes(searchLower)
  })
})

// 入力フィールドにフォーカスした時
const handleFocus = () => {
  isVisible.value = true
  searchText.value = ''
}

// 入力時の処理
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  searchText.value = target.value
  isVisible.value = true
  emits('input', target.value)
}

// アイテム選択時の処理
const handleSelect = (value: string | number) => {
  inputValue.value = value
  searchText.value = ''
  isVisible.value = false
}

// クリアボタンの処理
const handleClear = () => {
  inputValue.value = ''
  searchText.value = ''
  isVisible.value = false
}

// modelValueが変更された時、検索テキストをリセット
watch(() => props.modelValue, () => {
  searchText.value = ''
})
</script>

<template>
  <p
    v-if="readOnly"
    class="kvc-field-value"
    :class="{ 'kvc-field-value-nonstyled': nonstyled }"
    :style="{ width: $width }"
    v-html="modelValue"
  ></p>

  <div v-else-if="disabled" class="kvc-dropdown">
    <button
      ref="buttonRef"
      type="button"
      class="kvc-dropdown-button"
      :disabled="disabled"
      :style="{ width: $width }"
    >
      <span class="kvc-dropdown-label">{{ getSelectedLabel }}</span>
      <Icon icon="mdi-light:chevron-down" width="24" style="min-width: 24px;" />
    </button>
  </div>

  <div v-else class="kvc-autocomplete" ref="autocompleteRef">
    <div class="kvc-autocomplete-input-wrapper">
      <input
        ref="inputRef"
        type="text"
        class="kvc-autocomplete-input"
        :value="searchText || getSelectedLabel"
        :disabled="disabled"
        :placeholder="placeholder"
        :style="{ width: $width }"
        @focus="handleFocus"
        @input="handleInput"
      />

      <div class="kvc-autocomplete-icons">
        <button
          v-if="clearable && inputValue && !disabled"
          type="button"
          class="kvc-autocomplete-clear"
          @click="handleClear"
        >
          <Icon icon="mdi:close" width="18" />
        </button>

        <Icon
          icon="mdi-light:chevron-down"
          width="24"
          class="kvc-autocomplete-arrow"
          :class="{ 'is-active': isVisible }"
        />
      </div>
    </div>

    <UtilSelectList
      v-if="!(readOnly || disabled)"
      v-show="isVisible && filteredItems.length > 0"
      v-model="inputValue"
      ref="selectListRef"
      :items="filteredItems"
      :labelKey="itemLabel"
      :valueKey="itemValue"
      @change="handleSelect"
    />

    <div
      v-if="isVisible && filteredItems.length === 0 && searchText"
      class="kvc-autocomplete-no-results"
    >
      該当する項目がありません
    </div>
  </div>
</template>