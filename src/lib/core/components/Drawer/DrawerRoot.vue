<script setup lang="ts">
  import type { DrawerEmits, DrawerProps } from './types';
  import { DrawerRootContextKey } from './context';
  import { useDrawerRoot } from './composables';
  import { useEscapeKey } from '../../composables';
  import { useConfigProviderRootContext } from '../ConfigProvider';
  import { provide, useAttrs } from 'vue';

  const props = withDefaults(defineProps<DrawerProps>(), {
    position: 'left',
    appendToBody: true,
    closeOnEscape: true
  });

  const emit = defineEmits<DrawerEmits>();

  const modelValue = defineModel<boolean>({
    required: true
  });

  defineOptions({
    inheritAttrs: false
  });

  const attrs = useAttrs();

  const configProviderRootContext = useConfigProviderRootContext();

  const { close, teleportTarget } = useDrawerRoot({
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

  useEscapeKey({
    when: () => modelValue.value,
    enabled: () => props.closeOnEscape,
    onEscape: () => {
      close();
    }
  });

  provide(DrawerRootContextKey, {
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
      :name="`drawer-${position}`"
      @after-enter="emit('opened', $event)"
      @after-leave="emit('closed', $event)"
    >
      <div
        v-show="modelValue"
        class="dialog"
        v-bind="attrs"
        :class="{
          'dialog--open': modelValue,
          [`dialog--position-${position}`]: position,
          [`dialog--size-${size}`]: size
        }"
        @click="close"
      >
        <slot/>
      </div>
    </transition>
  </teleport>
</template>
