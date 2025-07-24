# Gemini Code Assistant ワークスペース設定

## プロジェクト概要

このプロジェクトは、kintone風のユーザーインターフェースを提供するために設計されたVue3向けのコンポーネントライブラリです。

## 技術スタック

- **フレームワーク:** Vue 3
- **ビルドツール:** Vite
- **言語:** TypeScript
- **スタイリング:** SCSS

## プロジェクト構成

- `src/components/kvc/`: 個別のVueコンポーネントを格納します。
- `src/assets/`: コンポーネントのスタイリング用のSCSSファイルを格納します。
- `src/types/`: TypeScriptの型定義を格納します。
- `docs/`: コンポーネントのドキュメントを格納します。
- `vite.config.js`: Viteの設定ファイルです。
- `package.json`: プロジェクトの依存関係とスクリプトを定義します。

## 開発スクリプト

- `npm run dev`: 開発サーバーを起動します。
- `npm run build`: プロダクション用にプロジェクトをビルドします。
- `npm run preview`: プロダクションビルドをプレビューします。

## 主要な依存関係

- `@kintone/rest-api-client`: kintone REST APIと連携するために使用します。
- `@vueuse/core`: Vue Composition APIのためのユーティリティ集です。
- `dayjs`: 日付と時刻の操作に使用します。
- `vite`: ビルドツールです。
- `vue`: Vueのコアライブラリです。