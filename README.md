# VauUI

## Системные требования

* [Node.js](https://nodejs.org/en/download/package-manager) >= 22.17.1
* [pnpm](https://pnpm.io/installation) >= 10.30.3

## Установка

```bash
pnpm add vau-ui
```
```bash
npm install vau-ui
```
```bash
yarn add vau-ui
```

## Подсказки типов в IDE (глобальные компоненты)

Если компоненты регистрируются глобально через плагин и редактор не подсказывает пропсы, добавьте в проект файл типов (например `env.d.ts` или `types/vau-ui.d.ts`):

```ts
/// <reference types="vau-ui/vue-global" />

declare module 'vue' {
  export interface GlobalComponents extends import('vau-ui/vue-global').VauUIGlobalComponents {}
}
```

После этого Volar/TypeScript будут знать типы компонентов в шаблонах.

## Локальная разработка

### Установка зависимостей
``` bash
pnpm install
```

### Запуск локального сервера
``` bash
pnpm serve
```

### Создание билда
``` bash
pnpm build
```

## 🪛 Инструменты

### Линтинг кода
``` bash
$ pnpm lint
```

### Тесты
``` bash
$ pnpm test
```
