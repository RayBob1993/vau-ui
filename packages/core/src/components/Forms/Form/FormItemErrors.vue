<script lang="ts" setup>
  import type { FormItemError } from './types';
  import { useFormItemContext } from './context';
  import { computed } from 'vue';

  const FormItemContext = useFormItemContext();

  const errors = computed<Array<FormItemError>>(() => FormItemContext?.validationErrors.value ?? []);
</script>

<template>
  <div class="form-item-errors">
    <div
      v-for="(error, index) in errors"
      :key="`error-${index}`"
      class="form-item-errors__item"
    >
      {{ error.message }}
    </div>
  </div>
</template>
