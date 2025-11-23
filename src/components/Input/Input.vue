<template>
  <div class="vue-ui-input-wrapper">
    <input
      :class="inputClasses"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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

const inputClasses = computed(() => [
  'vue-ui-input',
  {
    'vue-ui-input--error': props.error,
    'vue-ui-input--success': props.success,
    'vue-ui-input--disabled': props.disabled,
  },
])

const handleInput = (_event: Event) => {
  const target = _event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleBlur = (_event: FocusEvent) => {
  emit('blur', _event)
}
</script>

<style scoped>
.vue-ui-input-wrapper {
  width: 100%;
}

.vue-ui-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.2s;
}

.vue-ui-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.vue-ui-input--error {
  border-color: #dc3545;
}

.vue-ui-input--error:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
}

.vue-ui-input--success {
  border-color: #28a745;
}

.vue-ui-input--success:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.25);
}

.vue-ui-input--disabled {
  background-color: #e9ecef;
  cursor: not-allowed;
  opacity: 0.6;
}
</style>

