<script setup lang="ts">
  import type { OptionProps, OptionSlots } from './types';
  import { useSelectOption } from './composables';
  import { useSelectRootContext } from './context';

  const props = defineProps<OptionProps>();

  defineSlots<OptionSlots>();

  const SelectRootContext = useSelectRootContext();

  const { isActive, isDisabled, handleChange } = useSelectOption({
    selectRootContext: SelectRootContext,
    props: () => props
  });
</script>

<template>
  <div
    class="select-option"
    :class="{
      'select-option--active': isActive,
      'select-option--disabled': isDisabled
    }"
    @click="handleChange(value)"
  >
    <slot
      :is-active="isActive"
      :is-disabled="isDisabled"
    />
  </div>
</template>
