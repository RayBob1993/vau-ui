<script setup lang="ts">
  import type { IVToastProps, IVToastEmits } from './types';
  import { useToast } from './composables';
  import { TOAST_DURATION } from './constants';

  const props = withDefaults(defineProps<IVToastProps>(), {
    duration: TOAST_DURATION,
    useHtml: false,
    clearable: true
  });

  const emit = defineEmits<IVToastEmits>();

  const { isVisible, setVisible, startTimer, clearTimer } = useToast(props);
</script>

<template>
  <transition
    name="fade-in-up"
    @after-leave="emit('close')"
  >
    <div
      v-show="isVisible"
      class="v-toast"
      role="alert"
      :class="{
        [`v-toast--size-${size}`]: size,
        [`v-toast--theme-${theme}`]: theme
      }"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="v-toast__header">
        <div class="v-toast__title">
          {{ title }}
        </div>

        <button
          v-if="clearable"
          type="button"
          class="v-toast__button-close"
          @click="setVisible(false)"
        >
          X
        </button>
      </div>

      <div class="v-toast__body">
        <div
          v-if="!useHtml"
          class="v-toast__text"
        >
          {{ message }}
        </div>

        <div
          v-else
          class="v-toast__text"
          v-html="message"
        />
      </div>
    </div>
  </transition>
</template>
