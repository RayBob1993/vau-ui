# Начало работы

Краткий старт с npm-пакетом **`vau`**. Раздел будет расширяться по мере публикации и стабилизации API.

## Установка

::: code-group

```shell [pnpm]
$ pnpm install vau
```

```shell [npm]
$ npm install vau --save
```

```shell [yarn]
$ yarn add vau
```

:::

## Требования

В `package.json` библиотеки указаны **peer-зависимости** (их нужно иметь в приложении), в частности **Vue 3** и **zod** — версии см. в репозитории в поле `peerDependencies`.

## Импорт

API примитивов и виджетов импортируется из одного пакета:

```ts
import { Button, VButton } from 'vau';
```

Слои **Core** и **UI** подробнее: [Core](core/index.md), [UI](ui/index.md).

## Стили

Подключите стили ядра, например в точке входа приложения:

```ts
import 'vau/styles';
```

Дополнительные entry (`config`, `mixins`) перечислены в `exports` пакета `vau` в `package.json`.
