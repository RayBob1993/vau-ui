<script lang="ts" setup>
  import type { IVInputPasswordProps } from './types';
  import { VInput } from '../Input';

  defineProps<IVInputPasswordProps>();
</script>

<template>
  <v-input class="v-input-password"/>
</template>
