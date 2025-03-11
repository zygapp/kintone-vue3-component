<script setup>
import { onMounted, computed, ref } from 'vue'
import { Icon } from "@iconify/vue";
const emits = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
  items: { type: Array, default: () => ([]) },
  value: { type: [String, Number], default: null },
  modelValue: { type: [String, Number], default: null },
  labelKey: { type: String, default: 'label' },
  valueKey: { type: String, default: 'value' },
  height: { type: [String, Number], default: 'auto'},
  maxHeight: { type: [String, Number], default: 'auto'},
})

const listWrapRef = ref()
const listRefs = new Map()
const $height = computed(() => typeof props.maxHeight === 'string' ? props.maxHeight : props.maxHeight + 'px')
const $maxHeight = computed(() => typeof props.maxHeight === 'string' ? props.maxHeight : props.maxHeight + 'px')
const isHoveredValue = ref()


// 初回マウント時にスクロール
onMounted(() => scrollToValue(props.modelValue));

const scrollToValue = (value) => {
  const targetElement = listRefs.get(value); // 対象の li 要素を取得

  if (listWrapRef.value && targetElement) {
    const containerHeight = listWrapRef.value.offsetHeight;
    const targetOffset = targetElement.offsetTop;
    const targetHeight = targetElement.offsetHeight;

    // スクロール位置を計算 (中央に配置する)
    const scrollPosition = targetOffset - containerHeight / 2 + targetHeight / 2;

    // スクロール
    listWrapRef.value.scrollTo({ top: scrollPosition });

    isHoveredValue.value = value
  }
};

const onSelectItem = (value) => {
  emits('update:modelValue', value)
  emits('change', value)
}
</script>

<template>
  <ul
    ref="listWrapRef"
    class="kvc-select-list"
    :style="{
      height: $height,
      maxHeight: $maxHeight,
    }"
  >
    <li
      v-for="(item, i) of items"
      :key="i"
      :ref="(el) => listRefs.set(item[valueKey] ?? item, el)"
      class="kvc-select-list-item"
      :class="{
        'kvc-select-list-item-selected': (item[valueKey] ?? item) === modelValue,
        // 'bg-primary-light': isHoveredValue == (item[valueKey] ?? item),
      }"
      @click="onSelectItem(item[valueKey] ?? item)"
      @mouseover="isHoveredValue = item[valueKey] ?? item"
    >
      <span class="kvc-select-list-item-icon-space">
        <icon
          v-if="(item[valueKey] ?? item) === modelValue"
          icon="mdi:check-bold"
          width="15"
        />
      </span>

      <span class="kvc-select-list-item-text" >{{ item[labelKey] ?? item }}</span>
    </li>
  </ul>
</template>