# KvcGroup

kintone のグループフィールドと同じような開閉可能なグループコンテナーコンポーネントです。関連するフィールドをまとめてグループ化し、画面の整理に役立ちます。

## 基本的な使い方

```vue
<template>
  <KvcGroup label="基本情報" :open="true">
    <KvcRow>
      <KvcField label="名前" required>
        <KvcTextInput v-model="form.name" />
      </KvcField>
    </KvcRow>
    <KvcRow>
      <KvcField label="メール">
        <KvcTextInput v-model="form.email" type="email" />
      </KvcField>
    </KvcRow>
  </KvcGroup>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
});
</script>
```

## Props

| プロパティ    | 型                | デフォルト | 説明                         |
| ------------- | ----------------- | ---------- | ---------------------------- |
| `label`       | `string`          | `'グループ'` | グループのタイトル           |
| `open`        | `boolean`         | `true`     | 初期状態で開いているかどうか |
| `collapsible` | `boolean`         | `true`     | 開閉可能かどうか             |
| `width`       | `string \| number` | `400`      | グループの幅                 |

## 使用例

### デフォルトで閉じた状態

```vue
<template>
  <KvcGroup label="詳細設定" :default-open="false">
    <KvcRow>
      <KvcField label="詳細オプション">
        <KvcCheckbox v-model="options" :items="optionItems" />
      </KvcField>
    </KvcRow>
  </KvcGroup>
</template>
```

### 開閉不可のグループ

```vue
<template>
  <KvcGroup label="読み取り専用情報" :collapsible="false">
    <KvcRow>
      <KvcField label="作成者">
        <KvcTextInput v-model="creator" read-only />
      </KvcField>
    </KvcRow>
  </KvcGroup>
</template>
```

### ネストしたグループ

```vue
<template>
  <KvcGroup label="ユーザー情報">
    <KvcRow>
      <KvcField label="名前">
        <KvcTextInput v-model="user.name" />
      </KvcField>
    </KvcRow>

    <KvcGroup label="連絡先情報" :default-open="false">
      <KvcRow>
        <KvcField label="電話番号">
          <KvcTextInput v-model="user.phone" />
        </KvcField>
      </KvcRow>
      <KvcRow>
        <KvcField label="住所">
          <KvcTextarea v-model="user.address" />
        </KvcField>
      </KvcRow>
    </KvcGroup>
  </KvcGroup>
</template>
```

### 複数のグループを使った構成

```vue
<template>
  <KvcWrap>
    <KvcGroup label="基本情報">
      <KvcRow>
        <KvcField label="タイトル" required>
          <KvcTextInput v-model="form.title" />
        </KvcField>
      </KvcRow>
      <KvcRow>
        <KvcField label="説明">
          <KvcTextarea v-model="form.description" />
        </KvcField>
      </KvcRow>
    </KvcGroup>

    <KvcGroup label="設定" :default-open="false">
      <KvcRow>
        <KvcField label="カテゴリ">
          <KvcDropdown v-model="form.category" :items="categories" />
        </KvcField>
      </KvcRow>
      <KvcRow>
        <KvcField label="公開日">
          <KvcDatePicker v-model="form.publishDate" />
        </KvcField>
      </KvcRow>
    </KvcGroup>

    <KvcGroup label="添付ファイル" :default-open="false">
      <KvcRow>
        <KvcField label="ファイル">
          <KvcFileSelect v-model="form.files" multiple />
        </KvcField>
      </KvcRow>
    </KvcGroup>
  </KvcWrap>
</template>
```

## 特徴

- **開閉機能**: デフォルトで開閉可能（`collapsible`で制御）
- **カスタムラベル**: グループのタイトルを自由に設定
- **初期状態制御**: `defaultOpen`で初期表示状態を制御
- **ネスト対応**: グループ内にさらにグループを配置可能
- **アニメーション**: 開閉時にスムーズなアニメーション
- **アイコン表示**: 開閉状態を示すアイコン（開閉可能な場合のみ）

## スタイリング

グループコンポーネントは以下の CSS 変数を使用してカスタマイズできます：

```scss
.kvc-group {
  border: 1px solid var(--kvc-color-base);
  background-color: #fff;

  .kvc-group-header {
    background-color: #f7f9fa;
    border-bottom: 1px solid var(--kvc-color-base);
  }

  .kvc-group-content {
    padding: 16px;
    background-color: #fff;
  }
}
```

## アクセシビリティ

- ヘッダー部分はキーボード操作に対応
- 開閉状態は視覚的に分かりやすく表示
- スクリーンリーダーでの読み上げに配慮

## 注意事項

- グループ内のフィールドは適切に`KvcRow`と`KvcField`でラップしてください
- ネストしたグループを多用しすぎると、UI が複雑になる可能性があります
- `collapsible={false}`の場合、アイコンは表示されません

## kintone フィールドとの対応

このコンポーネントは、kintone の「グループ」フィールドタイプに対応します。kintone アプリのフォーム設定で使用されるグループ機能と同等の見た目と動作を提供します。

---

[◀ 戻る](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/README.md)
