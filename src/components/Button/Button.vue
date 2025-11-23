<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="button-loader"></span>
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IButtonProps } from '@/types'

const props = withDefaults(defineProps<IButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => [
  'vue-ui-button',
  `vue-ui-button--${props.variant}`,
  `vue-ui-button--${props.size}`,
  {
    'vue-ui-button--disabled': props.disabled,
    'vue-ui-button--loading': props.loading,
  },
])

const handleClick = (_event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', _event)
  }
}
</script>

<style scoped>
.vue-ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}

.vue-ui-button--small {
  padding: 6px 12px;
  font-size: 12px;
}

.vue-ui-button--medium {
  padding: 8px 16px;
  font-size: 14px;
}

.vue-ui-button--large {
  padding: 10px 20px;
  font-size: 16px;
}

.vue-ui-button--primary {
  background-color: #007bff;
  color: white;
}

.vue-ui-button--primary:hover:not(.vue-ui-button--disabled) {
  background-color: #0056b3;
}

.vue-ui-button--secondary {
  background-color: #6c757d;
  color: white;
}

.vue-ui-button--secondary:hover:not(.vue-ui-button--disabled) {
  background-color: #545b62;
}

.vue-ui-button--danger {
  background-color: #dc3545;
  color: white;
}

.vue-ui-button--danger:hover:not(.vue-ui-button--disabled) {
  background-color: #c82333;
}

.vue-ui-button--ghost {
  background-color: transparent;
  color: #007bff;
  border: 1px solid #007bff;
}

.vue-ui-button--ghost:hover:not(.vue-ui-button--disabled) {
  background-color: #f8f9fa;
}

.vue-ui-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.vue-ui-button--loading {
  cursor: wait;
}

.button-loader {
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

