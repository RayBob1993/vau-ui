<script lang="ts" setup>
  import type { IVImageProps } from './types';
  import { useTemplateRef } from 'vue';

  defineProps<IVImageProps>();

  const image = useTemplateRef<HTMLImageElement>('image');
  const root = useTemplateRef<HTMLDivElement>('root');
</script>

<template>
  <figure
    ref="root"
    class="v-image"
  >
    <picture>
      <img
        ref="image"
        class="v-image__native"
        alt=""
      >
    </picture>
  </figure>
</template>
