# KvcDialog

## 概要

モーダルダイアログを表示するためのコンポーネントです。画面全体を覆ってコンテンツの操作をブロックし、ダイアログ内に任意の内容をスロットで表示できます。

## 使用例

```vue
<template>
  <KvcDialog v-model="visible" :width="600">
    <template #header> ダイアログタイトル </template>

    <template #body-header> ボディの上部 </template>

    <div>メインコンテンツ</div>

    <template #body-footer> ボディの下部 </template>

    <template #footer>
      <button @click="visible = false">閉じる</button>
    </template>
  </KvcDialog>
</template>
```

## Props

| プロパティ   | 型                 | デフォルト | 説明                                |
| ------------ | ------------------ | ---------- | ----------------------------------- |
| `modelValue` | `boolean`          | `false`    | ダイアログの表示/非表示を制御します |
| `width`      | `string`\|`number` | `500`      | ダイアログの横幅を指定できます      |

## Slots

| スロット名    | 説明                                 |
| ------------- | ------------------------------------ |
| `header`      | ダイアログ上部のヘッダー部分         |
| `body-header` | メインコンテンツの上に表示される領域 |
| `default`     | メインのダイアログコンテンツ         |
| `body-footer` | メインコンテンツの下に表示される領域 |
| `footer`      | ダイアログ下部のフッター領域         |

## Events

| イベント            | 説明                                     |
| ------------------- | ---------------------------------------- |
| `update:modelValue` | ダイアログの開閉状態が変化したときに発火 |

---

[◀ 戻る](<REPO_BASE>/README.md)
