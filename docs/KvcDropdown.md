# KvcDropdown

## 概要
選択肢の中から1つを選ぶセレクトボックス型コンポーネントです。

## 使用例

```vue
<template>
  <KvcDropdown
    v-model="selected"
    :items="[
      { label: '選択肢1', value: 'a' },
      { label: '選択肢2', value: 'b' }
    ]"
  />
</template>
```

## Props

| プロパティ | 型 | デフォルト | 説明 |
|------------|----------------|------------|-------------------|
| `items` | `Array` | `[]` | 選択肢リスト |
| `itemLabel` | `string` | `'label'` | ラベルキー名 |
| `itemValue` | `string` | `'value'` | 値キー名 |
| `modelValue` | `string \| number \| null` | `null` | バインド値 |
| `disabled` | `boolean` | `false` | 非活性状態 |
| `readOnly` | `boolean` | `false` | 読み取り専用 |
| `nonstyled` | `boolean` | `false` | スタイルなし |

## Events

| イベント | 説明 |
|----------|------------------|
| `update:modelValue` | 値変更時に発火 |
| `change` | 選択変更時に発火 |



---

[◀ 戻る](../README.md)