# KvcRadio

## 概要
ラジオボタン形式で単一選択するコンポーネントです。

## 使用例

```vue
<template>
  <KvcRadio
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
|------------|----------------------|------------|------------------------------|
| `column` | `boolean` | `false` | 縦並びで表示 |
| `readOnly` | `boolean` | `false` | 読み取り専用 |
| `nonstyled` | `boolean` | `false` | スタイルなし表示 |
| `itemLabel` | `string` | `'label'` | ラベルキー名 |
| `itemValue` | `string` | `'value'` | 値キー名 |
| `items` | `Array` | `[]` | 選択肢リスト |
| `modelValue` | `string \| number \| boolean \| object \| null` | `null` | バインド値 |

## Events

| イベント | 説明 |
|----------|--------------------|
| `update:modelValue` | 値変更時に発火 |
| `change` | チェック変更時に発火 |



---

[◀ 戻る](../README.md)