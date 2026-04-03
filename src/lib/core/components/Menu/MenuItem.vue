<script setup lang="ts">
  import type { MenuItemProps } from './types';
  import { Primitive } from '../Primitive';

  withDefaults(defineProps<MenuItemProps>(), {
    as: 'div'
  });
</script>

<template>
  <Primitive.Root
    class="menu-item"
    :class="{
      'menu-item--active': active,
      'menu-item--disabled': disabled
    }"
    :as="as"
    :as-child="asChild"
  >
    <slot/>
  </Primitive.Root>
</template>
