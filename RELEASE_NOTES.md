# リリースノート - v0.4.2

## 🎉 新機能追加

### KvcMultiSelect - 複数選択リストコンポーネント
新しい複数選択リストコンポーネント `KvcMultiSelect` を追加しました。

#### 主な特徴
- ✅ チェックマーク付きのリスト形式で複数項目を選択
- 📋 常時表示のリストUIで選択状態を一目で確認
- 🔢 `rows` プロパティで表示行数を制御可能
- 📖 読み取り専用モードではカンマ区切りテキスト表示
- 🎨 kintone標準デザインに準拠したスタイリング
- ♿ 個別アイテムの無効化に対応

#### 使用例
```vue
<template>
  <KvcMultiSelect 
    v-model="selectedValues"
    :items="options"
    :rows="8"
  />
</template>

<script setup>
const selectedValues = ref(['option1', 'option3'])
const options = [
  { label: 'オプション1', value: 'option1' },
  { label: 'オプション2', value: 'option2' },
  { label: 'オプション3', value: 'option3' }
]
</script>
```

## 📝 ドキュメント更新
- KvcMultiSelectのドキュメントを追加
- README.mdのコンポーネント一覧を更新
- 各ドキュメントのリンクパスを修正

## 🔧 技術的改善
- SCSSファイルをmixin形式に統一
- TypeScript型定義の追加・更新
- コンポーネントのグローバル登録対応

## 📦 パッケージ情報
- バージョン: 0.4.2
- npm: `@zygapp/kintone-vue3-component`

## インストール
```bash
npm install @zygapp/kintone-vue3-component@0.4.2
```

## 今回のリリースに含まれるコンポーネント
- ✨ **新規**: KvcMultiSelect（複数選択リスト）
- 既存: KvcDialog, KvcAutocomplete, KvcGroup, KvcSpinner（v0.4.1で追加済み）

---

### 前回のリリース（v0.4.1）からの変更点
- **追加**: KvcMultiSelect コンポーネント
- **修正**: ドキュメントのURLパス修正
- **改善**: SCSS構造の最適化

### 貢献者
- Koji Kato (@kato_zyg)
- Claude (AI Assistant)

### リポジトリ
https://git.zygapp.org/kintone-utils/kintone-vue3-component

---

**Full Changelog**: https://git.zygapp.org/kintone-utils/kintone-vue3-component/compare/v0.4.1...v0.4.2