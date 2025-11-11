import { reactive, readonly, type DeepReadonly } from 'vue'

interface SpinnerOptions {
  text?: string
}

interface SpinnerState {
  isVisible: boolean
  text: string
}

// グローバルなスピナー状態
export const spinnerState = reactive<SpinnerState>({
  isVisible: false,
  text: '読み込み中...'
})

export class Spinner {
  private options: SpinnerOptions
  public readonly state: DeepReadonly<SpinnerState>

  constructor(options: SpinnerOptions = {}) {
    this.options = {
      text: '読み込み中...',
      ...options
    }
    this.state = readonly(spinnerState)
  }

  open(text?: string): void {
    spinnerState.text = text || this.options.text || '読み込み中...'
    spinnerState.isVisible = true
  }

  close(): void {
    spinnerState.isVisible = false
  }

  update(text: string): void {
    spinnerState.text = text
  }

  isOpen(): boolean {
    return spinnerState.isVisible
  }
}

// デフォルトスピナーインスタンス
const defaultSpinner = new Spinner()

export const useSpinner = () => {
  return defaultSpinner
}

// 便利関数
export const showSpinner = (text?: string) => {
  defaultSpinner.open(text)
  return defaultSpinner
}

export const hideSpinner = () => {
  defaultSpinner.close()
}