<script setup lang="ts">
  import { Menu, type MenuLinkProps } from '@vau/core';

  withDefaults(defineProps<MenuLinkProps>(), {
    as: 'a'
  });
</script>

<template>
  <Menu.Link
    :as="as"
    :as-child="asChild"
  >
    <slot/>
  </Menu.Link>
</template>
