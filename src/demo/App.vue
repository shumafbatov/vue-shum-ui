<template>
  <div class="demo-app">
    <header class="demo-header">
      <h1>Vue Shum UI</h1>
      <p>Библиотека UI компонентов для Vue 3 + TypeScript</p>
    </header>

    <nav class="demo-nav">
      <a href="#button" @click.prevent="scrollTo('button')">Button</a>
      <a href="#input" @click.prevent="scrollTo('input')">Input</a>
      <a href="#modal" @click.prevent="scrollTo('modal')">Modal</a>
    </nav>

    <main class="demo-main">
      <section id="button" class="demo-section">
        <h2>Button</h2>
        <p class="demo-description">Кнопка с различными вариантами, размерами и состояниями.</p>
        
        <div class="demo-example">
          <h3>Варианты</h3>
          <div class="demo-buttons">
            <Button variant="primary" size="medium">Primary</Button>
            <Button variant="secondary" size="medium">Secondary</Button>
            <Button variant="danger" size="medium">Danger</Button>
            <Button variant="ghost" size="medium">Ghost</Button>
          </div>
        </div>

        <div class="demo-example">
          <h3>Размеры</h3>
          <div class="demo-buttons">
            <Button variant="primary" size="small">Small</Button>
            <Button variant="primary" size="medium">Medium</Button>
            <Button variant="primary" size="large">Large</Button>
          </div>
        </div>

        <div class="demo-example">
          <h3>Состояния</h3>
          <div class="demo-buttons">
            <Button variant="primary" size="medium" :loading="true">Loading</Button>
            <Button variant="primary" size="medium" :disabled="true">Disabled</Button>
            <Button variant="primary" size="medium" @click="handleButtonClick">Click me</Button>
          </div>
        </div>

        <div class="demo-code">
          <h3>Пример кода</h3>
          <pre><code>&lt;Button variant="primary" size="medium" :loading="false"&gt;
  Click me
&lt;/Button&gt;</code></pre>
        </div>
      </section>

      <section id="input" class="demo-section">
        <h2>Input</h2>
        <p class="demo-description">Поле ввода с поддержкой валидации и различных состояний.</p>
        
        <div class="demo-example">
          <h3>Базовое использование</h3>
          <div class="demo-inputs">
            <Input v-model="inputValue" placeholder="Enter text" />
            <p class="demo-value">Значение: {{ inputValue || '(пусто)' }}</p>
          </div>
        </div>

        <div class="demo-example">
          <h3>Состояния</h3>
          <div class="demo-inputs">
            <Input v-model="inputValue" placeholder="Normal state" />
            <Input v-model="inputValue" :error="true" placeholder="Error state" />
            <Input v-model="inputValue" :success="true" placeholder="Success state" />
            <Input v-model="inputValue" :disabled="true" placeholder="Disabled state" />
          </div>
        </div>

        <div class="demo-example">
          <h3>Типы</h3>
          <div class="demo-inputs">
            <Input v-model="emailValue" type="email" placeholder="Email" />
            <Input v-model="passwordValue" type="password" placeholder="Password" />
            <Input v-model="numberValue" type="number" placeholder="Number" />
          </div>
        </div>

        <div class="demo-code">
          <h3>Пример кода</h3>
          <pre><code>&lt;Input
  v-model="value"
  type="text"
  placeholder="Enter text"
  :error="false"
/&gt;</code></pre>
        </div>
      </section>

      <section id="modal" class="demo-section">
        <h2>Modal</h2>
        <p class="demo-description">Модальное окно с различными размерами и возможностью кастомизации.</p>
        
        <div class="demo-example">
          <h3>Размеры</h3>
          <div class="demo-buttons">
            <Button @click="openModal('small')">Small Modal</Button>
            <Button @click="openModal('medium')">Medium Modal</Button>
            <Button @click="openModal('large')">Large Modal</Button>
            <Button @click="openModal('fullscreen')">Fullscreen Modal</Button>
          </div>
        </div>

        <Modal v-model="showModal" :size="modalSize">
          <template #header>
            <h3>Modal Title - {{ modalSize }}</h3>
          </template>
          <div>
            <p>Это пример модального окна размера <strong>{{ modalSize }}</strong>.</p>
            <p>Вы можете закрыть его, нажав на кнопку ниже, кликнув вне модалки или нажав ESC.</p>
          </div>
          <template #footer>
            <Button variant="secondary" @click="showModal = false">Cancel</Button>
            <Button variant="primary" @click="showModal = false">Confirm</Button>
          </template>
        </Modal>

        <div class="demo-code">
          <h3>Пример кода</h3>
          <pre><code>&lt;Modal v-model="isOpen" size="medium" :closable="true"&gt;
  &lt;template #header&gt;
    &lt;h3&gt;Modal Title&lt;/h3&gt;
  &lt;/template&gt;
  &lt;p&gt;Modal content&lt;/p&gt;
  &lt;template #footer&gt;
    &lt;Button @click="isOpen = false"&gt;Close&lt;/Button&gt;
  &lt;/template&gt;
&lt;/Modal&gt;</code></pre>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Input, Modal } from '../index'

const inputValue = ref('')
const emailValue = ref('')
const passwordValue = ref('')
const numberValue = ref('')
const showModal = ref(false)
const modalSize = ref<'small' | 'medium' | 'large' | 'fullscreen'>('medium')

const openModal = (_size: 'small' | 'medium' | 'large' | 'fullscreen') => {
  modalSize.value = _size
  showModal.value = true
}

const handleButtonClick = () => {
  alert('Button clicked!')
}

const scrollTo = (_id: string) => {
  const element = document.getElementById(_id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: #f5f5f5;
}

.demo-app {
  min-height: 100vh;
}

.demo-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.demo-header h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

.demo-header p {
  font-size: 18px;
  opacity: 0.9;
}

.demo-nav {
  background: white;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.demo-nav a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.demo-nav a:hover {
  color: #764ba2;
}

.demo-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.demo-section {
  background: white;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.demo-section h2 {
  font-size: 32px;
  margin-bottom: 10px;
  color: #212529;
}

.demo-description {
  color: #6c757d;
  margin-bottom: 30px;
  font-size: 16px;
}

.demo-example {
  margin-bottom: 40px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.demo-example h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #495057;
}

.demo-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.demo-inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
}

.demo-value {
  font-size: 14px;
  color: #6c757d;
  margin-top: 5px;
}

.demo-code {
  margin-top: 40px;
  padding: 20px;
  background: #282c34;
  border-radius: 8px;
}

.demo-code h3 {
  color: #abb2bf;
  margin-bottom: 15px;
  font-size: 16px;
}

.demo-code pre {
  margin: 0;
  overflow-x: auto;
}

.demo-code code {
  color: #abb2bf;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .demo-header h1 {
    font-size: 32px;
  }

  .demo-section {
    padding: 20px;
  }

  .demo-nav {
    flex-direction: column;
    gap: 10px;
  }
}
</style>

