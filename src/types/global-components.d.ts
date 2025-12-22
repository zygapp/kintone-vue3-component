import type {
  KvcWrap,
  KvcRow,
  KvcSpinner,
  KvcDialog,
  KvcTable,
  KvcDropdown,
  KvcAutocomplete,
  KvcMultiSelect,
  KvcButton,
  KvcField,
  KvcGroup,
  KvcRadio,
  KvcCheckbox,
  KvcTextInput,
  KvcDatePicker,
  KvcTimePicker,
  KvcDateTimePicker,
  KvcTextarea,
  KvcFileSelect,
  KvcTab,
  KvcTabPane,
} from '../components'

declare module 'vue' {
  export interface GlobalComponents {
    KvcWrap: typeof KvcWrap
    KvcRow: typeof KvcRow
    KvcSpinner: typeof KvcSpinner
    KvcDialog: typeof KvcDialog
    KvcTable: typeof KvcTable
    KvcDropdown: typeof KvcDropdown
    KvcAutocomplete: typeof KvcAutocomplete
    KvcMultiSelect: typeof KvcMultiSelect
    KvcButton: typeof KvcButton
    KvcField: typeof KvcField
    KvcGroup: typeof KvcGroup
    KvcRadio: typeof KvcRadio
    KvcCheckbox: typeof KvcCheckbox
    KvcTextInput: typeof KvcTextInput
    KvcDatePicker: typeof KvcDatePicker
    KvcTimePicker: typeof KvcTimePicker
    KvcDateTimePicker: typeof KvcDateTimePicker
    KvcTextarea: typeof KvcTextarea
    KvcFileSelect: typeof KvcFileSelect
    KvcTab: typeof KvcTab
    KvcTabPane: typeof KvcTabPane
  }
}
