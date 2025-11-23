<template>
  <a-button
    :type="antdType"
    :size="antdSize"
    :disabled="disabled"
    :loading="loading"
    :danger="variant === 'danger'"
    @click="handleClick"
  >
    <slot />
  </a-button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Button as AButton } from 'ant-design-vue'
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

const antdType = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'primary'
    case 'secondary':
      return 'default'
    case 'danger':
      return 'primary'
    case 'ghost':
      return 'text'
    default:
      return 'default'
  }
})

const antdSize = computed(() => {
  switch (props.size) {
    case 'small':
      return 'small'
    case 'medium':
      return 'middle'
    case 'large':
      return 'large'
    default:
      return 'middle'
  }
})

const handleClick = (_event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', _event)
  }
}
</script>

