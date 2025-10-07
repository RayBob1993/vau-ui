<script lang="ts" setup>
  import type { IVDropdownProps, IVDropdownEmits, IVDropdownSlots, IVDropdownExpose } from './types';
  import { VDropdownContextKey } from './context';
  import { vClickOutside } from '../../directives';
  import { useToggle } from '@vau/core';
  import { provide, watch } from 'vue';

  const props = defineProps<IVDropdownProps>();
  const emit = defineEmits<IVDropdownEmits>();

  defineSlots<IVDropdownSlots>();

  const [isVisible, setVisible, toggleVisible] = useToggle();

  const hide = () => setVisible(false);

  function onAfterEnter (payload: Element) {
    emit('opened', payload);
  }

  function onAfterLeave (payload: Element) {
    emit('opened', payload);
  }

  watch(isVisible, value => {
    if (value) {
      emit('open');
    } else {
      emit('close');
    }
  });

  defineExpose<IVDropdownExpose>({
    setVisible,
    isVisible
  });

  provide(VDropdownContextKey, {
    props
  });
</script>

<template>
  <div
    v-click-outside="hide"
    class="v-dropdown"
  >
    <slot
      name="trigger"
      :is-visible="isVisible"
      :toggle="toggleVisible"
      :set-visible="setVisible"
    />

    <transition
      @after-enter="onAfterEnter"
      @after-leave="onAfterLeave"
    >
      <div
        v-show="isVisible"
        class="v-dropdown__menu"
      >
        <slot/>
      </div>
    </transition>
  </div>
</template>


