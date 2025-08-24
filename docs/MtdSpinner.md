# Spinnerコンポーザブル

KvcWrap内に自動で埋め込まれるスピナーを、コンポーザブルAPIで制御できます。ローディング状態を簡単に管理でき、非同期処理中にユーザーに視覚的なフィードバックを提供します。

## 基本的な使い方

```js
import { Spinner } from '@zygapp/kintone-vue3-component'
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      const spinner = new Spinner()
      spinner.open('loading...')

      setTimeout(() => {
        spinner.close()
      }, 3000)
    })
  }
}
```

## API

### Spinnerクラス

#### コンストラクタ

```js
new Spinner(options?: SpinnerOptions)
```

##### SpinnerOptions

| プロパティ | 型 | デフォルト | 説明 |
|-----------|---|-----------|------|
| `text` | `string` | `'読み込み中...'` | スピナーに表示するテキスト |

#### メソッド

##### open()
スピナーを表示します。

```js
const spinner = new Spinner({ text: 'データを読み込み中...' })
spinner.open()
```

##### close()
スピナーを非表示にします。

```js
spinner.close()
```

##### isOpen()
スピナーが表示されているかどうかを返します。

```js
if (spinner.isOpen()) {
  console.log('スピナー表示中')
}
```

### ユーティリティ関数

#### showSpinner(text?)
デフォルトスピナーを表示する便利関数です。

```js
import { showSpinner, hideSpinner } from '@zygapp/kintone-vue3-component'

// スピナーを表示
const spinner = showSpinner('処理中...')

// 3秒後に非表示
setTimeout(() => {
  hideSpinner()
}, 3000)
```

#### hideSpinner()
デフォルトスピナーを非表示にします。

### useSpinnerコンポーザブル

より高度な制御が必要な場合は、`useSpinner`コンポーザブルを使用できます。

```js
import { useSpinner } from '@zygapp/kintone-vue3-component'

export default {
  setup() {
    const { spinnerState, createSpinner } = useSpinner()
    
    const customSpinner = createSpinner({ text: 'カスタム処理中...' })
    
    const startLoading = () => {
      customSpinner.open()
    }
    
    const stopLoading = () => {
      customSpinner.close()
    }
    
    return {
      spinnerState,
      startLoading,
      stopLoading
    }
  }
}
```

## 使用例

### 非同期データ取得

```js
import { Spinner } from '@zygapp/kintone-vue3-component'

export default {
  setup() {
    const fetchData = async () => {
      const spinner = new Spinner({ text: 'データを取得中...' })
      
      try {
        spinner.open()
        const response = await fetch('/api/data')
        const data = await response.json()
        // データ処理
      } catch (error) {
        console.error('エラー:', error)
      } finally {
        spinner.close()
      }
    }
    
    return { fetchData }
  }
}
```

### フォーム送信

```js
import { Spinner } from '@zygapp/kintone-vue3-component'

export default {
  setup() {
    const submitForm = async (formData) => {
      const spinner = new Spinner({ text: '送信中...' })
      
      try {
        spinner.open()
        await api.submitForm(formData)
        // 成功処理
      } catch (error) {
        // エラー処理
      } finally {
        spinner.close()
      }
    }
    
    return { submitForm }
  }
}
```

### 複数のスピナー管理

```js
import { useSpinner } from '@zygapp/kintone-vue3-component'

export default {
  setup() {
    const { createSpinner } = useSpinner()
    
    const dataSpinner = createSpinner({ text: 'データ読み込み中...' })
    const saveSpinner = createSpinner({ text: '保存中...' })
    
    const loadData = async () => {
      dataSpinner.open()
      // データ読み込み処理
      dataSpinner.close()
    }
    
    const saveData = async () => {
      saveSpinner.open()
      // 保存処理
      saveSpinner.close()
    }
    
    return { loadData, saveData }
  }
}
```

### Vue Composition APIとの組み合わせ

```js
import { ref } from 'vue'
import { Spinner } from '@zygapp/kintone-vue3-component'

export default {
  setup() {
    const users = ref([])
    const loading = ref(false)
    
    const fetchUsers = async () => {
      loading.value = true
      const spinner = new Spinner({ text: 'ユーザー一覧を取得中...' })
      
      try {
        spinner.open()
        const response = await api.getUsers()
        users.value = response.data
      } finally {
        spinner.close()
        loading.value = false
      }
    }
    
    return {
      users,
      loading,
      fetchUsers
    }
  }
}
```

## 特徴

- **自動埋め込み**: KvcWrap内に自動で埋め込まれるため、追加のマークアップ不要
- **グローバル状態管理**: 複数のコンポーネントから同一のスピナーを制御可能
- **カスタマイズ可能**: 表示テキストをカスタマイズ可能
- **TypeScript対応**: 完全なTypeScriptサポート
- **軽量**: 最小限のAPIで簡単に使用可能

## 注意事項

- スピナーはKvcWrap内でのみ表示されます
- 同時に複数のスピナーを開くと、最後に開いたスピナーのテキストが表示されます
- 必ずopen()とclose()をペアで呼び出してください
- try-finallyブロックの使用を推奨します

## 既存のKvcSpinnerコンポーネントとの違い

| 機能 | Spinnerコンポーザブル | KvcSpinnerコンポーネント |
|------|-------------------|----------------------|
| 埋め込み | 自動（KvcWrap内） | 手動 |
| API | JavaScript | Vue Props |
| 制御 | プログラマティック | リアクティブ |
| 用途 | 非同期処理 | 任意のローディング状態 |

---

[◀ 戻る](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/README.md)
