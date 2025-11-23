<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="vue-ui-modal-overlay"
        @click="handleOverlayClick"
      >
        <div
          :class="modalClasses"
          @click.stop
        >
          <div v-if="closable" class="vue-ui-modal-close" @click="handleClose">
            ×
          </div>
          <div class="vue-ui-modal-header">
            <slot name="header">
              <h3>Modal Title</h3>
            </slot>
          </div>
          <div class="vue-ui-modal-body">
            <slot />
          </div>
          <div class="vue-ui-modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import type { IModalProps } from '@/types'

const props = withDefaults(defineProps<IModalProps>(), {
  size: 'medium',
  closable: true,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const modalClasses = computed(() => [
  'vue-ui-modal',
  `vue-ui-modal--${props.size}`,
])

const handleClose = () => {
  emit('update:modelValue', false)
}

const handleOverlayClick = () => {
  if (props.closable) {
    handleClose()
  }
}

const handleEscape = (_event: KeyboardEvent) => {
  if (_event.key === 'Escape' && props.modelValue && props.closable) {
    handleClose()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.vue-ui-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.vue-ui-modal {
  position: relative;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.vue-ui-modal--small {
  width: 400px;
}

.vue-ui-modal--medium {
  width: 600px;
}

.vue-ui-modal--large {
  width: 800px;
}

.vue-ui-modal--fullscreen {
  width: 95vw;
  height: 95vh;
}

.vue-ui-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  color: #6c757d;
  z-index: 10;
  border-radius: 4px;
  transition: all 0.2s;
}

.vue-ui-modal-close:hover {
  background-color: #f8f9fa;
  color: #212529;
}

.vue-ui-modal-header {
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
}

.vue-ui-modal-body {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
}

.vue-ui-modal-footer {
  padding: 20px;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-active .vue-ui-modal,
.modal-leave-active .vue-ui-modal {
  transition: transform 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .vue-ui-modal,
.modal-leave-to .vue-ui-modal {
  transform: scale(0.9);
}
</style>

