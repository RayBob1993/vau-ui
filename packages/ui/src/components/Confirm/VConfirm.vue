<script setup lang="ts">
  import type { IVConfirmProps, IVConfirmEmits } from './types';
  import { VOverlay } from '../Overlay';

  withDefaults(defineProps<IVConfirmProps>(), {
    confirmText: 'Ок',
    cancelText: 'Отмена'
  });

  const emit = defineEmits<IVConfirmEmits>();
</script>

<template>
  <v-overlay>
    <div
      class="v-confirm"
      :class="{
        [`v-confirm--size-${size}`]: size,
        [`v-confirm--theme-${theme}`]: theme
      }"
    >
      <div class="v-confirm__header">
        <div class="v-confirm__title">
          {{ title }}
        </div>

        <button
          type="button"
          @click="emit('close')"
        >
          X
        </button>
      </div>

      <div class="v-confirm__body">
        {{ message }}
      </div>

      <div class="v-confirm__footer">
        <button
          type="button"
          @click="emit('success')"
        >
          {{ confirmText }}
        </button>

        <button
          type="button"
          @click="emit('cancel')"
        >
          {{ cancelText }}
        </button>
      </div>
    </div>
  </v-overlay>
</template>
