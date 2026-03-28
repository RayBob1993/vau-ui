<script setup lang="ts">
  import type { IVRatingProps, IVRatingSlots, IVRatingModelValue } from './types';
  import { useRange } from './composables';

  const props = withDefaults(defineProps<IVRatingProps>(), {
    stars: 5,
    step: 1
  });

  defineSlots<IVRatingSlots>();

  const modelValue = defineModel<IVRatingModelValue>({
    required: true
  });

  const { isDisabled, validationStatus } = useRange({
    modelValue: () => modelValue.value,
    props
  })
</script>

<template>
  <div
    class="v-rating"
    :class="{
      'v-rating--disabled': isDisabled,
      'v-rating--readonly': readonly,
      'v-rating--invalid': validationStatus?.isError,
      'v-rating--valid': validationStatus?.isSuccess
    }"
  >
    <div
      v-for="option in stars"
      :key="`option-${option}`"
      class="v-rating__option"
      :class="{
        'v-rating__option--active': modelValue <= option
      }"
    >
      {{ option }}

      <slot name="onIcon">
        Да
      </slot>

      <slot name="offIcon">
        Нет
      </slot>
    </div>
  </div>
</template>
