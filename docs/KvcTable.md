# KvcTable

## 概要

テーブル形式のデータ入力や表示ができるコンポーネントです。行追加・削除などの操作ボタン付き。

## 使用例

```vue
<template>
  <KvcTable :columns="columns" :row-data="rowMeta" v-model="rows" />
</template>
```

## Props

| プロパティ        | 型        | デフォルト | 説明                                                                                             |
| ----------------- | --------- | ---------- | ------------------------------------------------------------------------------------------------ |
| `columns`         | `Array`   | `[]`       | 表示カラム情報。各要素は `{ code, label, width }` 形式のオブジェクト。または単純な文字列コード。 |
| `rowData`         | `Array`   | `[]`       | 行データのメタ情報（`data-*` 属性として自動出力）。`{ code: string, key: string }` の配列。      |
| `modelValue`      | `Array`   | `[]`       | テーブルの行データバインド値。各行はオブジェクトで、カラムコードをキーとするデータを持ちます。   |
| `readOnly`        | `boolean` | `false`    | 読み取り専用モードにします（編集不可）。                                                         |
| `hideOperations`  | `boolean` | `false`    | 行の追加/削除ボタンを非表示にします。通常は表示されます。                                        |
| `recordUrl`       | `string`  | `null`     | 行データの `$id` を元に生成するリンクのベース URL。リンクアイコンが先頭列に表示されます。        |
| `minRows`（任意） | `number`  | `1`        | テーブルの最小行数を指定します。                                                                 |
| `maxRows`（任意） | `number`  | -          | テーブルの最大行数を指定します。 |
| `draggable`（任意） | `boolean`  | `false`          | ドラッグ＆ドロップによる行の並び替えを有効にします。 |
| `animation`（任意） | `number`  | `150`          | ドラッグ時のアニメーション速度をミリ秒単位で指定します。 |

## Events

| イベント            | 説明                                                                      |
| ------------------- | ------------------------------------------------------------------------- |
| `update:modelValue` | テーブル内容に変更があったときに発火します。                              |
| `add`               | 行を追加したときに発火。第 2 引数で追加位置のインデックスを受け取ります。 |
| `delete`            | 行を削除したときに発火します。削除後のデータ配列が引数として渡されます。  |

## Slots

各カラムごとにスロットを指定できます。カラムコードをスロット名にして柔軟な内容を描画可能です。

```vue
<KvcTable :columns="[{ code: 'foo', label: 'Foo' }]" v-model="rows">
  <template #foo="{ row, index, value }">
    <input v-model="row.foo.value" />
  </template>
</KvcTable>
```

### その他のスロット

| スロット名      | 説明                   |
| --------------- | ---------------------- |
| `column-[code]` | ヘッダーのカスタム表示 |

#### 使用例

```vue
<KvcTable :columns="[{ code: 'foo', label: 'Foo' }]" v-model="rows">
  <template #column-foo>
    <span class="custom-header">カスタムヘッダー</span>
  </template>
</KvcTable>
```

---

[◀ 戻る](../README.md)
