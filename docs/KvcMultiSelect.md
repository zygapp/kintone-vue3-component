# KvcMultiSelect

複数選択可能なリストコンポーネントです。チェックマーク付きのリスト形式で複数の項目を選択できます。

## 基本的な使い方

```vue
<template>
  <div>
    <KvcMultiSelect
      v-model="selectedValues"
      :items="items"
      placeholder="選択してください"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedValues = ref([]);
const items = ref([
  { label: "オプション1", value: "option1" },
  { label: "オプション2", value: "option2" },
  { label: "オプション3", value: "option3" },
]);
</script>
```

## Props

| プロパティ   | 型                     | デフォルト | 説明                 |
| ------------ | ---------------------- | ---------- | -------------------- |
| `modelValue` | `(string \| number)[]` | `[]`       | 選択された値の配列   |
| `items`      | `KvcItemBase[]`        | `[]`       | 選択肢のアイテム配列 |
| `itemLabel`  | `string`               | `'label'`  | アイテムのラベルキー |
| `itemValue`  | `string`               | `'value'`  | アイテムの値キー     |
| `nonstyled`  | `boolean`              | `false`    | スタイルなし         |
| `disabled`   | `boolean`              | `false`    | 無効化               |
| `readOnly`   | `boolean`              | `false`    | 読み取り専用         |
| `rows`       | `number`               | `5`        | 表示行数             |

## Events

| イベント            | ペイロード             | 説明                 |
| ------------------- | ---------------------- | -------------------- |
| `update:modelValue` | `(string \| number)[]` | 選択値が変更された時 |
| `change`            | `(string \| number)[]` | 選択値が変更された時 |

## 使用例

### 基本的な複数選択

```vue
<template>
  <KvcMultiSelect v-model="selectedTags" :items="tagOptions" />
</template>

<script setup>
const selectedTags = ref(["tag1", "tag3"]);
const tagOptions = [
  { label: "JavaScript", value: "tag1" },
  { label: "TypeScript", value: "tag2" },
  { label: "Vue.js", value: "tag3" },
  { label: "React", value: "tag4" },
];
</script>
```

### 表示行数の指定

```vue
<template>
  <KvcMultiSelect
    v-model="selection"
    :items="items"
    :rows="8"
  />
</template>
```

### 無効化・読み取り専用

```vue
<template>
  <div>
    <!-- 無効化 -->
    <KvcMultiSelect
      v-model="disabledSelection"
      :items="items"
      disabled
    />

    <!-- 読み取り専用 -->
    <KvcMultiSelect
      v-model="readonlySelection"
      :items="items"
      read-only
    />
  </div>
</template>
```

## 表示形式

- **通常モード**: チェックマーク付きのリストで選択状態を表示
- **読み取り専用モード**: 選択された値をカンマ区切りのテキストで表示
- **無効化モード**: 全項目が選択不可の状態で表示

## アイテム形式

```typescript
interface KvcItemBase {
  label?: string;
  value?: string | number;
  disabled?: boolean;
  [key: string]: any;
}
```

## 特徴

- **リスト形式 UI**: 常時表示のリスト形式で選択状態を一目で確認
- **チェックマーク表示**: 選択項目にチェックマークアイコンを表示
- **複数選択**: 配列形式で複数の値を同時選択可能
- **行数制御**: `rows` プロパティで表示行数を調整
- **読み取り専用対応**: 読み取り専用時はカンマ区切りテキスト表示
- **個別無効化**: アイテムごとの無効化に対応
- **kintone 標準デザイン**: kintone の UI ガイドラインに準拠

---

[◀ 戻る](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/README.md)
