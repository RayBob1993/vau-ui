<script setup lang="ts">
  import type { ModalEmits, ModalProps } from './types';
  import { ModalRootContextKey } from './context';
  import { useModalRoot } from './composables';
  import { useConfigProviderRootContext } from '../ConfigProvider';
  import { provide, useAttrs } from 'vue';

  const props = withDefaults(defineProps<ModalProps>(), {
    appendToBody: true
  });

  const emit = defineEmits<ModalEmits>();

  const modelValue = defineModel<boolean>({
    required: true
  });

  defineOptions({
    inheritAttrs: false
  });

  const attrs = useAttrs();

  const configProviderRootContext = useConfigProviderRootContext();

  const { close, teleportTarget } = useModalRoot({
    configProviderRootContext,
    modelValue,
    props,
    onClose: () => {
      modelValue.value = false;

      emit('close');
    },
    onOpen: () => {
      emit('open');
    }
  });

  provide(ModalRootContextKey, {
    props,
    close
  });
</script>

<template>
  <teleport
    :to="teleportTarget"
    :disabled="!appendToBody"
  >
    <transition
      name="fade-in-down"
      @after-enter="emit('opened', $event)"
      @after-leave="emit('closed', $event)"
    >
      <div
        v-show="modelValue"
        class="modal"
        v-bind="attrs"
        :class="{
          'modal--open': modelValue,
          [`modal--size-${size}`]: size
        }"
        @click="close"
      >
        <slot/>
      </div>
    </transition>
  </teleport>
</template>
