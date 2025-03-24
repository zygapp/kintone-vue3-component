# KvcWrap

## 概要
フォームまたは通常のdivラッパーとして使用できるベースコンポーネントです。

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

| プロパティ | 型 | デフォルト | 説明 |
|------------|-----------|------------|-----------------------------|
| `isForm` | `boolean` | `false` | formタグとしてラップするか |

## Events

| イベント | 説明 |
|----------|----------------------|
| `submit` | form送信時に発火 |



---

[◀ 戻る](../README.md)