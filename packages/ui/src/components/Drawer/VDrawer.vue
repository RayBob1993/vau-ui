<script lang="ts" setup>
  import type { IVDrawerProps, IVDrawerEmits, IVDrawerSlots } from './types';
  import { useConfigProviderContext } from '../../components';
  import { computed, watch } from 'vue';

  const props = defineProps<IVDrawerProps>();
  const emit = defineEmits<IVDrawerEmits>();
  const slots = defineSlots<IVDrawerSlots>();

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
      <div
        v-show="modelValue"
        class="v-drawer"
        role="dialog"
        :class="{
          'v-drawer--open': modelValue
        }"
      >
        <div class="v-drawer__dialog">
          <div
            v-if="isHeaderVisible"
            class="v-drawer__header"
          >
            <slot
              name="header"
              :close="handleClose"
            >
              {{ title }}
            </slot>

            <button
              class="v-drawer__close-button"
              type="button"
              @click="handleClose"
            >
              x
            </button>
          </div>

          <div class="v-drawer__body">
            <slot :close="handleClose"/>
          </div>

          <div
            v-if="isFooterVisible"
            class="v-drawer__footer"
          >
            <slot
              name="footer"
              :close="handleClose"
            />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
