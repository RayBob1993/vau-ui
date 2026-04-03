<script setup lang="ts">
  import { Menu, type MenuItemProps } from '@vau/core';

  const {
    as = 'div',
    ...menuItemProps
  } = defineProps<MenuItemProps>();
</script>

<template>
  <Menu.Item
    v-bind="menuItemProps"
    :as="as"
  >
    <slot/>
  </Menu.Item>
</template>
