# vue-shum-ui

Библиотека UI компонентов для Vue 3 + TypeScript с демо приложением.

## Установка

```bash
npm install vue-shum-ui
```

## Использование

```typescript
import { createApp } from 'vue'
import VueShumUi from 'vue-shum-ui'
import 'vue-shum-ui/style.css'

const app = createApp(App)
app.use(VueShumUi)
```

Или импортируйте компоненты по отдельности:

```vue
<script setup lang="ts">
import { Button, Input, Modal } from 'vue-shum-ui'
</script>

<template>
  <Button variant="primary" size="medium">Click me</Button>
</template>
```

## Компоненты

### Button
Кнопка с различными вариантами и размерами.

```vue
<Button variant="primary" size="medium" :loading="false">
  Click me
</Button>
```

### Input
Поле ввода с поддержкой валидации.

```vue
<Input
  v-model="value"
  type="text"
  placeholder="Enter text"
  :error="false"
/>
```

### Modal
Модальное окно с различными размерами.

```vue
<Modal v-model="isOpen" size="medium" :closable="true">
  <template #header>
    <h3>Modal Title</h3>
  </template>
  <p>Modal content</p>
  <template #footer>
    <Button @click="isOpen = false">Close</Button>
  </template>
</Modal>
```

## Разработка

```bash
# Установка зависимостей
npm install

# Запуск dev сервера (демо приложение)
npm run dev

# Сборка библиотеки
npm run build:lib

# Сборка демо приложения
npm run build:demo

# Тесты
npm run test

# Линтинг
npm run lint
```

## Демо приложение

В проекте есть демо приложение, демонстрирующее все компоненты:

```bash
npm run dev
```

Демо приложение доступно по адресу `http://localhost:5173`

Онлайн версия: [GitHub Pages](https://shumafbatov.github.io/vue-ui-kit/)

## Публикация

### Управление версиями

Версии управляются автоматически через GitHub Actions:

- **patch** - для исправлений багов (1.0.0 → 1.0.1)
- **minor** - для новых функций (1.0.0 → 1.1.0)
- **major** - для breaking changes (1.0.0 → 2.0.0)

Версия обновляется автоматически при коммитах с префиксами:
- `fix:` или `bugfix:` → patch
- `feat:` или `feature:` → minor
- `BREAKING:` → major

Или вручную через GitHub Actions workflow_dispatch.

### Публикация в npm

После обновления версии пакет автоматически публикуется в npm.

### Деплой демо

Демо приложение автоматически деплоится на GitHub Pages при каждом push в main/master.

## Лицензия

MIT
