<script lang="ts" setup>
  import type { IVDropdownProps, IVDropdownEmits, IVDropdownSlots, IVDropdownExpose } from './types';
  import { VDropdownContextKey } from './context';
  import { useToggle } from '@vau/core';
  import { provide, watch } from 'vue';

  const props = defineProps<IVDropdownProps>();
  const emit = defineEmits<IVDropdownEmits>();

  defineSlots<IVDropdownSlots>();

  const [isVisible, setVisible, toggleVisible] = useToggle();

  function handleAfterEnter (payload: Element) {
    emit('opened', payload);
  }

  function handleAfterLeave (payload: Element) {
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
    class="v-dropdown"
    :class="{
      'v-dropdown--open': isVisible
    }"
  >
    <slot
      name="trigger"
      :is-visible="isVisible"
      :toggle="toggleVisible"
      :set-visible="setVisible"
    />

    <transition
      @after-enter="handleAfterEnter"
      @after-leave="handleAfterLeave"
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


