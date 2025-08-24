/**
 * 各コンポーネント型定義
 */

export interface KvcItemBase {
  label?: string;
  value?: string | number;
  disabled?: boolean;
  [key: string]: any;
}


// utils/KvcSelectList
export interface KvcSelectListProps {
  items: (KvcItemBase | string | number)[];
  modelValue: string | number | null;
  value?: string | number | null;
  labelKey?: string;
  valueKey?: string;
  height?: string | number;
  maxHeight?: string | number;
}


// KvcButton
export interface KvcButtonProps {
  small?: boolean;
  color?: '' | 'normal' | 'success' | 'save' | 'error';
}


// KvcCheckbox
export interface KvcCheckboxProps {
  column?: boolean;
  readOnly?: boolean;
  nonstyled?: boolean;
  itemLabel?: string;
  itemValue?: string;
  items: (KvcItemBase | string | number)[];
  modelValue: (string | number)[];
}

// KvcMultiSelect
export interface KvcMultiSelectProps {
  modelValue: (string | number)[];
  items: KvcItemBase[];
  itemLabel?: string;
  itemValue?: string;
  nonstyled?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  rows?: number;
}

// KvcDatePicker
export interface KvcDatePickerProps {
  modelValue?: string;
  readOnly?: boolean;
  disabled?: boolean;
  nonstyled?: boolean;
}


// KvcDatetimePicker
export interface KvcDateTimePickerProps {
  modelValue?: string;
  readOnly?: boolean;
  disabled?: boolean;
  nonstyled?: boolean;
}


// KvcDropdown
export interface KvcDropdownProps {
  width?: string | number;
  nonstyled?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  items: KvcItemBase[];
  itemLabel?: string;
  itemValue?: string;
  modelValue: string | number | null;
}


// KvcAutocomplete
export interface KvcAutocompleteProps {
  width?: string | number;
  nonstyled?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  items: (KvcItemBase | string | number)[];
  itemLabel?: string;
  itemValue?: string;
  itemDisabled?: string;
  modelValue: string | number | null;
  clearable?: boolean;
  placeholder?: string;
}


// KvcField
export interface KvcFieldProps {
  required?: boolean;
  width?: string | number;
  errorMessage?: string;
  successMessage?: string;
}


// KvcDialog
export interface KvcDialogProps {
  modelValue: boolean;
  width?: string | number;
  title?: string;
  showIcon?: boolean;
  iconType?: 'info' | 'warning' | 'error' | 'success' | 'question';
  cancelText?: string;
  confirmText?: string;
  showCancel?: boolean;
  showConfirm?: boolean;
}


// KvcGroup
export interface KvcGroupProps {
  label?: string;
  open?: boolean;
  collapsible?: boolean;
  width?: string | number;
}


// KvcFileSelect
export interface KvcFileData {
  fileKey?: string;
  name: string;
  size: number;
  contentType?: string;
  data?: ArrayBuffer;
}

export interface KvcFileSelectProps {
  modelValue: KvcFileData[];
  disabled?: boolean;
  readOnly?: boolean;
  multiple?: boolean;
  accept?: string;
  autoUpload?: boolean;
}


// KvcRadio
export interface KvcRadioProps {
  column?: boolean;
  readOnly?: boolean;
  nonstyled?: boolean;
  itemLabel?: string;
  itemValue?: string;
  items: (KvcItemBase | string | number)[];
  modelValue: string | number | boolean | object | null;
}


// KvcTable
export interface KvcTableColumn {
  code?: string;
  label?: string;
  width?: string | number;
  [key: string]: any;
}

export interface KvcTableRowMeta {
  code: string;
  key: string;
}

export interface KvcTableProps {
  readOnly?: boolean;
  rowData?: KvcTableRowMeta[];
  columns: (KvcTableColumn | string)[];
  modelValue: Record<string, any>[];
  hideOperations?: boolean;
  recordUrl?: string | null;
  draggable: boolean;
  animation: number;
  minRows?: number;
  maxRows?: number;
}


// KvcTextInput
export interface KvcTextInputProps {
  modelValue?: string;
  nonstyled?: boolean;
  readOnly?: boolean;
  width?: string;
  type?: string; // 'text' | 'password' | 'email' | 'number' などに限定も可能
  placeholder?: string;
  min?: string | number;
  max?: string | number;
}


// KvcTextarea
export interface KvcTextareaProps {
  modelValue: string;
  nonstyled?: boolean;
  readOnly?: boolean;
  width?: string;
}


// KvcTimePicker
export interface KvcTimePickerProps {
  modelValue?: string;
  readOnly?: boolean;
  disabled?: boolean;
}


// KvcTab
export interface KvcTabProps {
  small?: boolean
  modelValue: string
  width?: string|number
  height?: string|number
}

export interface KvcTabPaneProps {
  label: string
  name: string
}


// KvcWrap
export interface KvcWrapProps {
  isForm?: boolean;
}


export type SelectListItem = KvcItemBase;
export type KvcCheckboxItem = KvcItemBase;
export type KvcRadioItem = KvcItemBase;
export interface DropdownItem extends KvcItemBase {
  icon?: string;
}