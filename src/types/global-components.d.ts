import { DefineComponent } from 'vue'
import {
  KvcButtonProps,
  KvcCheckboxProps,
  KvcDatePickerProps,
  KvcDateTimePickerProps,
  KvcDropdownProps,
  KvcAutocompleteProps,
  KvcMultiSelectProps,
  KvcDialogProps,
  KvcFieldProps,
  KvcGroupProps,
  KvcFileSelectProps,
  KvcRadioProps,
  KvcTableProps,
  KvcTextInputProps,
  KvcTextareaProps,
  KvcTimePickerProps,
  KvcTabProps,
  KvcTabPaneProps,
  KvcWrapProps,
} from './component-types'

export interface KintoneVueGlobalComponents {
  KvcButton: DefineComponent<KvcButtonProps>
  KvcCheckbox: DefineComponent<KvcCheckboxProps>
  KvcDatePicker: DefineComponent<KvcDatePickerProps>
  KvcDateTimePicker: DefineComponent<KvcDateTimePickerProps>
  KvcDialog: DefineComponent<KvcDialogProps>
  KvcDropdown: DefineComponent<KvcDropdownProps>
  KvcAutocomplete: DefineComponent<KvcAutocompleteProps>
  KvcMultiSelect: DefineComponent<KvcMultiSelectProps>
  KvcField: DefineComponent<KvcFieldProps>
  KvcGroup: DefineComponent<KvcGroupProps>
  KvcFileSelect: DefineComponent<KvcFileSelectProps>
  KvcRadio: DefineComponent<KvcRadioProps>
  KvcRow: DefineComponent
  KvcTab: DefineComponent<KvcTabProps>
  KvcTabPane: DefineComponent<KvcTabPaneProps>
  KvcTable: DefineComponent<KvcTableProps>
  KvcTextInput: DefineComponent<KvcTextInputProps>
  KvcTextarea: DefineComponent<KvcTextareaProps>
  KvcTimePicker: DefineComponent<KvcTimePickerProps>
  KvcWrap: DefineComponent<KvcWrapProps>
}

declare module 'vue' {
  export interface GlobalComponents extends KintoneVueGlobalComponents {}
}
