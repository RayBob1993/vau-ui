<script lang="ts" setup>
  import type { IVFormItemErrorsProps } from './types';

  defineProps<IVFormItemErrorsProps>();
</script>

<template>
  <div class="v-form-item-errors">
    <div
      v-for="(error, index) in errors"
      :key="`error-${index}`"
      class="v-form-item-errors__item"
    >
      {{ error.message }}
    </div>
  </div>
</template>
