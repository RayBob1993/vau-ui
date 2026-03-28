<script setup lang="ts">
  import type { MenuLinkProps } from './types';
  import { Primitive } from '../Primitive';

  withDefaults(defineProps<MenuLinkProps>(), {
    as: 'a'
  });
</script>

<template>
  <Primitive.Root
    class="menu-link"
    :as="as"
    :as-child="asChild"
  >
    <slot/>
  </Primitive.Root>
</template>
