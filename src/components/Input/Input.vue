<template>
  <a-input
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :status="inputStatus"
    @update:value="handleUpdate"
    @blur="handleBlur"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Input as AInput } from 'ant-design-vue'
import type { IInputProps } from '@/types'

const props = withDefaults(defineProps<IInputProps>(), {
  type: 'text',
  modelValue: '',
  placeholder: '',
  disabled: false,
  error: false,
  success: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  blur: [event: FocusEvent]
}>()

const inputStatus = computed(() => {
  if (props.error) return 'error'
  if (props.success) return 'warning'
  return undefined
})

const handleUpdate = (_value: string) => {
  emit('update:modelValue', _value)
}

const handleBlur = (_event: FocusEvent) => {
  emit('blur', _event)
}
</script>

