<script setup lang="ts">
  import { Menu, type MenuProps } from '@vau/core';

  const props = defineProps<MenuProps>();
</script>

<template>
  <Menu.Root v-bind="props">
    <slot/>
  </Menu.Root>
</template>
