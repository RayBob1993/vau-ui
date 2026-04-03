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

## Стили (SCSS)

Точка входа: `vau-ui/styles` ([`src/lib/styles/core/index.scss`](src/lib/styles/core/index.scss)). Отдельно доступен модуль настроек: `vau-ui/styles/config` ([`src/lib/styles/core/config.scss`](src/lib/styles/core/config.scss)).

### Переменные в `config.scss`

- **Отступы:** `$space-step`, `$space-max` — генерация utility-классов `.m-t-*`, `.m-l-*` и т.д.
- **Брейкпоинты:** `$xs`, `$sm`, `$md`, `$lg`, `$xl`, `$xxl` — минимальные ширины для миксинов в [`mixins/media.scss`](src/lib/styles/core/mixins/media.scss) (`media-*-up` / `media-*-down`).

Значения по умолчанию — в [`config.scss`](src/lib/styles/core/config.scss). Переопределение — один раз **до** импорта основного входа (первый `@use` модуля `config` с `with` задаёт конфиг для всей цепочки):

```scss
@use 'vau-ui/styles/config' with (
  $space-max: 48,
  $xl: 1200px
);
@use 'vau-ui/styles';
```

Рост `$space-max` линейно увеличивает объём utility CSS по отступам (число брейкпоинтов × направления × число шагов). Смена брейкпоинтов меняет условия в `@media`, не добавляя селекторы.

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
