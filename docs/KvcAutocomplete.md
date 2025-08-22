# KvcAutocomplete

入力補完機能を持つドロップダウンコンポーネントです。ユーザーがテキストを入力すると、リアルタイムでアイテムをフィルタリングして候補を表示します。

## 基本的な使い方

```vue
<template>
  <KvcAutocomplete
    v-model="selectedValue"
    :items="items"
    placeholder="選択してください"
  />
</template>

<script setup>
import { ref } from 'vue'

const selectedValue = ref('')
const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' }
]
</script>
```

## Props

| プロパティ | 型 | デフォルト | 説明 |
|-----------|---|-----------|------|
| `modelValue` | `string \| number \| null` | `null` | 選択された値 |
| `items` | `Array<KvcItemBase \| string \| number>` | `[]` | 選択肢のリスト |
| `width` | `string \| number` | `150` | 入力フィールドの幅 |
| `disabled` | `boolean` | `false` | 無効化状態 |
| `readOnly` | `boolean` | `false` | 読み取り専用モード |
| `nonstyled` | `boolean` | `false` | スタイルなし表示（読み取り専用時） |
| `itemLabel` | `string` | `'label'` | アイテムのラベルキー |
| `itemValue` | `string` | `'value'` | アイテムの値キー |
| `itemDisabled` | `string` | `'disabled'` | アイテムの無効化キー |
| `clearable` | `boolean` | `true` | クリアボタンの表示 |
| `placeholder` | `string` | `''` | プレースホルダーテキスト |

## Events

| イベント | ペイロード | 説明 |
|---------|-----------|------|
| `update:modelValue` | `string \| number \| null` | 値が変更された時 |
| `change` | `string \| number \| null` | 値が変更された時 |
| `input` | `string` | テキストが入力された時 |

## 使用例

### シンプルな文字列配列

```vue
<template>
  <KvcAutocomplete
    v-model="selectedFruit"
    :items="fruits"
    placeholder="フルーツを選択"
  />
</template>

<script setup>
import { ref } from 'vue'

const selectedFruit = ref('')
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
</script>
```

### クリアボタンなし

```vue
<template>
  <KvcAutocomplete
    v-model="selectedValue"
    :items="items"
    :clearable="false"
    placeholder="選択してください"
  />
</template>
```

### カスタムキー

```vue
<template>
  <KvcAutocomplete
    v-model="selectedId"
    :items="users"
    item-label="name"
    item-value="id"
    placeholder="ユーザーを検索"
  />
</template>

<script setup>
import { ref } from 'vue'

const selectedId = ref(null)
const users = [
  { id: 1, name: '田中太郎' },
  { id: 2, name: '山田花子' },
  { id: 3, name: '佐藤次郎' }
]
</script>
```

### フィールドと組み合わせて使用

```vue
<template>
  <KvcField label="担当者" :required="true">
    <KvcAutocomplete
      v-model="assignee"
      :items="assignees"
      placeholder="担当者を検索"
      width="250"
    />
  </KvcField>
</template>

<script setup>
import { ref } from 'vue'

const assignee = ref('')
const assignees = [
  { label: '田中太郎', value: 'tanaka' },
  { label: '山田花子', value: 'yamada' },
  { label: '佐藤次郎', value: 'sato' }
]
</script>
```

### 無効化された状態

```vue
<template>
  <KvcAutocomplete
    v-model="selectedValue"
    :items="items"
    :disabled="true"
  />
</template>
```

### 読み取り専用モード

```vue
<template>
  <KvcAutocomplete
    v-model="selectedValue"
    :items="items"
    :read-only="true"
  />
</template>
```

## 特徴

- **リアルタイムフィルタリング**: 入力したテキストに基づいて選択肢を動的にフィルタリング
- **クリアボタン**: 選択した値を簡単にクリア（オプション）
- **キーボード操作**: 上下キーで選択肢を移動、Enterで選択
- **柔軟なデータ形式**: オブジェクト配列、文字列配列、数値配列に対応
- **カスタマイズ可能**: ラベルと値のキーをカスタマイズ可能

## 注意事項

- フィルタリングは大文字小文字を区別しません
- 部分一致で検索されます
- `disabled`状態では通常のドロップダウンのような表示になります
- 検索結果が0件の場合、「該当する項目がありません」と表示されます

## KvcDropdownとの違い

| 機能 | KvcAutocomplete | KvcDropdown |
|------|----------------|-------------|
| テキスト入力 | ✓ | ✗ |
| フィルタリング | ✓ | ✗ |
| クリアボタン | ✓ | ✗ |
| プレースホルダー | ✓ | ✗ |
| 検索結果なし表示 | ✓ | ✗ |

## アクセシビリティ

- `aria-expanded`属性でドロップダウンの開閉状態を示します
- `aria-controls`属性でリストとの関連を示します
- キーボード操作に完全対応