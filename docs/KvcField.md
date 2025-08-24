# KvcField

## 概要

ラベル・入力・メッセージを構成する汎用フィールドコンポーネントです。

## 使用例

```vue
<template>
  <KvcField required :error-message="'入力必須です'">
    <template #label>名前</template>
    <KvcTextInput v-model="name" />
  </KvcField>
</template>
```

## Props

| プロパティ       | 型                 | デフォルト | 説明             |
| ---------------- | ------------------ | ---------- | ---------------- |
| `required`       | `boolean`          | `false`    | 必須ラベルの表示 |
| `width`          | `string`\|`number` | `'auto'`   | 最大幅           |
| `errorMessage`   | `string`           | `''`       | エラーメッセージ |
| `successMessage` | `string`           | `''`       | 成功メッセージ   |

## スロット

| 名前      | 説明                 |
| --------- | -------------------- |
| `label`   | ラベル部分           |
| `default` | フィールド本体       |
| `prefix`  | 入力フィールドの前部 |
| `suffix`  | 入力フィールドの後部 |

---

[◀ 戻る](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/README.md)
