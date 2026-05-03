# Button

`Button` — примитив кнопки из слоя **core** с поддержкой состояний `loading`/`disabled`, темизации и размеров.

## Анатомия

- `Button.Root` — основная кнопка.
- `Button.Group` — контейнер для группировки кнопок (например, горизонтально/вертикально).

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Group>
    <Button.Root/>
  </Button.Group>
</template>
```

## Базовое использование

<v-preview path="examples/core/button/ButtonBase.vue" />


## Состояние блокировки

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root theme="base" size="medium" disabled>
    Кнопка
  </Button.Root>
</template>
```

## Состояние загрузки

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root theme="base" size="medium" loading>
    Отправка
  </Button.Root>
</template>
```

## Темы

Доступные значения `theme`: `base`, `primary`, `secondary`, `tertiary`, `danger`, `success`, `warning`.

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root theme="base" size="medium">Base</Button.Root>
  <Button.Root theme="primary" size="medium">Primary</Button.Root>
  <Button.Root theme="secondary" size="medium">Secondary</Button.Root>
  <Button.Root theme="tertiary" size="medium">Tertiary</Button.Root>
  <Button.Root theme="danger" size="medium">Danger</Button.Root>
  <Button.Root theme="success" size="medium">Success</Button.Root>
  <Button.Root theme="warning" size="medium">Warning</Button.Root>
</template>
```

## Размеры

Доступные значения `size`: `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`.

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root theme="base" size="mini">Mini</Button.Root>
  <Button.Root theme="base" size="small">Small</Button.Root>
  <Button.Root theme="base" size="medium">Medium</Button.Root>
  <Button.Root theme="base" size="large">Large</Button.Root>
  <Button.Root theme="base" size="big">Big</Button.Root>
  <Button.Root theme="base" size="huge">Huge</Button.Root>
  <Button.Root theme="base" size="massive">Massive</Button.Root>
</template>
```

Для адаптивных размеров можно использовать `sizeXs`, `sizeSm`, `sizeMd`, `sizeLg`, `sizeXl`, `sizeXxl`.

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root theme="base" size="mini" size-xs="large">Mini</Button.Root>
  <Button.Root theme="base" size="small" size-md="medium">Small</Button.Root>
  <Button.Root theme="base" size="medium" size-lg="large">Medium</Button.Root>
  <Button.Root theme="base" size="large" size-md="small">Large</Button.Root>
  <Button.Root theme="base" size="big" size-xxl="mini">Big</Button.Root>
  <Button.Root theme="base" size="huge" size-sm="small">Huge</Button.Root>
  <Button.Root theme="base" size="massive" size-md="medium">Massive</Button.Root>
</template>
```

## Plain

`plain` включает «плоский» вариант отображения кнопки.

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root theme="base" size="medium" plain>
    Плоская кнопка
  </Button.Root>
</template>
```

## Rounded

`rounded` включает «закруглённые углы» для отображения кнопки.

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root theme="base" size="medium" rounded>
    Закруглённая кнопка
  </Button.Root>
</template>
```

## Wide

`wide` растягивает кнопку по ширине контейнера.

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root theme="base" size="medium" wide>
    Кнопка на всю ширину
  </Button.Root>
</template>
```

## asChild

`asChild` позволяет рендерить кнопку через дочерний элемент. Например, можно использовать тег `a`.

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root theme="base" size="medium" as-child>
    <a href="https://github.com/RayBob1993/vau" target="_blank" rel="noreferrer">
      Открыть репозиторий
    </a>
  </Button.Root>
</template>
```

Итоговая разметка в DOM:

```html
<a
  href="https://github.com/RayBob1993/vau"
  target="_blank"
  rel="noreferrer"
  class="button button--theme-base button--size-medium"
  tabindex="0"
>
  Открыть репозиторий
</a>
```

## Вместе с иконками

```vue
<script setup lang="ts">
  import { Button } from 'vau';
  import { UserRound } from '@lucide/vue';
</script>

<template>
  <Button.Root theme="base" size="medium" wide>
    <UserRound /> 
    
    Кнопка с иконкой
  </Button.Root>
</template>
```

## Button.Group

`Button.Group` объединяет несколько компонентов `Button.Root`, применяя согласованные стили, отступы и автоматическую обработку радиуса границы по краям группы.

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Group direction="horizontal">
    <Button.Root theme="base" size="medium">
      Слева
    </Button.Root>
    <Button.Root theme="base" size="medium">
      По центру
    </Button.Root>
    <Button.Root theme="base" size="medium">
      Справа
    </Button.Root>
  </Button.Group>

  <Button.Group direction="vertical">
    <Button.Root theme="base" size="medium">
      Сверху
    </Button.Root>
    <Button.Root theme="base" size="medium">
      По центру
    </Button.Root>
    <Button.Root theme="base" size="medium">
      Снизу
    </Button.Root>
  </Button.Group>
</template>
```

## Button API

### Button.Root Props

| Имя        | Описание                                                                      | Тип                                                                                      | Дефолтное значение |
|------------|-------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|--------------------|
| `loading`  | Показывает спиннер (`Spinner.Root`) и переводит кнопку в неактивное состояние | `boolean`                                                                                | `false`            |
| `disabled` | Явно отключает кнопку                                                         | `boolean`                                                                                | `false`            |
| `plain`    | Включает «плоский» визуальный вариант                                         | `boolean`                                                                                | `false`            |
| `wide`     | Растягивает кнопку по ширине                                                  | `boolean`                                                                                | `false`            |
| `type`     | HTML-тип кнопки                                                               | `'button' \| 'submit' \| 'reset'`                                                        | `'button'`         |
| `as`       | Тег или компонент для рендера корневого узла `Primitive.Root`                 | `keyof HTMLElementTagNameMap \| Component`                                               | `'button'`         |
| `asChild`  | Рендер без собственного тега (через slot-контейнер `Primitive`)               | `boolean`                                                                                | `false`            |
| `theme`    | Тема оформления                                                               | `'base' \| 'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'success' \| 'warning'` | `—`                |
| `size`     | Базовый размер                                                                | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |
| `sizeXs`   | Размер для брейкпоинта `xs`                                                   | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |
| `sizeSm`   | Размер для брейкпоинта `sm`                                                   | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |
| `sizeMd`   | Размер для брейкпоинта `md`                                                   | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |
| `sizeLg`   | Размер для брейкпоинта `lg`                                                   | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |
| `sizeXl`   | Размер для брейкпоинта `xl`                                                   | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |
| `sizeXxl`  | Размер для брейкпоинта `xxl`                                                  | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |

**Примечание:** фактическое `isDisabled` вычисляется из `Form`/`FormItem` контекста, `disabled` и `loading`.

### Button.Root Slots

| Имя       | Описание                                            |
|-----------|-----------------------------------------------------|
| `default` | Контент кнопки (текст, иконка, произвольный шаблон) |

## Button.Group API

### ButtonGroup Props

| Имя         | Описание                                 | Тип                          | Дефолтное значение |
|-------------|------------------------------------------|------------------------------|--------------------|
| `direction` | Направление расположения кнопок в группе | `'horizontal' \| 'vertical'` | `—`                |

### ButtonGroup Slots

| Имя       | Описание                                         |
|-----------|--------------------------------------------------|
| `default` | Вложенные элементы группы (обычно `Button.Root`) |
