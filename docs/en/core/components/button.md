# Button

`Button` is a **core** primitive with `loading`/`disabled` states, theming, and size support.

## Component parts

- `Button.Root` - main button primitive.
- `Button.Group` - wrapper to group buttons (for example horizontal/vertical layouts).

## Anatomy

Template structure example:

```vue
<Button.Group direction="horizontal">
  <Button.Root>Back</Button.Root>
  <Button.Root theme="primary">Save</Button.Root>
</Button.Group>
```

## Import

```ts
import { Button } from 'vau';
```

## Basic usage

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root theme="primary" size="md">
    Save
  </Button.Root>
</template>
```

Rendered DOM markup:

```html
<button class="button button--theme-primary button--size-md" type="button" tabindex="0">
  Save
</button>
```

## Loading state

```vue
<Button.Root :loading="true">
  Submitting
</Button.Root>
```

## Themes

Available `theme` values: `base`, `primary`, `secondary`, `tertiary`, `danger`, `success`, `warning`.

```vue
<script setup lang="ts">
  import { Button } from 'vau';
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

## Sizes

Available `size` values: `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`.

```vue
<script setup lang="ts">
  import { Button } from 'vau';
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

For responsive sizing, use `sizeXs`, `sizeSm`, `sizeMd`, `sizeLg`, `sizeXl`, and `sizeXxl`.

## Plain

`plain` enables a flat visual style for the button.

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root plain>
    Plain button
  </Button.Root>
</template>
```

## Wide

`wide` stretches the button to the container width.

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root wide>
    Wide button
  </Button.Root>
</template>
```

## asChild

`asChild` lets you render the button through a child element. For example, with an `a` tag.

```vue
<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root as-child>
    <a href="https://github.com/RayBob1993/vau" target="_blank" rel="noreferrer">
      Open repository
    </a>
  </Button.Root>
</template>
```

Rendered DOM markup:

```html
<a
  href="https://github.com/RayBob1993/vau"
  target="_blank"
  rel="noreferrer"
  class="button"
  tabindex="0"
>
  Open repository
</a>
```

## Button API

### Button.Root props

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `loading` | Shows `Spinner.Root` and puts the button into inactive state | `boolean` | `false` |
| `disabled` | Explicitly disables the button | `boolean` | `false` |
| `plain` | Enables plain visual style | `boolean` | `false` |
| `wide` | Stretches button width | `boolean` | `false` |
| `type` | HTML button type | `'button' \| 'submit' \| 'reset'` | `'button'` |
| `as` | Tag or component rendered by `Primitive.Root` | `keyof HTMLElementTagNameMap \| Component` | `'button'` |
| `asChild` | Renders without own tag via Primitive slot behavior | `boolean` | `false` |
| `theme` | Visual theme | `'base' \| 'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'success' \| 'warning'` | `—` |
| `size` | Base size | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |
| `sizeXs` | Size for `xs` breakpoint | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |
| `sizeSm` | Size for `sm` breakpoint | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |
| `sizeMd` | Size for `md` breakpoint | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |
| `sizeLg` | Size for `lg` breakpoint | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |
| `sizeXl` | Size for `xl` breakpoint | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |
| `sizeXxl` | Size for `xxl` breakpoint | `'mini' \| 'small' \| 'medium' \| 'large' \| 'big' \| 'huge' \| 'massive'` | `—` |

**Note:** actual `isDisabled` is computed from `Form`/`FormItem` context, `disabled`, and `loading`.

### Button.Root slots

| Name | Description |
| --- | --- |
| `default` | Button content (text, icon, or custom markup) |

### Button.Group props

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `direction` | Layout direction for buttons in group | `'horizontal' \| 'vertical'` | `—` |

### Button.Group slots

| Name | Description |
| --- | --- |
| `default` | Group children (usually `Button.Root`) |

## Source

- [`src/lib/core/components/Button/index.ts`](https://github.com/RayBob1993/vau/tree/main/src/lib/core/components/Button/index.ts)
- [`src/lib/core/components/Button/ButtonRoot.vue`](https://github.com/RayBob1993/vau/tree/main/src/lib/core/components/Button/ButtonRoot.vue)
- [`src/lib/core/components/Button/ButtonGroup.vue`](https://github.com/RayBob1993/vau/tree/main/src/lib/core/components/Button/ButtonGroup.vue)
