<script setup lang="ts">
  import type { IVConfirmProps, IVConfirmEmits } from './types';
  import { VOverlay } from '../Overlay';

  withDefaults(defineProps<IVConfirmProps>(), {
    confirmText: 'Ок',
    cancelText: 'Отмена'
  });

  const emit = defineEmits<IVConfirmEmits>();

  function handleCancel () {
    emit('cancel');
  }

  function handleClose () {
    emit('close');
  }

  function handleSuccess () {
    emit('success');
  }
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
        <button
          type="button"
          @click="handleClose"
        >
          X
        </button>

        {{ title }}
      </div>

      <div class="v-confirm__body">
        {{ message }}
      </div>

      <div class="v-confirm__footer">
        <button
          type="button"
          @click="handleSuccess"
        >
          {{ confirmText }}
        </button>

        <button
          type="button"
          @click="handleCancel"
        >
          {{ cancelText }}
        </button>
      </div>
    </div>
  </v-overlay>
</template>
