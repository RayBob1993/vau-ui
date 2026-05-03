# Drawer

## Анатомия

```vue
<script setup lang="ts">
  import { Drawer } from 'vau';
</script>

<template>
  <Drawer.Root>
    <Drawer.Dialog>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title/>
          <Drawer.Close/>
        </Drawer.Header>
        
        <Drawer.Body/>
        
        <Drawer.Footer/>
      </Drawer.Content>
    </Drawer.Dialog>
  </Drawer.Root>
</template>
```

## Базовое использование

<v-preview path="examples/core/drawer/DrawerBase.vue" />

## Position

<v-preview path="examples/core/drawer/DrawerPosition.vue" />
