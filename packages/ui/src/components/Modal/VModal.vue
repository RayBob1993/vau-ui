<script lang="ts" setup>
  import type { IVModalEmits, IVModalProps, IVModalSlots } from './types';
  import { useConfigProviderContext } from '../ConfigProvider';
  import { VOverlay } from '../Overlay';
  import { computed, watch } from 'vue';

  const props = defineProps<IVModalProps>();
  const emit = defineEmits<IVModalEmits>();
  const slots = defineSlots<IVModalSlots>();

  const modelValue = defineModel<boolean>({
    required: true
  });

  const ConfigProvider = useConfigProviderContext();

  const isHeaderVisible = computed<boolean>(() => Boolean(props.title) || Boolean(slots?.header));
  const isFooterVisible = computed<boolean>(() => Boolean(slots?.footer));

  function handleClose () {
    modelValue.value = false;
  }

  function afterEnter (payload: Element) {
    emit('opened', payload);
  }

  function afterLeave (payload: Element) {
    emit('closed', payload);
  }

  watch(modelValue, value => {
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
      <v-overlay>
        <div
          v-show="modelValue"
          class="v-modal"
          role="dialog"
          :class="{
            'v-modal--open': modelValue
          }"
        >
          <div
            v-if="isHeaderVisible"
            class="v-modal__header"
          >
            <slot
              name="header"
              :close="handleClose"
            >
              {{ title }}
            </slot>

            <button
              class="v-modal__close-button"
              type="button"
              @click="handleClose"
            >
              x
            </button>
          </div>

          <div class="v-modal__body">
            <slot :close="handleClose"/>
          </div>

          <div
            v-if="isFooterVisible"
            class="v-modal__footer"
          >
            <slot
              name="footer"
              :close="handleClose"
            />
          </div>
        </div>
      </v-overlay>
    </transition>
  </teleport>
</template>
