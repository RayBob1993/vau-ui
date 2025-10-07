<script lang="ts" setup>
  import type { IVInputMaskProps } from './types';
  import { VInput } from '../Input';

  defineProps<IVInputMaskProps>();
</script>

<template>
  <v-input
    ref="input"
    class="v-input-mask"
  />
</template>
