<script lang="ts" setup>
  import type { IVInputMaskProps } from './types';
  import { VInput } from '../Input';

  defineProps<IVInputMaskProps>();
</script>

<template>
  <VInput
    ref="input"
    class="v-input-mask"
  />
</template>
