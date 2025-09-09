<script lang="ts" setup>
  const isVisible = defineModel<boolean>('visible', {
    required: true
  });
</script>

<template>
  <div
    v-show="isVisible"
    class="v-dialog"
    role="dialog"
  >
    <div class="v-dialog__header">
      <slot name="header"/>
    </div>

    <div class="v-dialog__body">
      <slot/>
    </div>

    <div class="v-dialog__footer">
      <slot name="footer"/>
    </div>
  </div>
</template>
