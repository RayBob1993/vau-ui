<script setup lang="ts">
  import { Menu, type MenuItemProps } from '@vau/core';

  withDefaults(defineProps<MenuItemProps>(), {
    as: 'div'
  });
</script>

<template>
  <Menu.Item
    :as="as"
    :as-child="asChild"
  >
    <slot/>
  </Menu.Item>
</template>
