<script lang="ts" setup>
  import { Scrollbar } from '../Scrollbar';
</script>

<template>
  <div class="drawer-body">
    <Scrollbar.Root class="drawer-body__scrollbar">
      <slot/>
    </Scrollbar.Root>
  </div>
</template>
