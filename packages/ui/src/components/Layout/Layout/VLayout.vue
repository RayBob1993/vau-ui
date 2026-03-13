<script setup lang="ts">
  import { Layout, type LayoutSlots } from '@vau/core';

  const slots = defineSlots<LayoutSlots>();
</script>

<template>
  <Layout.Root>
    <template
      v-if="slots?.header"
      #header
    >
      <slot name="header"/>
    </template>

    <Layout.Body>
      <slot/>
    </Layout.Body>

    <template
      v-if="slots?.footer"
      #footer
    >
      <slot name="footer"/>
    </template>
  </Layout.Root>
</template>
