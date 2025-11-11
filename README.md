# kintone Vue3 Component

Vue 3 + TypeScript 対応の UI コンポーネントライブラリです。kintone カスタマイズや業務アプリ開発に最適化されています。

## 特徴

- **Vue 3 Composition API** - 最新の Vue 3 に完全対応
- **TypeScript 完全サポート** - 型安全な開発体験
- **kintone UI 互換** - kintone の標準 UI に準拠したデザイン
- **豊富なコンポーネント** - フォーム、レイアウト、UI コンポーネントを多数提供
- **カスタマイズ可能** - CSS 変数によるテーマ調整が可能

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

すべてのコンポーネントは `<KvcWrap>` でラップして使用します。

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
| **KvcWrap** | form/div 切り替えラッパー（必須） |
| **KvcRow** | 行レイアウト |
| **KvcField** | フィールドラッパー（ラベル、エラー表示） |
| **KvcGroup** | グループコンテナー |

### フォーム入力系

| コンポーネント | 説明 | kintone フィールドタイプ |
|--------------|------|----------------------|
| **KvcTextInput** | テキスト入力 | `SINGLE_LINE_TEXT` |
| **KvcTextarea** | テキストエリア | `MULTI_LINE_TEXT` |
| **KvcCheckbox** | チェックボックス | `CHECK_BOX` |
| **KvcRadio** | ラジオボタン | `RADIO_BUTTON` |
| **KvcDropdown** | ドロップダウン | `DROP_DOWN` |
| **KvcAutocomplete** | オートコンプリート | - |
| **KvcMultiSelect** | 複数選択リスト | `MULTI_SELECT` |
| **KvcDatePicker** | 日付選択 | `DATE` |
| **KvcTimePicker** | 時刻選択 | `TIME` |
| **KvcDateTimePicker** | 日時選択 | `DATETIME` |
| **KvcFileSelect** | ファイル選択 | `FILE` |
| **KvcTable** | テーブル | `SUBTABLE` |

### UI 系

| コンポーネント | 説明 |
|--------------|------|
| **KvcButton** | ボタン（カラーバリエーション対応） |
| **KvcTab/KvcTabPane** | タブコンポーネント |
| **KvcDialog** | モーダルダイアログ |
| **KvcSpinner** | ローディングスピナー |

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

## ドキュメント

詳細なドキュメントは以下で確認できます：

```bash
cd docs-vuepress
npm install
npm run docs:dev
```

ブラウザで `http://localhost:8080` にアクセスしてください。

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

## ライセンス

MIT

## リポジトリ

https://git.zygapp.org/kintone-utils/kintone-vue3-component
