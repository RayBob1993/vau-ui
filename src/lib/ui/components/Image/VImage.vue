<script lang="ts" setup>
  import type { IVImageProps, IVImageEmits } from './types';
  import { useImage } from './composables';
  import { useTemplateRef } from 'vue';

  defineProps<IVImageProps>();
  defineEmits<IVImageEmits>();

  const image = useTemplateRef<HTMLImageElement>('image');
  const root = useTemplateRef<HTMLDivElement>('root');

  const { handleError, handleLoad } = useImage();
</script>

<template>
  <figure
    ref="root"
    class="v-image"
    :class="[
      {
        'v-image--loading': isLoading,
        'v-image--center': center,
        'v-image--loaded': !isError && isLoaded,
        'v-image--error': isError
      }
    ]"
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
