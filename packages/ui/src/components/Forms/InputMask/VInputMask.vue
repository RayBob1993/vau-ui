<script lang="ts" setup>
  import type { IVInputMaskProps } from './types';
  import type { IVInputInstance, IVInputMode, IVInputModelValue } from '../Input/types';
  import { MaskModes, MASK_DATE_OPTIONS, MASK_PHONE_OPTIONS } from './constants';
  import { VInput } from '../Input';
  import { InputModes } from '../../../constants';
  import { type Maybe, omit } from '@vau/core';
  import { computed, useTemplateRef } from 'vue';

  const props = defineProps<IVInputMaskProps>();

  const modelValue = defineModel<IVInputModelValue>({
    required: true
  });

  const inputRef = useTemplateRef<IVInputInstance>('input');

  const inputProps = computed(() => {
    return omit(props, [
      'mask',
      'maskMode',
      'inputMode'
    ]);
  });

  const inputMode = computed<Maybe<IVInputMode>>(() => {
    switch (props.maskMode) {
      case MaskModes.DATE:
        return InputModes.NUMERIC;
      case MaskModes.PHONE:
        return InputModes.TEL;
      default:
        return props.inputMode;
    }
  });

  function getMaskOptions () {
    switch (props.maskMode) {
      case MaskModes.DATE:
        return MASK_DATE_OPTIONS;
      case MaskModes.PHONE:
        return MASK_PHONE_OPTIONS;
      default:
        return props.mask ?? {};
    }
  }
</script>

<template>
  <v-input
    ref="inputRef"
    v-model="modelValue"
    class="v-input-mask"
    :input-mode="inputMode"
    v-bind="inputProps"
  />
</template>
