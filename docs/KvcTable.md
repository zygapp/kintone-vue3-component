# KvcTable

## 概要
テーブル形式のデータ入力や表示ができるコンポーネントです。行追加・削除などの操作ボタン付き。

## 使用例

```vue
<template>
  <KvcTable
    :columns="columns"
    :row-data="rowMeta"
    v-model="rows"
  />
</template>
```

## Props

| プロパティ | 型 | デフォルト | 説明 |
|------------|------------------|------------|-------------------------------|
| `columns` | `Array` | `[]` | 表示カラム情報 |
| `rowData` | `Array` | `[]` | 行データのメタ情報（data-*用） |
| `modelValue` | `Array` | `[]` | テーブルの行データバインド値 |
| `readOnly` | `boolean` | `false` | 読み取り専用 |
| `hideOperations` | `boolean` | `false` | 行の追加/削除ボタン非表示 |
| `recordUrl` | `string` | `null` | レコード参照リンクのベースURL |

## Events

| イベント | 説明 |
|----------|-------------------------|
| `update:modelValue` | 値変更時に発火 |
| `add` | 行追加時に発火 |
| `delete` | 行削除時に発火 |



---

[◀ 戻る](../README.md)