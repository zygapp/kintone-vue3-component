# KvcDialog

kintone標準スタイルのモーダルダイアログコンポーネントです。確認ダイアログやメッセージ表示に使用できます。

## 基本的な使い方

```vue
<template>
  <div>
    <button @click="showDialog = true">ダイアログを開く</button>

    <KvcDialog
      v-model="showDialog"
      title="確認"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    >
      この操作を実行してもよろしいですか？
    </KvcDialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showDialog = ref(false)

const handleConfirm = () => {
  console.log('確認されました')
}

const handleCancel = () => {
  console.log('キャンセルされました')
}
</script>
```

## Props

| プロパティ | 型 | デフォルト | 説明 |
|-----------|---|-----------|------|
| `modelValue` | `boolean` | `false` | ダイアログの表示状態 |
| `width` | `string \| number` | - | ダイアログの幅 |
| `title` | `string` | `'Title'` | ダイアログのタイトル |
| `showIcon` | `boolean` | `false` | アイコンの表示 |
| `iconType` | `'info' \| 'warning' \| 'error' \| 'success'` | `'info'` | アイコンのタイプ |
| `cancelText` | `string` | `'Cancel'` | キャンセルボタンのテキスト |
| `confirmText` | `string` | `'OK'` | 確認ボタンのテキスト |
| `showCancel` | `boolean` | `true` | キャンセルボタンの表示 |
| `showConfirm` | `boolean` | `true` | 確認ボタンの表示 |

## Events

| イベント | ペイロード | 説明 |
|---------|-----------|------|
| `update:modelValue` | `boolean` | ダイアログの表示状態が変更された時 |
| `confirm` | - | 確認ボタンがクリックされた時 |
| `cancel` | - | キャンセルボタンがクリックされた時 |

## 使用例

### 情報ダイアログ

```vue
<template>
  <KvcDialog 
    v-model="showInfo"
    title="情報"
    icon-type="info"
    :show-cancel="false"
    confirm-text="OK"
  >
    処理が完了しました。
  </KvcDialog>
</template>
```

### 警告ダイアログ

```vue
<template>
  <KvcDialog 
    v-model="showWarning"
    title="警告"
    icon-type="warning"
    cancel-text="キャンセル"
    confirm-text="続行"
  >
    この操作は元に戻せません。続行しますか？
  </KvcDialog>
</template>
```

### エラーダイアログ

```vue
<template>
  <KvcDialog 
    v-model="showError"
    title="エラー"
    icon-type="error"
    :show-cancel="false"
    confirm-text="閉じる"
  >
    処理中にエラーが発生しました。
  </KvcDialog>
</template>
```

### 成功ダイアログ

```vue
<template>
  <KvcDialog 
    v-model="showSuccess"
    title="完了"
    icon-type="success"
    :show-cancel="false"
    confirm-text="OK"
  >
    データが正常に保存されました。
  </KvcDialog>
</template>
```

## アイコンタイプ

| タイプ | 色 | 用途 |
|--------|---|------|
| `info` | 青 (#3498db) | 情報の表示 |
| `warning` | オレンジ (#f39c12) | 注意・警告 |
| `error` | 赤 (#e74c3c) | エラー・失敗 |
| `success` | 緑 (#27ae60) | 成功・完了 |

## 特徴

- **kintone標準デザイン**: kintoneのUIに合わせたスタイリング
- **アイコン表示**: 4種類のアイコンタイプで視覚的にメッセージタイプを伝達
- **カスタマイズ可能**: ボタンテキスト、表示/非表示の細かい制御
- **レスポンシブ**: 画面サイズに応じて適切に表示
- **アクセシビリティ**: フォーカス管理とキーボード操作に対応

---

[◀ 戻る](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/README.md)
