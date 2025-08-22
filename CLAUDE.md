# kintone Vue3 Component Library

## プロジェクト概要

このプロジェクトは、kintone風のユーザーインターフェースを提供するために設計されたVue3向けのコンポーネントライブラリです。

## 技術スタック

- **フレームワーク:** Vue 3 (Composition API)
- **ビルドツール:** Vite
- **言語:** TypeScript
- **スタイリング:** SCSS (BEM風の命名規則)
- **アイコン:** @iconify/vue

## プロジェクト構成

```
src/
├ components/
│   ├ kvc/               # メインコンポーネント
│   │   ├ utility/       # ユーティリティコンポーネント
│   │   │   ├ DatePicker.vue
│   │   │   └ SelectList.vue
│   │   └ tab/           # タブ関連コンポーネント
│   │       ├ index.vue
│   │       └ pane.vue
│   └ index.ts           # コンポーネントエクスポート
├ assets/                # SCSSファイル
├ types/                 # TypeScript型定義
│   ├ component-types.d.ts
│   ├ global-components.d.ts
│   ├ kintone-vue3-component.d.ts
│   └ vue-shim.d.ts
├ index.ts              # メインエントリーポイント
└ style.scss            # グローバルスタイル
```

## コンポーネント一覧

### フォーム入力系
- **KvcTextInput** - テキスト入力フィールド (text, password, email, number対応)
- **KvcTextarea** - テキストエリア
- **KvcCheckbox** - チェックボックスグループ
- **KvcRadio** - ラジオボタングループ
- **KvcDropdown** - ドロップダウン選択
- **KvcAutocomplete** - オートコンプリート（入力補完機能付きドロップダウン）
- **KvcDatePicker** - 日付選択
- **KvcTimePicker** - 時刻選択
- **KvcDateTimePicker** - 日時選択
- **KvcFileSelect** - ファイル選択・アップロード (ドラッグ&ドロップ対応)

### レイアウト系
- **KvcWrap** - ラッパーコンポーネント (form/div切り替え可能)
- **KvcRow** - 行レイアウト
- **KvcField** - フィールドラッパー (ラベル、エラーメッセージ表示)
- **KvcGroup** - グループコンテナー (開閉可能なグループ化)

### UI系
- **KvcButton** - ボタン (カラーバリエーション: normal, success, save, error)
- **KvcTab/KvcTabPane** - タブコンポーネント
- **KvcDialog** - モーダルダイアログ
- **KvcSpinner** - ローディングスピナー
- **KvcTable** - テーブル (行追加/削除、ドラッグ&ドロップによる並び替え対応)

### ユーティリティコンポーネント
- **DatePicker** - 内部用日付ピッカー
- **SelectList** - 内部用選択リスト

## 主な機能と特徴

### 共通機能
- `v-model` 対応 (双方向バインディング)
- `readOnly` モード対応
- `disabled` 状態対応
- TypeScript完全対応
- kintone風のビジュアルデザイン

### KvcTable特有の機能
- 行の動的追加/削除
- 最小行数/最大行数の制御
- ドラッグ&ドロップによる行の並び替え (vue-draggable-next使用)
- スロットを使った柔軟なセル内容のカスタマイズ
- レコードURLリンク表示対応

### KvcFileSelect特有の機能
- 複数ファイル選択
- ドラッグ&ドロップ対応
- 画像プレビュー
- 自動アップロード機能 (kintone REST API使用)
- ファイルサイズ表示

### KvcAutocomplete特有の機能
- テキスト入力によるリアルタイムフィルタリング
- クリアボタン（選択値のクリア）
- プレースホルダー対応
- 検索結果なし表示
- 大文字小文字を区別しない部分一致検索

## 開発スクリプト

- `npm run dev`: 開発サーバーを起動します。
- `npm run build`: プロダクション用にプロジェクトをビルドします。
- `npm run preview`: プロダクションビルドをプレビューします。

## 主要な依存関係

- `vue`: ^3.5.13 - Vueのコアライブラリ
- `@kintone/rest-api-client`: ^5.6.0 - kintone REST APIクライアント
- `@vueuse/core`: ^9.13.0 - Vue Composition APIユーティリティ
- `@vueuse/integrations`: ^9.13.0 - サードパーティライブラリ統合
- `@iconify/vue`: ^4.1.2 - アイコンライブラリ
- `dayjs`: ^1.11.13 - 日付・時刻操作ライブラリ
- `vue-draggable-next`: ^2.2.1 - ドラッグ&ドロップライブラリ
- `vite`: ^6.0.7 - ビルドツール
- `typescript`: ~5.6.2 - TypeScript
- `sass-embedded`: ^1.83.0 - SCSS処理

## スタイリング

### CSS変数
プロジェクトは以下のCSS変数を使用しています：

```scss
--kvc-spacing: 0.25rem;
--kvc-color-disabled-background: #d4d7d7;
--kvc-color-disabled-text: #888;
--kvc-color-border: #ccc;
--kvc-color-base: #e3e7e8;
--kvc-color-primary: #3498db;
--kvc-color-success: #91c36c;
--kvc-color-error: #e74c3c;
// 他多数...
```

### 命名規則
- BEM風の命名規則を採用
- プレフィックス: `kvc-` (Kintone Vue Component)
- 例: `kvc-button`, `kvc-field-label`, `kvc-table-operation`

## TypeScript型定義

各コンポーネントには専用のPropsインターフェースが定義されています：
- `KvcButtonProps`
- `KvcCheckboxProps`
- `KvcDatePickerProps`
- `KvcDropdownProps`
- `KvcAutocompleteProps`
- `KvcTableProps`
- など

## 使用方法

### プラグインとして登録
```javascript
import KintoneVueComponent from '@zygapp/kintone-vue3-component'
app.use(KintoneVueComponent)
```

### 個別インポート
```javascript
import { KvcButton, KvcTable } from '@zygapp/kintone-vue3-component'
```

### コンポーザブルの使用
```javascript
import { Spinner, useSpinner, showSpinner, hideSpinner } from '@zygapp/kintone-vue3-component'

// スピナーの使用例
const spinner = new Spinner({ text: '読み込み中...' })
spinner.open()
setTimeout(() => spinner.close(), 3000)
```

## 注意事項

- Vue 3専用 (Vue 2では動作しません)
- kintone REST APIを使用する機能では認証設定が必要
- ファイルアップロード機能は最大1GBまで対応