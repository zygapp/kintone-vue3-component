<div align="center">

# kintone Vue3 Component

**Vue 3 + TypeScript で構築する kintone カスタマイズ UI ライブラリ**

[![npm version](https://img.shields.io/npm/v/@zygapp/kintone-vue3-component.svg)](https://www.npmjs.com/package/@zygapp/kintone-vue3-component)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[ドキュメント](https://docs-kvc.zygapp.org) | [GitHub](https://github.com/zygapp/kintone-vue3-component)

</div>

---

## 概要

kintone Vue3 Component は、kintone カスタマイズおよび業務アプリ開発に特化した Vue 3 コンポーネントライブラリです。kintone の標準 UI に準拠したデザインで、タイプセーフな開発体験を提供します。

## 主な特徴

- **Vue 3 Composition API** - 最新の Vue 3 に完全対応
- **TypeScript 完全サポート** - すべてのコンポーネントに型定義を提供
- **kintone UI 互換** - kintone のデザインシステムに準拠
- **豊富なコンポーネント** - 20種類以上のコンポーネントを提供
- **簡単なカスタマイズ** - CSS 変数でテーマを柔軟に調整可能
- **双方向データバインディング** - すべてのフォームコンポーネントで `v-model` に対応

## インストール

```bash
npm install @zygapp/kintone-vue3-component
```

## クイックスタート

### プラグインとして利用

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import KintoneVueComponent from '@zygapp/kintone-vue3-component'
import '@zygapp/kintone-vue3-component/style.css'

const app = createApp(App)
app.use(KintoneVueComponent)
app.mount('#app')
```

### 個別インポート

```typescript
import { KvcButton, KvcTextInput, KvcField } from '@zygapp/kintone-vue3-component'
import '@zygapp/kintone-vue3-component/style.css'
```

## 基本的な使い方

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
        <template #label>メールアドレス</template>
        <KvcTextInput v-model="form.email" type="email" />
      </KvcField>
    </KvcRow>

    <KvcRow>
      <KvcButton color="save">送信</KvcButton>
    </KvcRow>
  </KvcWrap>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: ''
})

const handleSubmit = (event: Event) => {
  console.log('Submit:', form.value)
}
</script>
```

## コンポーネント一覧

### レイアウト系

| コンポーネント | 説明 |
|--------------|------|
| `KvcWrap` | form/div 切り替えラッパー（必須） |
| `KvcRow` | 行レイアウト |
| `KvcField` | フィールドラッパー（ラベル、エラー表示） |
| `KvcGroup` | グループコンテナー（開閉可能） |

### フォーム入力系

| コンポーネント | 説明 | kintone フィールド |
|--------------|------|------------------|
| `KvcTextInput` | テキスト入力 | `SINGLE_LINE_TEXT` |
| `KvcTextarea` | テキストエリア | `MULTI_LINE_TEXT` |
| `KvcCheckbox` | チェックボックス | `CHECK_BOX` |
| `KvcRadio` | ラジオボタン | `RADIO_BUTTON` |
| `KvcDropdown` | ドロップダウン | `DROP_DOWN` |
| `KvcAutocomplete` | オートコンプリート | - |
| `KvcMultiSelect` | 複数選択リスト | `MULTI_SELECT` |
| `KvcDatePicker` | 日付選択 | `DATE` |
| `KvcTimePicker` | 時刻選択 | `TIME` |
| `KvcDateTimePicker` | 日時選択 | `DATETIME` |
| `KvcFileSelect` | ファイル選択（D&D 対応） | `FILE` |
| `KvcTable` | テーブル（D&D 並び替え対応） | `SUBTABLE` |

### UI 系

| コンポーネント | 説明 |
|--------------|------|
| `KvcButton` | ボタン（4種類のカラーバリエーション） |
| `KvcTab` / `KvcTabPane` | タブコンポーネント |
| `KvcDialog` | モーダルダイアログ |
| `KvcSpinner` | ローディングスピナー |

## コンポーザブル

### useSpinner

グローバルなローディングスピナーを制御します。

```typescript
import { useSpinner } from '@zygapp/kintone-vue3-component'

const $spinner = useSpinner()

// スピナーを表示
$spinner.open('読み込み中...')

// メッセージを更新
$spinner.update('データを処理中...')

// スピナーを閉じる
$spinner.close()
```

簡易関数も用意されています：

```typescript
import { showSpinner, hideSpinner } from '@zygapp/kintone-vue3-component'

showSpinner('読み込み中...')
setTimeout(() => hideSpinner(), 3000)
```

## TypeScript サポート

すべてのコンポーネントに型定義が含まれています。

```typescript
import type {
  KvcButtonProps,
  KvcTextInputProps,
  KvcTableColumn
} from '@zygapp/kintone-vue3-component'

const columns: KvcTableColumn[] = [
  { code: 'name', label: '名前', width: '200px' },
  { code: 'email', label: 'メール', width: '300px' }
]
```

## ドキュメント

詳細なドキュメントは公式サイトをご覧ください：

**[https://docs-kvc.zygapp.org](https://docs-kvc.zygapp.org)**

## ライセンス

MIT License - 詳細は [LICENSE](LICENSE) をご覧ください。

## リンク

- [ドキュメント](https://docs-kvc.zygapp.org)
- [GitHub リポジトリ](https://github.com/zygapp/kintone-vue3-component)
- [npm パッケージ](https://www.npmjs.com/package/@zygapp/kintone-vue3-component)
- [問題報告・機能要望](https://github.com/zygapp/kintone-vue3-component/issues)

---

<div align="center">

Made with ❤️ for kintone developers

</div>
