import { reactive, readonly } from 'vue'

interface SpinnerOptions {
  text?: string
}

interface SpinnerState {
  isVisible: boolean
  text: string
}

// グローバルなスピナー状態
const spinnerState = reactive<SpinnerState>({
  isVisible: false,
  text: '読み込み中...'
})

export class Spinner {
  private options: SpinnerOptions

  constructor(options: SpinnerOptions = {}) {
    this.options = {
      text: '読み込み中...',
      ...options
    }
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

export const useSpinner = () => {
  return {
    spinnerState: readonly(spinnerState),
    createSpinner: (options?: SpinnerOptions) => new Spinner(options)
  }
}

// デフォルトスピナーインスタンス
export const defaultSpinner = new Spinner()

// 便利関数
export const showSpinner = (text?: string) => {
  const spinner = new Spinner({ text })
  spinner.open()
  return spinner
}

export const hideSpinner = () => {
  defaultSpinner.close()
}