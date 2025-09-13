<script lang="ts" setup>
  import type { IVDialogProps, IVDialogEmits, IVDialogSlots } from './types';
  import { useConfigProviderContext } from '../../components';
  import { computed, watch } from 'vue';

  const props = defineProps<IVDialogProps>();
  const emit = defineEmits<IVDialogEmits>();
  const slots = defineSlots<IVDialogSlots>();

  const isVisible = defineModel<boolean>('visible', {
    required: true
  });

  const ConfigProvider = useConfigProviderContext();

  const isHeaderVisible = computed<boolean>(() => !!props.title || !!slots?.header);
  const isFooterVisible = computed<boolean>(() => !!slots?.footer);

  function handleClose () {
    isVisible.value = false;
  }

  function afterEnter (payload: Element) {
    emit('opened', payload);
  }

  function afterLeave (payload: Element) {
    emit('closed', payload);
  }

  watch(isVisible, value => {
    if (value) {
      emit('open');
    } else {
      emit('close');
    }
  });
</script>

<template>
  <teleport
    :to="ConfigProvider.teleportTarget"
    :disabled="!appendToBody"
  >
    <transition
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div
        v-show="isVisible"
        class="v-dialog"
        role="dialog"
        :class="{
          'v-dialog--open': isVisible
        }"
      >
        <div
          v-if="isHeaderVisible"
          class="v-dialog__header"
        >
          <slot
            name="header"
            :close="handleClose"
          >
            {{ title }}
          </slot>

          <button
            class="v-dialog__close-button"
            type="button"
            @click="handleClose"
          >
            x
          </button>
        </div>

        <div class="v-dialog__body">
          <slot :close="handleClose"/>
        </div>

        <div
          v-if="isFooterVisible"
          class="v-dialog__footer"
        >
          <slot
            name="footer"
            :close="handleClose"
          />
        </div>
      </div>
    </transition>
  </teleport>
</template>
