<script lang="ts" setup>
  const isVisible = defineModel<boolean>('visible', {
    required: true
  });
</script>

<template>
  <div
    v-show="isVisible"
    class="v-drawer"
    role="dialog"
  >
    <div class="v-drawer__dialog">
      <div class="v-drawer__header">
        <slot name="header"/>
      </div>

      <div class="v-drawer__body">
        <slot/>
      </div>

      <div class="v-drawer__footer">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>
