# kintone Vue3 Component Library

## プロジェクト概要

Vue 3 向けの kintone 風 UI コンポーネントライブラリです。TypeScript 完全対応で、kintone カスタマイズや業務アプリケーション開発に最適化されています。

## 技術スタック

- **フレームワーク:** Vue 3 (Composition API)
- **ビルドツール:** Vite 6.0+
- **言語:** TypeScript 5.6+
- **スタイリング:** CSS (Nested CSS, BEM 風命名規則)
- **アイコン:** @iconify/vue
- **日付処理:** dayjs
- **ドラッグ&ドロップ:** vue-draggable-next

## プロジェクト構成

```
src/
├── components/
│   ├── kvc/                    # メインコンポーネント
│   │   ├── utility/            # 内部ユーティリティ
│   │   │   ├── DatePicker.vue
│   │   │   └── SelectList.vue
│   │   └── tab/                # タブコンポーネント
│   │       ├── index.vue
│   │       └── pane.vue
│   └── index.ts                # コンポーネントエクスポート
├── composables/                # Vue Composables
│   └── useSpinner.ts          # スピナー制御
├── css/                        # CSS ファイル（ビルド用）
│   ├── variables.css          # CSS 変数定義
│   ├── style.css              # メインスタイル
│   └── components/            # コンポーネント別スタイル
│       ├── button.css
│       ├── text-input.css
│       └── ...
├── scss/                       # 元の SCSS ファイル（参照用）
├── types/                      # TypeScript 型定義
│   ├── component-types.ts
│   ├── global-components.d.ts
│   ├── kintone-vue3-component.d.ts
│   └── vue-shim.d.ts
└── index.ts                    # メインエントリーポイント

test/                           # テスト環境
docs-vuepress/                  # VuePress ドキュメント
dist/                           # ビルド成果物
```

## コンポーネント一覧

### レイアウト系

- **KvcWrap** - ラッパーコンポーネント（form/div 切り替え可能、必須）
- **KvcRow** - 行レイアウト
- **KvcField** - フィールドラッパー（ラベル、エラーメッセージ表示）
- **KvcGroup** - グループコンテナー（開閉可能）

### フォーム入力系

- **KvcTextInput** - テキスト入力（text, password, email, number 対応）
- **KvcTextarea** - テキストエリア
- **KvcCheckbox** - チェックボックスグループ
- **KvcRadio** - ラジオボタングループ
- **KvcDropdown** - ドロップダウン選択
- **KvcAutocomplete** - オートコンプリート（リアルタイムフィルタリング対応）
- **KvcMultiSelect** - 複数選択リスト
- **KvcDatePicker** - 日付選択
- **KvcTimePicker** - 時刻選択
- **KvcDateTimePicker** - 日時選択
- **KvcFileSelect** - ファイル選択・アップロード（ドラッグ&ドロップ対応）
- **KvcTable** - テーブル（行追加/削除、ドラッグ&ドロップによる並び替え対応）

### UI 系

- **KvcButton** - ボタン（カラーバリエーション: normal, success, save, error）
- **KvcTab/KvcTabPane** - タブコンポーネント
- **KvcDialog** - モーダルダイアログ
- **KvcSpinner** - ローディングスピナー

### ユーティリティコンポーネント（内部使用）

- **DatePicker** - 日付ピッカー UI
- **SelectList** - 選択リスト UI

## 主な機能と特徴

### 共通機能

- `v-model` による双方向バインディング
- `readOnly` モード対応
- `disabled` 状態対応
- TypeScript 完全対応（全コンポーネントに型定義）
- kintone 風のビジュアルデザイン
- グローバル/個別インポート両対応

### KvcTable 特有の機能

- 行の動的追加/削除
- 最小行数/最大行数の制御
- ドラッグ&ドロップによる行の並び替え
- スロットを使った柔軟なセル内容のカスタマイズ
- レコード URL リンク表示対応

### KvcFileSelect 特有の機能

- 複数ファイル選択
- ドラッグ&ドロップ対応
- 画像プレビュー
- 自動アップロード機能（kintone REST API 使用）
- ファイルサイズ表示

### KvcAutocomplete 特有の機能

- テキスト入力によるリアルタイムフィルタリング
- クリアボタン（選択値のクリア）
- プレースホルダー対応
- 検索結果なし表示
- 大文字小文字を区別しない部分一致検索

## 開発スクリプト

- `npm run dev` - 開発サーバーを起動（test/ ディレクトリ）
- `npm run build` - プロダクション用にビルド
- `npm run preview` - プロダクションビルドをプレビュー
- `npm run doc` - ドキュメントサイトを起動

## 使用方法

### プラグインとして登録

```typescript
import { createApp } from 'vue'
import KintoneVueComponent from '@zygapp/kintone-vue3-component'
import '@zygapp/kintone-vue3-component/style.css'

const app = createApp(App)
app.use(KintoneVueComponent)
app.mount('#app')
```

### 個別インポート

```typescript
import { KvcButton, KvcTable, KvcField } from '@zygapp/kintone-vue3-component'
import '@zygapp/kintone-vue3-component/style.css'
```

### コンポーザブルの使用

#### useSpinner（推奨）

```typescript
import { useSpinner } from '@zygapp/kintone-vue3-component'

const $spinner = useSpinner()

// スピナーを表示
$spinner.open('読み込み中...')

// メッセージを更新
$spinner.update('データを処理中...')

// スピナーを閉じる
$spinner.close()

// 状態を確認
if ($spinner.isOpen()) {
  console.log('スピナーは表示中です')
}
```

#### 簡易関数

```typescript
import { showSpinner, hideSpinner } from '@zygapp/kintone-vue3-component'

showSpinner('処理中...')
setTimeout(() => hideSpinner(), 3000)
```

## スタイリング

### CSS 変数

プロジェクトは CSS カスタムプロパティを使用してテーマをカスタマイズできます。

```css
:root {
  --kvc-spacing: 0.25rem;
  --kvc-color-disabled-background: #d4d7d7;
  --kvc-color-disabled-text: #888;
  --kvc-color-border: #ccc;
  --kvc-color-base: #e3e7e8;
  --kvc-color-primary: #3498db;
  --kvc-color-success: #91c36c;
  --kvc-color-error: #e74c3c;
}
```

### 命名規則

- **BEM 風の命名規則**を採用
- **プレフィックス:** `kvc-` (Kintone Vue Component)
- **例:** `kvc-button`, `kvc-field-label`, `kvc-table-operation`

### スコープ

すべてのコンポーネントスタイルは `#kvc-wrap` 配下で適用されます。

## TypeScript 型定義

各コンポーネントには専用の Props インターフェースが定義されています。

```typescript
import type {
  KvcButtonProps,
  KvcCheckboxProps,
  KvcDatePickerProps,
  KvcDropdownProps,
  KvcAutocompleteProps,
  KvcTableProps,
  KvcTableColumn
} from '@zygapp/kintone-vue3-component'

// 使用例
const columns: KvcTableColumn[] = [
  { code: 'name', label: '名前', width: '200px' },
  { code: 'email', label: 'メール', width: '300px' }
]
```

## Git コミットポリシー

### コミットメッセージ規則

- **Conventional Commits 形式**を使用（`type: description`）
- 必要最低限の簡潔なメッセージ
- 絵文字は使用しない
- クレジット（Co-Authored-By: Claude など）は記載しない

### コミットタイプ

| タイプ | 説明 |
|--------|------|
| `feat` | 新機能の追加 |
| `fix` | バグ修正 |
| `docs` | ドキュメントのみの変更 |
| `style` | コードの意味に影響しない変更（空白、フォーマットなど） |
| `refactor` | バグ修正や機能追加ではないコードの変更 |
| `perf` | パフォーマンス改善 |
| `test` | テストの追加や修正 |
| `chore` | ビルドプロセスやツールの変更 |

### コミット例

```bash
# Good
git commit -m "fix: Spinner コンポーザブルの API を修正"
git commit -m "feat: useSpinner による新しい API を追加"
git commit -m "docs: Spinner の使用方法を更新"
git commit -m "refactor: spinner.vue のコードをクリーンアップ"

# Bad
git commit -m "✨ Spinner コンポーザブルの API を修正

Co-Authored-By: Claude <noreply@anthropic.com>"
git commit -m "修正しました"
```

## 主要な依存関係

| パッケージ | バージョン | 用途 |
|-----------|-----------|------|
| `vue` | ^3.5.13 | Vue コアライブラリ |
| `@kintone/rest-api-client` | ^5.7.0 | kintone REST API クライアント |
| `@vueuse/core` | ^12.5.0 | Vue Composition API ユーティリティ |
| `@vueuse/integrations` | ^12.5.0 | サードパーティライブラリ統合 |
| `@iconify/vue` | ^4.3.0 | アイコンライブラリ |
| `dayjs` | ^1.11.13 | 日付・時刻操作ライブラリ |
| `vue-draggable-next` | ^2.2.1 | ドラッグ&ドロップライブラリ |
| `vite` | ^6.0.5 | ビルドツール |

## 注意事項

### 必須要件

- **Vue 3 専用**（Vue 2 では動作しません）
- **KvcWrap でのラップが必須**（すべてのコンポーネント）

### 制限事項

- kintone REST API を使用する機能では認証設定が必要
- ファイルアップロード機能は最大 1GB まで対応
- ブラウザは最新版を推奨（ES2020+ 対応必須）

## ライセンス

MIT

## リポジトリ

https://git.zygapp.org/kintone-utils/kintone-vue3-component
