// Common types
export type ComponentSize = 'small' | 'medium' | 'large'
export type ComponentVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'success' | 'warning' | 'info'

// Button types
export interface IButtonProps {
  variant?: ComponentVariant
  size?: ComponentSize
  disabled?: boolean
  loading?: boolean
}

// Input types
export interface IInputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel'
  modelValue?: string | number
  placeholder?: string
  disabled?: boolean
  error?: boolean
  success?: boolean
}

// Modal types
export interface IModalProps {
  modelValue: boolean
  size?: 'small' | 'medium' | 'large' | 'fullscreen'
  closable?: boolean
}

