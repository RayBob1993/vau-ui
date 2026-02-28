<script setup lang="ts">
  import type { ModalEmits, ModalProps } from './types';
  import { ModalRootContextKey } from './context';
  import { useModalRoot } from './composables';
  import { provide } from 'vue';

  const props = defineProps<ModalProps>();
  const emit = defineEmits<ModalEmits>();

  const modelValue = defineModel<boolean>({
    required: true
  });

  const { close } = useModalRoot({
    modelValue: () => modelValue.value,
    props: () => props,
    onClose: () => {
      modelValue.value = false;
    }
  });

  provide(ModalRootContextKey, {
    close
  });
</script>

<template>
  <div class="modal">
    <slot/>
  </div>
</template>
