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


## Disabled

<v-preview path="examples/core/button/ButtonDisabled.vue" />

## Loading

<v-preview path="examples/core/button/ButtonLoading.vue" />

## Theme

Доступные значения `theme`: `base`, `primary`, `secondary`, `tertiary`, `danger`, `success`, `warning`.

<v-preview path="examples/core/button/ButtonTheme.vue" />

## Size

Доступные значения `size`: `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`.

<v-preview path="examples/core/button/ButtonSize.vue" />

Для адаптивных размеров можно использовать `sizeXs`, `sizeSm`, `sizeMd`, `sizeLg`, `sizeXl`, `sizeXxl`.

<v-preview path="examples/core/button/ButtonSizeResponse.vue" />

## Plain

`plain` включает «плоский» вариант отображения кнопки.

<v-preview path="examples/core/button/ButtonPlain.vue" />

## Rounded

`rounded` включает «закруглённые углы» для отображения кнопки.

<v-preview path="examples/core/button/ButtonRounded.vue" />

## Square

`square` отключает закругление у кнопки.

<v-preview path="examples/core/button/ButtonSquare.vue" />

## Wide

`wide` растягивает кнопку по ширине контейнера.

<v-preview path="examples/core/button/ButtonWide.vue" />

## asChild

`asChild` позволяет рендерить кнопку через дочерний элемент. Например, можно использовать тег `a`.

<v-preview path="examples/core/button/ButtonAsChild.vue" />

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

<v-preview path="examples/core/button/ButtonWithIcon.vue" />

## Button.Group

`Button.Group` объединяет несколько компонентов `Button.Root`, применяя согласованные стили, отступы и автоматическую обработку радиуса границы по краям группы.

<v-preview path="examples/core/button/ButtonGroup.vue" />

## Button API

### Button.Root Props

| Имя        | Описание                                                                                                              | Тип                                                                                      | Дефолтное значение |
|------------|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|--------------------|
| `loading`  | Показывает спиннер (`Spinner.Root`) и переводит кнопку в неактивное состояние                                         | `boolean`                                                                                | `false`            |
| `disabled` | Явно отключает кнопку                                                                                                 | `boolean`                                                                                | `false`            |
| `plain`    | Включает «плоский» визуальный вариант                                                                                 | `boolean`                                                                                | `false`            |
| `wide`     | Растягивает кнопку по ширине                                                                                          | `boolean`                                                                                | `false`            |
| `type`     | HTML-тип кнопки. Подробнее на [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#type) | `'button' \| 'submit' \| 'reset'`                                                        | `'button'`         |
| `as`       | Тег или компонент для рендера корневого узла `Primitive.Root`                                                         | `keyof HTMLElementTagNameMap \| Component`                                               | `'button'`         |
| `asChild`  | Рендер без собственного тега (через slot-контейнер `Primitive`)                                                       | `boolean`                                                                                | `false`            |
| `theme`    | Тема оформления                                                                                                       | `'base' \| 'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'success' \| 'warning'` | `—`                |
| `size`     | Базовый размер                                                                                                        | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |
| `sizeXs`   | Размер для брейкпоинта `xs`                                                                                           | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |
| `sizeSm`   | Размер для брейкпоинта `sm`                                                                                           | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |
| `sizeMd`   | Размер для брейкпоинта `md`                                                                                           | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |
| `sizeLg`   | Размер для брейкпоинта `lg`                                                                                           | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |
| `sizeXl`   | Размер для брейкпоинта `xl`                                                                                           | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |
| `sizeXxl`  | Размер для брейкпоинта `xxl`                                                                                          | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'`               | `—`                |

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
