import type { App } from 'vue'
import './style.css'

import Button from './components/Button/Button.vue'
import Input from './components/Input/Input.vue'
import Modal from './components/Modal/Modal.vue'

export * from './types'

const components = {
  Button,
  Input,
  Modal,
}

export function install(_app: App) {
  Object.keys(components).forEach((_key) => {
    const component = components[_key as keyof typeof components]
    _app.component(component.name || _key, component)
  })
}

export { Button, Input, Modal }

export default {
  install,
}

