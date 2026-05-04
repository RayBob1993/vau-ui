<script setup lang="ts">
  import type { DrawerEmits, DrawerProps, DrawerSlots } from './types';
  import { DrawerRootContextKey } from './context';
  import { useDrawerRoot } from './composables';
  import { useBodyScrollbar, useEscapeKey } from '../../composables';
  import { useConfigProviderRootContext } from '../ConfigProvider';
  import { provide, useAttrs } from 'vue';

  const props = withDefaults(defineProps<DrawerProps>(), {
    position: 'left',
    appendToBody: true,
    closeOnEscape: true
  });

  const emit = defineEmits<DrawerEmits>();

  defineSlots<DrawerSlots>();

  const modelValue = defineModel<boolean>({
    required: true
  });

  defineOptions({
    inheritAttrs: false
  });

  const attrs = useAttrs();

  const configProviderRootContext = useConfigProviderRootContext();

  const { show, hide } = useBodyScrollbar();

  const { close, teleportTarget } = useDrawerRoot({
    configProviderRootContext,
    modelValue,
    props,
    onClose: () => {
      modelValue.value = false;

      show();

      emit('close');
    },
    onOpen: () => {
      hide();

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
        class="drawer"
        v-bind="attrs"
        :class="{
          'drawer--open': modelValue,
          [`drawer--position-${position}`]: position,
          [`drawer--size-${size}`]: size
        }"
        @click="close"
      >
        <slot :close="close"/>
      </div>
    </transition>
  </teleport>
</template>
