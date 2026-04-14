# Button

`Button` — примитив кнопки из слоя **core** с поддержкой состояний `loading`/`disabled`, темизации и размеров.

## Анатомия

- `Button.Root` — основная кнопка.
- `Button.Group` — контейнер для группировки кнопок (например, горизонтально/вертикально).

```vue
<script setup lang="ts">
  import { Button } from 'vau-ui';
</script>

<template>
  <Button.Group>
    <Button.Root/>
  </Button.Group>
</template>
```

## Базовое использование

```vue
<script setup lang="ts">
  import { Button } from 'vau-ui';
</script>

<template>
  <Button.Root theme="primary" size="md">
    Сохранить
  </Button.Root>
</template>
```

Итоговая разметка в DOM:

```html
<button class="button button--theme-primary button--size-md" type="button" tabindex="0">
  Сохранить
</button>
```

## Состояние блокировки

```vue
<script setup lang="ts">
  import { Button } from 'vau-ui';
</script>

<template>
  <Button.Root disabled>
    Кнопка
  </Button.Root>
</template>
```

## Состояние загрузки

```vue
<script setup lang="ts">
  import { Button } from 'vau-ui';
</script>

<template>
  <Button.Root loading>
    Отправка
  </Button.Root>
</template>
```

## Темы

Доступные значения `theme`: `base`, `primary`, `secondary`, `tertiary`, `danger`, `success`, `warning`.

```vue
<script setup lang="ts">
  import { Button } from 'vau-ui';
</script>

<template>
  <Button.Root theme="base">Base</Button.Root>
  <Button.Root theme="primary">Primary</Button.Root>
  <Button.Root theme="secondary">Secondary</Button.Root>
  <Button.Root theme="tertiary">Tertiary</Button.Root>
  <Button.Root theme="danger">Danger</Button.Root>
  <Button.Root theme="success">Success</Button.Root>
  <Button.Root theme="warning">Warning</Button.Root>
</template>
```

## Размеры

Доступные значения `size`: `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`.

```vue
<script setup lang="ts">
  import { Button } from 'vau-ui';
</script>

<template>
  <Button.Root size="mini">Mini</Button.Root>
  <Button.Root size="small">Small</Button.Root>
  <Button.Root size="medium">Medium</Button.Root>
  <Button.Root size="large">Large</Button.Root>
  <Button.Root size="big">Big</Button.Root>
  <Button.Root size="huge">Huge</Button.Root>
  <Button.Root size="massive">Massive</Button.Root>
</template>
```

Для адаптивных размеров можно использовать `sizeXs`, `sizeSm`, `sizeMd`, `sizeLg`, `sizeXl`, `sizeXxl`.

## Plain

`plain` включает «плоский» вариант отображения кнопки.

```vue
<script setup lang="ts">
  import { Button } from 'vau-ui';
</script>

<template>
  <Button.Root plain>
    Кнопка
  </Button.Root>
</template>
```

## Wide

`wide` растягивает кнопку по ширине контейнера.

```vue
<script setup lang="ts">
  import { Button } from 'vau-ui';
</script>

<template>
  <Button.Root wide>
    Кнопка
  </Button.Root>
</template>
```

## asChild

`asChild` позволяет рендерить кнопку через дочерний элемент. Например, можно использовать тег `a`.

```vue
<script setup lang="ts">
  import { Button } from 'vau-ui';
</script>

<template>
  <Button.Root theme="base" size="md" as-child>
    <a href="https://github.com/RayBob1993/vau-ui" target="_blank" rel="noreferrer">
      Открыть репозиторий
    </a>
  </Button.Root>
</template>
```

Итоговая разметка в DOM:

```html
<a
  href="https://github.com/RayBob1993/vau-ui"
  target="_blank"
  rel="noreferrer"
  class="button button--theme-base button--size-md"
  tabindex="0"
>
  Открыть репозиторий
</a>
```

## Button API

### Button.Root Props

| Имя | Описание | Тип | Дефолтное значение |
| --- | --- | --- | --- |
| `loading` | Показывает спиннер (`Spinner.Root`) и переводит кнопку в неактивное состояние | `boolean` | `false` |
| `disabled` | Явно отключает кнопку | `boolean` | `false` |
| `plain` | Включает «плоский» визуальный вариант | `boolean` | `false` |
| `wide` | Растягивает кнопку по ширине | `boolean` | `false` |
| `type` | HTML-тип кнопки | `'button' \| 'submit' \| 'reset'` | `'button'` |
| `as` | Тег или компонент для рендера корневого узла `Primitive.Root` | `keyof HTMLElementTagNameMap \| Component` | `'button'` |
| `asChild` | Рендер без собственного тега (через slot-контейнер `Primitive`) | `boolean` | `false` |
| `theme` | Тема оформления | `'base' \| 'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'success' \| 'warning'` | `—` |
| `size` | Базовый размер | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |
| `sizeXs` | Размер для брейкпоинта `xs` | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |
| `sizeSm` | Размер для брейкпоинта `sm` | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |
| `sizeMd` | Размер для брейкпоинта `md` | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |
| `sizeLg` | Размер для брейкпоинта `lg` | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |
| `sizeXl` | Размер для брейкпоинта `xl` | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |
| `sizeXxl` | Размер для брейкпоинта `xxl` | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |

**Примечание:** фактическое `isDisabled` вычисляется из `Form`/`FormItem` контекста, `disabled` и `loading`.

### Button.Root Slots

| Имя | Описание |
| --- | --- |
| `default` | Контент кнопки (текст, иконка, произвольный шаблон) |

## Button.Group API

### ButtonGroup Props

| Имя | Описание | Тип | Дефолтное значение |
| --- | --- | --- | --- |
| `direction` | Направление расположения кнопок в группе | `'horizontal' \| 'vertical'` | `—` |

### ButtonGroup Slots

| Имя | Описание |
| --- | --- |
| `default` | Вложенные элементы группы (обычно `Button.Root`) |
