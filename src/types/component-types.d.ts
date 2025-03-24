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
  sm?: boolean;
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
  nonstyled?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  items: KvcItemBase[];
  itemLabel?: string;
  itemValue?: string;
  modelValue: string | number | null;
}


// KvcField
export interface KvcFieldProps {
  required?: boolean;
  width?: string | number;
  errorMessage?: string;
  successMessage?: string;
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