import type { App } from 'vue'
import './style.css'

// Components
import Button from './components/Button/Button.vue'
import Input from './components/Input/Input.vue'
import Modal from './components/Modal/Modal.vue'

// Types
export * from './types'

// Components list
const components = {
  Button,
  Input,
  Modal,
}

// Install function
export function install(_app: App) {
  Object.keys(components).forEach((_key) => {
    const component = components[_key as keyof typeof components]
    _app.component(component.name || _key, component)
  })
}

// Export all components
export { Button, Input, Modal }

// Default export
export default {
  install,
}

