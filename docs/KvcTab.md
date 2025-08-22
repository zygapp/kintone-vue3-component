# KvcTab / KvcTabPane

## 概要

`KvcTab` と `KvcTabPane` は、タブ切り替え UI を実現するコンポーネントです。`KvcTab` がタブ全体を制御し、`KvcTabPane` が各タブの内容を表します。

## 使用例

```vue
<template>
  <KvcTab v-model="active">
    <KvcTabPane name="tab1" label="タブ1"> タブ1の内容 </KvcTabPane>
    <KvcTabPane name="tab2" label="タブ2"> タブ2の内容 </KvcTabPane>
  </KvcTab>
</template>

<script setup lang="ts">
import { ref } from "vue";
const active = ref("tab1");
</script>
```

## KvcTab

### Props

| プロパティ       | 型        | デフォルト | 説明                                 |
| ---------------- | --------- | ---------- | ------------------------------------ |
| `modelValue`     | `string`  | -          | アクティブなタブの名前               |
| `small`（任意）  | `boolean` | `false`    | 小さめの UI を適用するか             |
| `width`（任意）  | `string`  | -          | コンテンツ領域の最小幅を指定します   |
| `height`（任意） | `string`  | -          | コンテンツ領域の最小高さを指定します |

### Events

| イベント            | 説明                           |
| ------------------- | ------------------------------ |
| `update:modelValue` | タブを切り替えたときに発火する |

## KvcTabPane

### Props

| プロパティ | 型       | デフォルト | 説明                       |
| ---------- | -------- | ---------- | -------------------------- |
| `name`     | `string` | -          | 識別子として使われるタブ名 |
| `label`    | `string` | -          | タブに表示されるラベル     |

### Slots

| スロット名 | 説明                     |
| ---------- | ------------------------ |
| `default`  | タブの内容を表示する領域 |

---

[◀ 戻る](<REPO_BASE>/README.md)
