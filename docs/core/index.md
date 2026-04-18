# Core

Слой **core** npm-пакета **`vau`** — примитивы «headless» и общая логика библиотеки: составные компоненты (compound API), composables, утилиты, типы и константы.

## Назначение

- **Compound components** — каждый примитив экспортируется как объект с частями (`Root`, `Item`, `Trigger` и т.д.), которые собираются в шаблоне.
- **Composables** принимают явный контракт опций (`Use*Options`) без скрытых глобальных зависимостей — так проще тестировать и сочетать части.
- **Стили** подключаются отдельно (например entry `vau/styles`), сами примитивы задают разметку и поведение.

## Импорт

```ts
import { Button, Form, Accordion } from 'vau';
```

## Разделы

- [Компоненты](components/)
- [Composables](composables/)
- [Утилиты](utils/)
- [Директивы](directives/)
- [Константы](constants/)
- [Типы](types/)

## Исходный код

Каталог в репозитории: [`src/lib/core/`](https://github.com/RayBob1993/vau/tree/main/src/lib/core).
