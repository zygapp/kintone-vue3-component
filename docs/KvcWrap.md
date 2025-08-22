# KvcWrap

## 概要

フォームまたは通常の div ラッパーとして使用できるベースコンポーネントです。

## 使用例

```vue
<template>
  <KvcWrap :is-form="true" @submit="handleSubmit">
    <KvcRow>
      <KvcField>
        <KvcTextInput v-model="text" />
      </KvcField>
    </KvcRow>
  </KvcWrap>
</template>
```

## Props

| プロパティ | 型        | デフォルト | 説明                        |
| ---------- | --------- | ---------- | --------------------------- |
| `isForm`   | `boolean` | `false`    | form タグとしてラップするか |

## Events

| イベント | 説明              |
| -------- | ----------------- |
| `submit` | form 送信時に発火 |

---

[◀ 戻る](<REPO_BASE>/README.md)
