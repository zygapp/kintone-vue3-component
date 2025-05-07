# KvcButton

## 概要

スタイル付きのボタンコンポーネントです。色やサイズのバリエーションに対応しています。

## 使用例

```vue
<template>
  <KvcButton>デフォルト</KvcButton>
  <KvcButton color="normal">ノーマル</KvcButton>
  <KvcButton color="success">成功</KvcButton>
  <KvcButton color="save">保存</KvcButton>
  <KvcButton color="error">エラー</KvcButton>
  <KvcButton sm>小サイズ</KvcButton>
</template>
```

## Props

| プロパティ | 型                                         | デフォルト | 説明                           |
| ---------- | ------------------------------------------ | ---------- | ------------------------------ |
| `sm`       | `boolean`                                  | `false`    | 小さいサイズのボタンになります |
| `color`    | `''`\|`normal`\|`success`\|`save`\|`error` | `''`       | ボタンの色スタイル指定         |

## スロット

| 名前    | 説明               |
| ------- | ------------------ |
| default | ボタンラベルの内容 |

---

[◀ 戻る](../README.md)
