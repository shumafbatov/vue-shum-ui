<template>
  <a-modal
    v-model:open="isOpen"
    :title="title"
    :width="modalWidth"
    :closable="closable"
    :mask-closable="closable"
    :footer="null"
    @cancel="handleCancel"
  >
    <template v-if="$slots.header" #title>
      <slot name="header" />
    </template>
    <slot />
    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </a-modal>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Modal as AModal } from 'ant-design-vue'
import type { IModalProps } from '@/types'

const props = withDefaults(defineProps<IModalProps>(), {
  size: 'medium',
  closable: true,
  title: 'Modal Title',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const modalWidth = computed(() => {
  switch (props.size) {
    case 'small':
      return 400
    case 'medium':
      return 600
    case 'large':
      return 800
    case 'fullscreen':
      return '95vw'
    default:
      return 600
  }
})

const isOpen = computed({
  get: () => props.modelValue,
  set: (_value: boolean) => {
    emit('update:modelValue', _value)
  },
})

const handleCancel = () => {
  emit('update:modelValue', false)
}
</script>

