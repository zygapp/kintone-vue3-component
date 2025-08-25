# kintone Vue3 Component

Vue 3 + TypeScript 対応の UI コンポーネントライブラリです。  
kintone カスタマイズや業務アプリ開発で使いやすいよう設計されています。

## 📦 インストール

```bash
npm install @zygapp/kintone-vue3-component
```

## 🔧 プラグインとして利用する

```ts
import { createApp } from "vue";
import App from "./App.vue";
import KintoneVueComponent from "@zygapp/kintone-vue3-component";
import "@zygapp/kintone-vue3-component/style.css";

const app = createApp(App);
app.use(KintoneVueComponent);
```

## 📌 ご利用時の前提：KvcWrap によるラップが必須です

本ライブラリの各コンポーネント（KvcButton, KvcField, KvcCheckbox, KvcDatePicker など）は、すべて `<KvcWrap>` コンポーネントでラップして使用することを前提としています。

これは、各コンポーネントのスタイル統一・イベント制御・DOM 構造の整合性を保つためです。  
また、KvcWrap は `<form>` または `<div>` として動作できるため、柔軟にフォーム構成を作ることができます。

### ✅ 使用例（推奨構成）

```vue
<template>
  <KvcWrap :is-form="true" @submit="handleSubmit">
    <KvcRow>
      <KvcField required>
        <template #label>名前</template>
        <KvcTextInput v-model="form.name" />
      </KvcField>
    </KvcRow>

    <KvcRow>
      <KvcField>
        <template #label>メール</template>
        <KvcTextInput v-model="form.email" type="email" />
      </KvcField>
    </KvcRow>

    <KvcRow>
      <KvcButton color="success">送信</KvcButton>
    </KvcRow>
  </KvcWrap>
</template>
```

### ❗ なぜ KvcWrap が必須なのか？

| 理由               | 説明                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| スタイル統一       | 各フィールド・ラベル・入力エリアが `KvcWrap` 配下で整列するように設計されています |
| レイアウト構造     | `KvcRow`/`KvcField` と組み合わせてレイアウトを制御しやすくなります                |
| フォーム送信制御   | `KvcWrap` が `<form>` を兼ねることで、 `submit` イベント制御が容易になります      |
| 複雑な入力構成対応 | ネストした入力エリアでも整合性を保てます                                          |

### ✅ 注意点

`KvcWrap` を使用しない場合、各コンポーネントのレイアウトやスタイルが意図通りに動作しない可能性があります。  
単独で `KvcField` などを使う場合でも、必ず `KvcWrap` → `KvcRow` → `KvcField` の構成を基本としてください。

## 📚 コンポーネント一覧

| コンポーネント名                                                                                                           | 概要                       | kintone フィールドタイプ |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------ |
| [KvcWrap](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcWrap.md)                     | form/div 切り替えラッパー  | -                        |
| [KvcRow](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcRow.md)                       | 入力行レイアウトラッパー   | -                        |
| [KvcTab](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcTab.md)                       | タブ切り替えコンポーネント | -                        |
| [KvcDialog](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcDialog.md)                 | ダイアログコンポーネント   | -                        |
| [KvcField](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcField.md)                   | 入力フィールドラッパー     | -                        |
| [KvcGroup](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcGroup.md)                   | グループコンテナー         | `GROUP`                  |
| [KvcButton](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcButton.md)                 | スタイル付きボタン         | -                        |
| [KvcCheckbox](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcCheckbox.md)             | 複数選択チェックボックス   | `CHECK_BOX`              |
| [KvcRadio](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcRadio.md)                   | 単一選択ラジオボタン       | `RADIO_BUTTON`           |
| [KvcTextInput](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcTextInput.md)           | テキスト入力フィールド     | `SINGLE_LINE_TEXT`       |
| [KvcTextarea](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcTextarea.md)             | テキストエリア             | `MULTI_LINE_TEXT`        |
| [KvcDropdown](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcDropdown.md)             | ドロップダウンセレクト     | `DROP_DOWN`              |
| [KvcAutocomplete](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcAutocomplete.md)     | オートコンプリート         | -                        |
| [KvcMultiSelect](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcMultiSelect.md)       | 複数選択リスト             | `MULTI_SELECT`           |
| [KvcDatePicker](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcDatePicker.md)         | 日付選択コンポーネント     | `DATE`                   |
| [KvcTimePicker](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcTimePicker.md)         | 時間選択コンポーネント     | `TIME`                   |
| [KvcDateTimePicker](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcDateTimePicker.md) | 日付＋時間複合選択         | `DATE_TIME`              |
| [KvcTable](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcTable.md)                   | 行追加・削除可能なテーブル | `SUBTABLE`               |
| [KvcFileSelect](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcFileSelect.md)         | ファイル選択・アップロード | `FILE`                   |
| [KvcSpinner](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/KvcSpinner.md)               | スピナーコンポーネント     | -                        |
| [Spinner](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/docs/MtdSpinner.md)                  | ローディングスピナー       | -                        |
